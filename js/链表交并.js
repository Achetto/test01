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

  insert (position, element) {
    // position不能超出边界值
    if (position < 0 || position > this.length) return false;

    let node = new Node(element);

    if (position === 0) {
        node.next = this.head;
        this.head = node;
    }
    else {
        let previous = this.getElementAt(position - 1);
        node.next = previous.next;
        previous.next = node;
    }

    this.length++;
    return true;
  } 
  // 在链表的指定位置插入节点

  removeAt (position) {
    // position不能超出边界值
    if (position < 0 || position >= this.length) return null;

    let current = this.head;

    if (position === 0) this.head = current.next;
    else {
        let previous = this.getElementAt(position - 1);
        current = previous.next;
        previous.next = current.next;
    }

    this.length--;
    return current.element;
  } 
  // 删除链表中指定位置的元素，并返回这个元素的值

  remove (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  } // 删除链表中对应的元素

  indexOf (element) {
    let current = this.head;

    for (let i = 0; i < this.length; i++) {
        if (current.element === element) return i;
        current = current.next;
    }

    return -1;
  }
 // 在链表中查找给定元素的索引

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

  getHead () {
    return this.head;
  } // 返回链表的头元素

  clear () {
    this.head = null;
    this.length = 0;
  } // 清空链表

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
  } 
}
// 链表的并
function BinList (list1, list2) {
  let mySet = new Set();
  while(list1.head) {
    mySet.add(list1.head.element)
    list1.head = list1.head.next;
  }
  while(list2.head) {
    mySet.add(list2.head.element)
    list2.head = list2.head.next;
  }
  console.log(mySet);
}
// 链表的交
function JiaoList (list1, list2) {
  let mySet1 = new Set();
  let mySet2 = new Set();
  let mySet3 = new Set();
  while(list1.head) {
    mySet1.add(list1.head.element)
    list1.head = list1.head.next;
  }
  while(list2.head) {
    mySet2.add(list2.head.element)
    list2.head = list2.head.next;
  }
  for(let val of mySet1.values()) {
    if(mySet2.has(val)) {
      mySet3.add(val);
    }
  }
  console.log(mySet3);
}

// 创建链表
let list1 = new LinkedList();
list1.append(10);
list1.append(15);
list1.append(20);
let list2 = new LinkedList();
list2.append(5);
list2.append(10);
list2.append(20);
list2.append(30);
list2.append(40);

console.log('链表一'+list1.toString());
console.log('链表二'+list2.toString());

// BinList(list1, list2);
JiaoList(list1, list2);



// // 插入链表
// list1.insert(0, 9);
// list1.insert(2, 11);
// list1.insert(5, 25);
// console.log(list1.toString());

// // 把对应的位置删除并且返回值
// console.log(list1.removeAt(0));
// console.log(list1.removeAt(1));
// console.log(list1.removeAt(3));
// console.log(list1.toString());

// // 返回值为20的位置
// console.log(list1.indexOf(20));

// // 删除值为20的节点
// list1.remove(20);
// console.log(list1.toString());
