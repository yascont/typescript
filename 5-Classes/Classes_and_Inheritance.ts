class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    constructor(theName: string) { 
        super(theName); 
    }
    move(distanceInMeters: number = 5) {
        console.log(`${this.name} ran ${distanceInMeters}m.`);
    }
}

const dog = new Dog("Fido");

dog.move(); 
