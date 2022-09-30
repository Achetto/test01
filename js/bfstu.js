const graph = {
  0: [1,2],
  1: [2],
  2: [0,3],
  3: [3]
}

const bfs = (tu,firstnode) => {
  const visited = new Set() 
  visited.add(firstnode)
  const q = [firstnode]

  while (q.length) {
    const n = q.shift()
    console.log(n)
    tu[n].forEach(c => {
      if (!visited.has(c)) {
        q.push(c)
        visited.add(c)
      }
    })
  }
}

bfs(graph,1)