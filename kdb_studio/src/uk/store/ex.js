{
  let beforeData = [
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

    let traverse = (nodes, item, index) => {
      // if (nodes instanceof Array)는 traverse를 재귀적으로 호출할때
      // nodes 파라미터로 node.children이 들어오게 되는데
      // 해당 node안에 property로 children이 존재하지 않을 경우 undefined로 인식하기때문에
      // 자식이 존재하지 않을 경우 해당 로직을 넘어가게된다.
      if (nodes instanceof Array) {
        // some : 해당 배열에서 하나라도 만족함 true
        return nodes.some(node => {
          if (node.id === item.parentId) {
            // node 객체에 children이 존재하면 해당 값을 넣고 존재하지않으면 key & value 형식으로 빈배열 생성
            node.children = node.children || [];
            return node.children.push(arrayList.splice(index, 1)[0]);
          }
          return traverse(node.children, item, index);
        });
      }
    };

    while (arrayList.length > 0) {
      arrayList.some((item, index) => {
        if (item.parentId === rootId) {
          // splice(index,1) : index자리부터 하나를 삭제한 값을 배열에 담아 리턴
          // 따라서 해당 인덱스의 값이 다음과 같이 출력되고 => [ {해당값} ]
          // [0]을 붙여 줌으로써 {해당값} 만을 뽑아 rootNodes에 추가해준다.
          return rootNodes.push(arrayList.splice(index, 1)[0]);
        }
        return traverse(rootNodes, item, index);
      });
    }

    return rootNodes;
  }

  // let afterData = funcTreeModel(beforeData, 'root');
  // console.log(afterData);

  function dfs(startId) {
    // 탐색해야할 노드
    let needVisitStack = [];
    // 탐색을 마친 노드
    let visitedQueue = [];

    let foundIndex = beforeData.findIndex(i => i.id === startId);
    needVisitStack.push(beforeData[foundIndex]);

    while (needVisitStack.length !== 0) {
      const node = needVisitStack.pop();
      if (!visitedQueue.includes(node)) {
        visitedQueue.push(node);
        let array1 = beforeData.filter(i => i.parentId === node.id);
        needVisitStack = [...needVisitStack, ...array1];
      }
    }

    return visitedQueue;
  }

  function removeUk(id) {
    let removeList = dfs(id);

    while (removeList.length !== 0) {
      let node = removeList.pop();
      for (let i = 0; i < beforeData.length; i++) {
        if (beforeData[i] === node) {
          beforeData.splice(i, 1);
          i--;
        }
      }
      console.log(beforeData);
    }
  }

  removeUk(1);
}
