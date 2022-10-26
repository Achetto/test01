function kuohaopp(s) {
  if (s.length % 2 === 1) { return false;}
  const stack = [];
  const map = new Map();
  map.set('(',')');
  map.set('[',']');
  map.set('{','}');
  for(let i = 0; i < s.length; i++ ) {
      const p = s[i];
      if(map.has(p)) {
        stack.push(p);
      }
      else {
        const t = stack[stack.length-1];
        if(map.get(t) === p) {
            stack.pop();
        }
        else {
            return false;
        }
      }
  }
  return stack.length === 0;
};

console.log(kuohaopp("()"));
console.log(kuohaopp("()[]{}"));
console.log(kuohaopp("(]"));
console.log(kuohaopp("()({})[]}"));
console.log(kuohaopp("()({})()[][]{}[]{}"));