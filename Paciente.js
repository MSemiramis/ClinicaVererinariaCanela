"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(id, nombre, especie) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
    }
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getId = function () {
        return this.id;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
