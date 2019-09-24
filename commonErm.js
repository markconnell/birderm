$(document).ready(function() {

  // Create graph ------------------------------------- 
  //  The source data comes from graph_source.js:
  //    nodes: collected in arrays, given by node_groups
  //    edges: given by edgesInput


  // Process nodes: create labels and delete unnecessary fields

  for (var g in node_groups) {
    for (var n in node_groups[g]) {
      var node = node_groups[g][n];
      node.label =
        '<b>' + node.code + '</b>' + node.name + '\n' +
        "-".repeat(node.name.length) + '\n' + 
        node.primaryKey.join('\n');
      delete node.name;
      delete node.primaryKey;
    };
  };

  // Create graph in vis, with an empty set of nodes.

  nodes = new vis.DataSet();
  edges = new vis.DataSet(edgesInput);
  var container = document.getElementById("mynetwork");

  createVtlGraph(
    { nodes: nodes, edges: edges },
    container
  );

  // Website buttons ------------------------------------

  $("#treeButton").click( function() {
    $("#tree").toggle();
    if ($("#tree").is(":visible")) {
      $("#treeButton").attr("value", "Hide tree");
    } else {
      $("#treeButton").attr("value", "Show tree");
    }
  });

  $("#goToCubeButton").click( function() {
    window.open("/cube?CUBE_ID=" + nodes._data[selectedNode]["id"]);
  });

  $("#hideNodeButton").click(function() {
    nodes.remove(selectedNode);
  });

  // Initialize tree ------------------------------------
  //
  // The source data comes from treeStructure, in tree_source.js

  $("#tree").fancytree({
    checkbox: true,
    selectMode: 3,
    source: treeStructure,

    activate: function(event, data) {
      $("#statusLine").html(Object.keys(nodes._data).join("<br />"));
    },
    select: function(event, data) {
      var selection;
      if (data.node.isSelected()) {
        var nds = data.node.data.variable;
        nodes.add(nds);
      } else if (!data.node.isSelected()) {
        var nds = data.node.data.variable;
        nodes.remove(nds);
      }
    }
  });
});

function createVtlGraph(data, container) {
  var options = {
    //inizialize options, should we move it on top?
    autoResize: false,
    height: "800px",
    width: "100%",
    interaction: { hover: true },
    nodes: {
      shape: "box",
      color: "#FFCFCF",
      font: {
        bold: {
          color: "#0077aa"
        },
        face: "monospace",
        align: "left",
        multi: "html",
        size: 20
      }
    },
    edges: {
      arrows: "to",
      smooth: {
        type: "continuous",
        forceDirection: "none"
      }
    },

    groups: {},
    physics: {
      repulsion: {
        centralGravity: 0.2,
        springConstant: 0.01,
        damping: 0.67,
        nodeDistance: 400
      },
      maxVelocity: 102,
      minVelocity: 0.75,
      solver: "repulsion",
      timestep: 0.83
    }
  };

  // initialize your network!
  network = new vis.Network(container, data, options);

  network.on("click", function(params) {});

  network.on("select", function(params) {
    if (params.nodes.length == 1) {
      selectedNode = params.nodes[0];
    }

    network.on("doubleClick", function(params) {
      var nd = params.nodes[0];
      window.open("/cube?CUBE_ID=" + nodes._data[nd]["id"]);
      //nodes.remove(params.nodes);
    });
  });
}
