// 读取文件
const fs = require('fs')

// 文件读取是异步行为
// fs.readFile('./source/learn.md', (err, data) => {
//     if(err) {
//         console.log('文件读取错误')
//     }
//     console.log('data: ', data.toString());
// })

const p = new Promise((resolve, reject) => {
    fs.readFile('./source/learn.md', (err, data) => {
        if(err) reject(err)
        resolve(data)
    })
})
p.then(res => {
    console.log('读取成功：', res.toString());
}
).catch(err => console.log('读取失败'))





