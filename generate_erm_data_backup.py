from graphdb import importFromAccess, CubeHierarchy, CubeRelationship
import json

importFromAccess(
    r'C:\Users\prataps\Desktop\db\PG_SDD_with_FINREP.accdb')

cube_hierarchy = CubeHierarchy.instances['BIRD_IL']

# Create the tree structure

tree_structure = [
    {
        "id": node.NODE_CODE,
        "parent": (node.getParentNode().NODE_CODE
                    if node.getParentNode() is not None else '#'),
        "text": node.NODE_NAME,
        "cube_group": node.getCubeGroup().getID() if node.getCubeGroup() is not None else None,
        "state": {"opened": False} if node.getParentNode() is None else None,
    }
    for node in cube_hierarchy.getCubeHierarchyNodes()
]

# further processing
for d in tree_structure:
    if d["state"] is None:
        del d["state"]
    if d["cube_group"] is None:
        d.pop("cube_group")

    if any(t in d["text"] for t in 
        ["-instruments", "-securities", "-loans", "-protections", "-counterparties", ]):
        d["text"] = d["text"].replace('-', ' to ')

tree_structure = sorted(tree_structure, key=lambda d: d["text"])

# Create the cube groups

def cube_dictionary(cube):
    primary_key = '\n'.join(
        csi.getVariable().CODE
        for csi in cube.getCubeStructure().getCubeStructureItems()
        if csi.getRole() == 'D')

    label = (f"<b>{cube.CODE}</b>\n"
             f"{cube.NAME}\n
"             f"{'-'*len(cube.NAME)}\n"
             f"{primary_key}")

    return {
        "code": cube.CODE,
        "id": cube.getID(),
        "label": label,
    }


cube_groups = {
    node.getCubeGroup().getID():
        [cube_dictionary(cge.getCube())
        for cge in node.getCubeGroup().getCubeGroupEnumerations()]
    for node in cube_hierarchy.getCubeHierarchyNodes()
    if node.getCubeGroup() is not None
}

# Create the edges

cube_relationships = [
    cr
    for node in cube_hierarchy.getCubeHierarchyNodes()
    if node.getCubeGroup() is not None
    for cge in node.getCubeGroup().getCubeGroupEnumerations()
    for cr in cge.getCube().getParentsOfType(CubeRelationship)
]

edges = [
    {
        "primary": cr.getPrimaryCube().getID(),
        "foreign": cr.getForeignCube().getID(),
        "label": ' -> '.join(
            v.CODE for v in {
                cr.getPrimaryVariable(),
                cr.getForeignVariable()}),
    }
    for cr in cube_relationships
]

# Export

erm_data = {
    "tree_structure": tree_structure,
    "cube_groups": cube_groups,
    "edges": edges,
}

with open('ermData.json', 'w') as outfile:
    json.dump(erm_data, outfile)