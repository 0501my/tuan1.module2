class QuadraticEquation {

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        let delta = this.b ** 2 - 4 * this.a * this.c;
        return delta;
    }

    getRoot1() {
        let x1 = (-this.b - Math.pow(this.getDiscriminant(), 0.5) / 2 * this.a)
        return x1;
    }

    getRoot2() {
        let x2 = (-this.b + Math.pow(this.getDiscriminant(), 0.5) / 2 * this.a)
        return x2;
    }

    equation() {
        if (this.getDiscriminant() === 0) {
            console.log("phương trình có 2 nghiệm : " + this.getRoot1())
        } else if (this.getDiscriminant() < 0) {
            console.log("phương trình vô nghiệm")
        } else {
            console.log("phương trình có nghiệm là :" + this.getRoot1() + " và " + "\n" + this.getRoot2())
        }
    }
}

let pt = new QuadraticEquation(3, 8, 3)
pt.equation()