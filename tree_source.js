// Tree structure of nodes, to be given to fancyTree as source
// It is a list of "tree nodes" (different from graph nodes).
//
// Each node is an object with the following fields:
//   * title (string): Name to be displayed 
//   * expanded (true/false): default state 
//   * folder (true/false): 
//   * children (array): a list of other nodes with the same structure
//
// The "leaf nodes" have an addition field: "variable". This is an array
// of graph nodes, and it must be one of the arrays of graph_source.js.

treeStructure = [
  {
    "title": "Enties and related information",
    "expanded": "false",
    "folder": "true",
    "children": [{
        "title": "Main counterparties cubes",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_ENTTY_MN
      },
      {
        "title": "Enterprise size derivation cubes",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_ENTTY_ENTRPRS_SZ
      },
      {
        "title": "Own group/branches information",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_ENTTY_GRP
      }
    ]
  },
  {
    "title": "Financial instruments",
    "expanded": "false",
    "folder": "true",
    "children": [{
        "title": "Loans/deposits",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_FNNCL_INSTRMNTS_LN
      },
      {
        "title": "Securities holdings",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_FNNCL_INSTRMNTS_SH
      },
      {
        "title": "Other financial assets",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_OTHR_FNNCL_ASSTS
      },
      {
        "title": "Financial liabilities",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_FNNCL_INSTRMNTS_LBLTS
      },
      {
        "title": "Derivatives",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_FNNCL_INSTRMNTS_DRVTVS
      },
      {
        "title": "Master data",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_FNNCL_INSTRMNTS_MSTR
      },
      {
        "title": "Credit lines",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_FNNCL_INSTRMNTS_CRDT_LNS
      }
    ]
  },
  {
    "title": "Protection",
    "expanded": "false",
    "folder": "true",
    "children": [{
        "title": "Physical protection",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_PRTCTN_PHYSCL
      },
      {
        "title": "Financial protection",
        "expanded": "false",
        "folder": "true",
        "variable": BIRD_PRTCTN_FNNCL
      }
    ]
  },
  {
    "title": "Links",
    "expanded": "false",
    "folder": "true",
    "children": [{
      "title": "Links",
      "expanded": "false",
      "folder": "true",
      "variable": BIRD_LINKS
    }]
  },
  {
    "title": "Non-financial items",
    "expanded": "false",
    "folder": "true",
    "children": [{
      "title": "Non-financial items",
      "expanded": "false",
      "folder": "true",
      "variable": BIRD_NN_FNNCL_ITM
    }]
  },
  {
    "title": "Auxiliary cubes",
    "expanded": "false",
    "folder": "true",
    "children": [{
      "title": "Auxiliary cubes",
      "expanded": "false",
      "folder": "true",
      "variable": BIRD_AXLRY
    }]
  }
];