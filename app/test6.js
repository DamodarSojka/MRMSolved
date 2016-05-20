class Greeting {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return this.greeting + " " + this.name;
    }
}

// I need to admit this might not be the best solution ever
export class English extends Greeting {
    constructor(name) {
        super(name);
        this.greeting = "Hello";
    }
}

export class French extends Greeting {
    constructor(name) {
        super(name);
        this.greeting = "Bonjour";
    }
}

export class Spanish extends Greeting {
    constructor(name) {
        super(name);
        this.greeting = "Hola";
    }
}
