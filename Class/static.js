// static 定义静态方法和属性
class Phone {
  static name = '手机' // 静态变量实例无法访问
  static change() { // 静态方法实例无法访问
    console.log('我可以改变世界');
  }
}

let nokia = new Phone()
console.log(nokia.name) // undefined
console.log(Phone.name) // shouji 
// nokia.change() // 报错
Phone.change() // 我可以改变世界

class Shouji {
  name = '手机'
  change() {
    console.log('我可以改变世界');
  }
}

let xiaomi = new Shouji()
console.log(xiaomi.name) // 手机
console.log(Shouji.name) // Shouji
xiaomi.change() // 我可以改变世界
// Shouji.change() // 报错，类无法调用非静态方法