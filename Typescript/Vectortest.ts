import { Vector } from "./Vector";

let vectorprueba = new Vector(3, 5);
let vector2 = new Vector(3, 10);

vectorprueba.print();

vectorprueba.add(vector2);

vectorprueba.subs(vector2);

vectorprueba.mult(vector2);

vectorprueba.multNumber(2);