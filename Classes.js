class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vrooom';
    }
}

class Bmw extends Car {
    constructor(options) {
        super(options); // want to call Car.constructor();
        this.color = options.color;

    }
    honk() {
        return 'beep';
    }
}

const car = new Bmw({ color: 'red', title: 'save car' });
car.honk()
car.drive()
car;