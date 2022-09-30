new Promise((resolve,reject) => {
  console.log('同步2')
  // reject('操作失败')
  resolve('操作成功')
})
.then(value => {
  return new Promise((resolve, reject) => {
    reject()
  })
},reason => {
  console.log(reason)
})
.then(value => {
  console.log('cg2')
},reason => {
  console.log('sb2')
})
.catch( error => {
  console.log(error)
})

console.log('同步1')