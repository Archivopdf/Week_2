export class Vector {

    private elements: number[];

    public n = Number;
    public k = Number;

    constructor(n, k) {
        this.elements = []
        for (let i = 0; i < n; ++i) {
            this.elements[i] = Math.round(Math.random() * k)
        }
    }

    public print(): void {
        console.log(this.elements);
    }

    public add(v1: Vector): Vector {
        let vSum = new Array(this.elements.length)
        for (let i = 0; i < this.elements.length; i++) {
            vSum[i] = this.elements[i] + v1[i]
        }
        return vSum
    }

    public subs(v1: Vector): Vector {
        let vSubs = new Array(this.elements.length);
        for (let i = 0; i < this.elements.length; i++) {
            vSubs[i] = this.elements[i] - v1[i];
        }

        return vSubs;
    }

    public mult(v1: Vector): Vector {
        let vMult = new Array(this.elements.length);
        for (let i = 0; i < this.elements.length; i++) {
            vMult[i] = this.elements[i] * v1[i];
        }
        return vMult;
    }

    public multNumber(n: number): Vector {
        let vMn = new Array(this.elements.length);
        for (let i = 0; i < this.elements.length; i++) {
            vMn[i] = this.elements[i] * n;
        }
        return vMn
    }
}