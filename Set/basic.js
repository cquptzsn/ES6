// Set（集合），ES6 提供的新的数据结构，内部实现了 iterator接口，可以用扩展运算符和 for of 遍历

let s = new Set()

console.log('s:', s, typeof s); // s: Set(0) {} object

//基本属性：
let s2 = new Set([1, 2, 3, 4, 5, 1]) // 会自动去重数组
console.log('s2:', s2); // s2: Set(5) { 1, 2, 3, 4, 5 }

// 个数
console.log('s2.length:', s2.size); // s2.length: 5

// 添加新元素
s2.add(6)
console.log('s2.add:', s2) // s2.add: Set(6) { 1, 2, 3, 4, 5, 6 }

// 删除元素
s2.delete(2)
console.log('s2.delete:', s2); // s2.delete: Set(5) { 1, 3, 4, 5, 6 }

// 检测是否有某个元素
console.log('s2.has:', s2.has(2));

// 清空
s2.clear()
console.log('s2.clear:', s2); // s2.clear: Set(0) {}





