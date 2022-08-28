// 数组去重
let arr = [1,2,3,4,5,4,3,2,1]
console.log([...new Set(arr)]); // [ 1, 2, 3, 4, 5 ]


// 交集
let arr2 = [1,2,3,4,5,4,3,2,1]
let arr3 = [1,2,3,6]
console.log([...new Set(arr2)].filter(item => new Set(arr3).has(item))); // [1,2,3]


// 并集
console.log([...new Set([...arr2, ...arr3])]); // [ 1, 2, 3, 4, 5, 6 ]


// 差集：在 arr2 中有，但是在 arr3 中没有
console.log([...new Set(arr2)].filter(item => !new Set(arr3).has(item))); // [4,5]
