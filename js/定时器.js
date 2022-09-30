function timeout(delay = 1000) {
  return new Promise(resolve => setTimeout(resolve,delay))
}

timeout()
.then(() => {
  console.log('一秒后输出')
  return timeout(2000)     //返回一个promise，下一个then接受
})
.then(() => {
  console.log('再两秒后输出')
})