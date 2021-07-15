class MyClass {
    constructor () {
      console.log("initiate");
    }

    add (arg1, arg2) {
      var result = arg1 + arg2;
      return result;
    }

    sayHello = (str) => {
      console.log(str)
    }

    callAnotherfunc (a1, a2, str) {
      this.sayHello();
      var addOnce = this.add(a1,a2);
      return addOnce;
    }

    multiply (arg1, arg2) {
      var res = arg1 * arg2;
      return res;
    }

}

module.exports = MyClass;
