// 对象继承, ES5用构造函数，ES6可以用 Class

class Phone {
  constructor(brand, price) {
    this.brand = brand
    this.price = price
  }

  callSomeone() {
    console.log('给人打电话')
  }
}

class SmartPhone extends Phone {
  constructor(brand, price, color, size) {
    super(brand, price) // 使用 super 调用父类的构造函数
    this.color = color
    this.size = size
  }

  photo() {
    console.log('我可以拍照')
  }

  playGame() {
    console.log('我可以打游戏')
  }

  callSomeone() { // 完全重写父类方法s
    console.log('给人打视频电话')
  }
}

let xiaomi = new SmartPhone('小米', 1999, 'black', '5-inch')
console.log('xiaomi:', xiaomi)
// xiaomi: SmartPhone { brand: '小米', price: 1999, color: 'black', size: '5-inch' }
// 方法也可以看见，但是要在浏览器中查看，在 vscode 直接运行js文件看不到

xiaomi.photo() // 我可以拍照
xiaomi.playGame() // 我可以打游戏
xiaomi.callSomeone() // 给人打电话
