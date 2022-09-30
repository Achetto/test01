let r = 5
let c = 6;
[[r - 1, c], [r + 1, c], [r, c - 1], [r, c + 1]].forEach(([nr, nc]) => {
    console.log([nr,nc])
})
// 中括号开头的话前面要加;
