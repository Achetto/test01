function quanpailie(nums) {
  const res = []
  const backsu = (path) => {
      if(path.length === nums.length) {
          res.push(path)
          return
      }
      nums.forEach((n) => {
          if(path.includes(n)) { return }
          backsu(path.concat(n))
      })
  }
  backsu([])
  return res
};

nums = [1,2,3]
let result = quanpailie(nums)
console.log(result)