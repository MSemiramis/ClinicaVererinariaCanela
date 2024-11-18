"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var arrayDeIds = [];
/*console.log(arrayDeIds);

arrayDeIds.push(`vet${arrayDeIds.length+1}`);

console.log(arrayDeIds);

arrayDeIds.push(`vet${arrayDeIds.length+1}`);

console.log(arrayDeIds);*/
var arrPacientes = [];
function altaPersona(nombre, telefono) {
    arrayDeIds.push("Persona".concat(arrayDeIds.length + 1));
    var nuevaPersona = new Persona_1.Persona(arrayDeIds[arrayDeIds.length], nombre, telefono);
    arrPacientes.push(nuevaPersona);
}
console.log("arreglo de ids: " + arrayDeIds);
console.log("arreglo de pacientes: " + arrPacientes);
altaPersona("enzo", 1231231);
console.log("arreglo de ids: " + arrayDeIds);
console.log("arreglo de pacientes: " + arrPacientes);
console.log(arrPacientes[0].getNombre);
