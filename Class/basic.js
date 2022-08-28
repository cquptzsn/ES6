// ES6 的 class 可以看做只是一个语法糖，他的绝大部分功能 ES5 都可以做到

// class声明类
class Phone {
  // constructor 定义构造函数初始化
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  call() {
    console.log('我可以打电话');
  }
}

const HUAWEI = new Phone('华为', 1999)
console.log('HUAWEI:', HUAWEI); // HUAWEI: Phone { name: '华为', price: 1999 }
HUAWEI.call() // 我可以打电话