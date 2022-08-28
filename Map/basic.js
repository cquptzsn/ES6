// ES6 提供的数据结构。类似于对象，也是键值对的集合。但是“键”的返回不限于字符串，各种类型的值（包括对象）都可以当做键，Map也实现了 interator 接口
// Map 的属性：
let m = new Map()

// set 添加元素
m.set('name', '周圣楠')
m.set('change', () => {
  console.log('改变世界');
})
let key = { school: 'cqupt' }
m.set(key, ['计算机', '软件工程', '通信'])

// size
console.log(m.size); // 3

// get 获取元素
console.log(m.get('name')); // 周圣楠
console.log(m.get(key)); // [ '计算机', '软件工程', '通信' ]

// delete
m.delete('name')
console.log(m);
// Map(2) {
//   'change' => [Function (anonymous)],
//   { school: 'cqupt' } => [ '计算机', '软件工程', '通信' ]
// }


// 遍历
for(let item of m) {
  console.log('item:', item);
}
// item: [ 'change', [Function (anonymous)] ]
// item: [ { school: 'cqupt' }, [ '计算机', '软件工程', '通信' ] ]

// clear
m.clear()
console.log('m:', m); // m: Map(0) {}
