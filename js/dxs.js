let Node = function (element) {
  this.element = element;
  this.next = null;
};

class LinkedList {
  constructor() {
      this.length = 0;
      this.head = null;
  }

  append (element) {
    let node = new Node(element);

    // 如果当前链表为空，则将head指向node
    if (this.head === null) this.head = node;
    else {
        // 否则，找到链表尾部的元素，然后添加新元素
        let current = this.getElementAt(this.length - 1);
        current.next = node;
    }

    this.length++;
  } 
  // 向链表中添加节点

  getElementAt (position) {
    if (position < 0 || position >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < position; i++) {
        current = current.next;
    }
    return current;
  }  
  // 返回链表中索引所对应的元素

  size () {
    return this.length;
  } // 返回链表的长度

  toString () {
    let current = this.head;
    let s = '';
 
    while (current) {
      let next = current.next;
      next = next ? next.element : 'null';
      s += `[element: ${current.element}] `;
      current = current.next;
    }
    return s;
  } // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
}

let dxs1 = new LinkedList();
let dxs2 = new LinkedList();

// 存储 5+3x+0+8x**3 
dxs1.append(5);
dxs1.append(3);
dxs1.append(0);
dxs1.append(8);
console.log(dxs1.toString());

// 存储 10 -1x + 2x**2 + 4x**3 - 6x**5
dxs2.append(10);
dxs2.append(-1);
dxs2.append(2);
dxs2.append(4);
dxs2.append(0);
dxs2.append(5);

console.log(dxs2.toString());

// 将两个多项式相加并返回一个新的多项式
function adddxs(a,b) {
  let newdxs = new LinkedList();
  let minlength = Math.min(a.size(),b.size());
  let maxdxs = a.size() > b.size()? a : b;
  for(let i = 0; i < minlength; i++) {
    let num = a.getElementAt(i).element + b.getElementAt(i).element;
    newdxs.append(num);
  }
  for(let i = minlength; i < maxdxs.length; i++ ) {
    newdxs.append(maxdxs.getElementAt(i).element);
  }
  return newdxs;
}

//多项式a减去多项式b并返回一个新的多项式
function minusdxs(a,b) {
  let newdxs = new LinkedList();
  let minlength = Math.min(a.size(),b.size());
  let maxdxs = a.size() > b.size()? a : b;
  for(let i = 0; i < minlength; i++) {
    let num = a.getElementAt(i).element - b.getElementAt(i).element;
    newdxs.append(num);
  }
  for(let i = minlength; i < maxdxs.length; i++ ) {
    newdxs.append(maxdxs.getElementAt(i).element);
  }
  return newdxs;
}

//多项式a乘以多项式b并返回一个新的多项式
function muldxs(a,b) {
  let newdxs = new LinkedList();
  let bufendxsnums = [];
  let minlength = Math.min(a.size(),b.size());
  let maxdxs = a.size() > b.size()? a : b;
  let mindxs = a.size() > b.size()? b : a;

  for(let i = 0; i < minlength; i++) {
    //将多项式拆分
    let bufendxs = new LinkedList();
    for(let k = 0; k < i ; k++) {
      //这一步为了在新的多项式bufendxs前j项为0
      bufendxs.append(0);
    }  
    for(let j = 0; j< maxdxs.length; j++) {
      let num = mindxs.getElementAt(i).element * maxdxs.getElementAt(j).element;
      bufendxs.append(num);
    }
    bufendxsnums.push(bufendxs);
  }

  bufendxsnums.forEach(a => {
    newdxs = adddxs(a,newdxs);
  })

  return newdxs;
}


let newdxs1 = adddxs(dxs1,dxs2);
console.log(newdxs1.toString());
let newdxs2 = minusdxs(dxs1,dxs2);
console.log(newdxs2.toString());
let newdxs3 = muldxs(dxs1,dxs2);
console.log(newdxs3.toString());