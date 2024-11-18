"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Persona_1 = require("./Persona");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(id, nombre, direccion, telefono, mascota) {
        var _this = _super.call(this, id, nombre, telefono, direccion) || this;
        _this.isVip = false;
        _this.cantVisitas = 1;
        _this.visitas = [];
        _this.mascotas = [];
        _this.mascotas.push(mascota);
        return _this;
    }
    Cliente.prototype.mostrarVisitas = function () {
        console.log("Motivo/s de visita/s del cliente ".concat(this.getNombre(), ":"));
        this.visitas.forEach(function (v) {
            console.log("".concat(v));
        });
    };
    Cliente.prototype.mostrarMascotas = function () {
        console.log("Mascota/s a cargo del cliente ".concat(this.getNombre(), ":"));
        this.mascotas.forEach(function (m) {
            console.log("Nombre: ".concat(m.getNombre(), ". Especie: ").concat(m.getEspecie()));
        });
    };
    Cliente.prototype.getClientStatus = function () {
        return this.isVip;
    };
    Cliente.prototype.getCantVisitas = function () {
        return this.cantVisitas;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getUltimaMascota = function () {
        return this.mascotas[this.mascotas.length - 1].getNombre();
    };
    // getMascotas(): string[] {
    //     return this.mascotas;
    // }
    Cliente.prototype.addVisita = function (motivoVisita) {
        this.visitas.push(motivoVisita);
    };
    Cliente.prototype.setVip = function (b) {
        this.isVip = b;
    };
    Cliente.prototype.contarVisita = function () {
        this.cantVisitas++;
    };
    Cliente.prototype.checkClientStatus = function () {
        if (this.getCantVisitas() > 5) {
            this.setVip(true);
        }
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
