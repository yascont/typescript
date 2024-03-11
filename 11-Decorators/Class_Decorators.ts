function logged(constructor: Function) {
    console.log('created !')
}

@logged
class MyClass {
    constructor(public message: string) {}
}

const instance = new MyClass("Hello");

