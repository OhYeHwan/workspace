{
  let beforeData = [
    {
      parentId: 'root',
      id: 'root',
    },
    {
      parentId: 'root',
      id: 1,
    },
    {
      parentId: 1,
      id: 2,
    },
    {
      parentId: 1,
      id: 3,
    },
    {
      parentId: 1,
      id: 4,
    },
    {
      parentId: 2,
      id: 5,
    },
    {
      parentId: 2,
      id: 6,
    },
    {
      parentId: 1,
      id: 10,
    },
    {
      parentId: 'root',
      id: 21,
    },
    {
      parentId: 21,
      id: 22,
    },
  ];

  function funcTreeModel(arrayList, rootId) {
    let rootNodes = [];

    let traverse = function (nodes, item, index) {
      if (nodes instanceof Array) {
        return nodes.some(function (node) {
          if (node.id === item.parentId) {
            node.children = node.children || [];
            return node.children.push(arrayList.splice(index, 1)[0]);
          }
          return traverse(node.children, item, index);
        });
      }
    };

    while (arrayList.length > 0) {
      arrayList.some(function (item, index) {
        if (item.parentId === rootId) {
          return rootNodes.push(arrayList.splice(index, 1)[0]);
        }
        return traverse(rootNodes, item, index);
      });
    }

    return rootNodes;
  }

  let afterData = funcTreeModel(beforeData, 'root');
  console.log(afterData);
  let data = afterData.filter(i => i.id !== 'root');
  console.log(data);
}
