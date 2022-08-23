// 基本用法

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // let data = '接口返回的数据'
        // resolve(data)

        reject('获取数据出错')
    }, 500)
})

p.then(res => {
    console.log('res:', res)
}).catch(err => {
    console.warn('err:', err)
})