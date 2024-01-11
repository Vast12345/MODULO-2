/*import {suma, PI} from "./01-ejemplo-clase.js";


console.log(suma(2, 5));
console.log("PI: " + PI);*/

import * as mod1 from "./01-ejemplo-clase.js";
import {PI as PII} from "./03-ejemplo-clase.js";
import mensaje from "./mensaje.js";

console.log(mod1.suma(2, 5));
console.log("PI: " + mod1.PI);
console.log("Raiz de 2: " + mod1.r2);
console.log("Pi con mas digitos: " + PII);
console.log(mensaje());