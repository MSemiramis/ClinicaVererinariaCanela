"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    // agregar especie
    Paciente.agregarPaciente = function (nombre, especie) {
        var especiesPermitidas = ["perro", "gato"];
        var especieValida = false;
        // Verificar especie
        for (var i = 0; i < especiesPermitidas.length; i++) {
            if (especie === especiesPermitidas[i] || // Comparación exacta
                especie === especiesPermitidas[i].toUpperCase() || // Todo en mayúsculas
                especie === especiesPermitidas[i][0].toUpperCase() + especiesPermitidas[i].slice(1)) {
                especieValida = true;
                break;
            }
        }
        if (!especieValida) {
            console.log("Especie no reconocida. Registrando como '".concat(especie, "'."));
        }
        return new Paciente(nombre, especie);
    };
    return Paciente;
}());
exports.Paciente = Paciente;
