"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(id, nombre, telefono, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
    //Getters y setters
    Persona.prototype.getId = function () {
        return this.id;
    };
    Persona.prototype.setId = function (id) {
        this.id = id;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Persona;
}());
exports.Persona = Persona;
// const arrPacientes: Persona[] = [];
// const arrayDeIds: string[] = [];
// function altaPersona (nombre: string, telefono: number) {
//     arrayDeIds.push(`Persona${arrayDeIds.length+1}`);
//     let nuevaPersona = new Persona (arrayDeIds[arrayDeIds.length], nombre, telefono);
//     arrPacientes.push(nuevaPersona)
// }
// console.log("arreglo de ids: " + arrayDeIds);
// console.log("arreglo de pacientes: " + arrPacientes);
// altaPersona("enzo", 1231231);
// console.log("arreglo de ids: " + arrayDeIds);
// console.log("arreglo de pacientes: " + arrPacientes);
// console.log("Nombre de persona agregada: " + arrPacientes[0].getNombre())
// altaPersona("semi", 234123);
// console.log("arreglo de ids: " + arrayDeIds);
// console.log("arreglo de pacientes: " + arrPacientes);
// console.log("Nombre de persona agregada: " + arrPacientes[1].getNombre())
