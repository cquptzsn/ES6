class Phone {
  // get 读取属性，会执行该方法， 属性值为返回值
  get price() {
    console.log('价格被读取')
    return 'get获取属性'
  }

  // set 修改属性，函数至少有一个参数
  set price(newPrice) {
    console.log('价格被修改')
  }
}

let s = new Phone()
console.log(s.price)
// 价格被读取
// get获取属性


s.price = 'free' // 价格被修改
