// 读取多个文件
const fs = require('fs')

//多个promise链式读取
new Promise((resolve, reject) => {
    fs.readFile('./source/learn.md', (err, data) => {
        resolve(data)
    })
}).then(res => {
    return new Promise((resolve, reject) => {
        fs.readFile('./source/learn.md', (err, data) => {
            resolve(data + res)
        })
    })
}).then(res => {
    fs.readFile('./source/learn.md', (err, data) => {
        console.log('res', res + data)
    })
})

// promise.all 批量读取
// const p1 = new Promise((resolve, reject) => {
//     fs.readFile('./source/learn.md', (err, data) => {
//         resolve(data)
//     })
// })

// const p2 = new Promise((resolve, reject) => {
//     fs.readFile('./source/learn.md', (err, data) => {
//         resolve(data)
//     })
// })

// const p3 = new Promise((resolve, reject) => {
//     fs.readFile('./source/learn.md', (err, data) => {
//         resolve(data)
//     })
// })

// Promise.all([p1, p2, p3]).then(res => {
//     console.log('res:', res.join())
    
// })