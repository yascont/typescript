function format(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function() {
        const result = originalMethod.apply(this);
        return result.toUpperCase();
    };
    return descriptor;
}


class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @format
    greet() {
        return "Hello, " + this.greeting;
    }
}