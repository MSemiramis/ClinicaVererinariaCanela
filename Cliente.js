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
        //private visitas: string [] = [];
        _this.mascotas = [];
        _this.mascotas.push(mascota);
        return _this;
    }
    // addVisita(motivoVisita: string): void{
    //     this.visitas.push(motivoVisita);
    // }
    // mostrarVisitas(): void {
    //     console.log(`Motivo/s de visita/s del cliente ${this.getNombre()}:`)
    //     this.visitas.forEach(v => {
    //         console.log(`${v}`)
    //     });
    // }
    Cliente.prototype.getPacientes = function () {
        return this.mascotas;
    };
    Cliente.prototype.mostrarMascotas = function (c) {
        console.log("\nPacientes del Cliente:");
        c.mascotas.forEach(function (p) {
            console.log("Nombre: ".concat(p.getNombre(), ". Especie: ").concat(p.getEspecie(), ". ID: ").concat(p.getId()));
        });
        console.log("\n");
    };
    Cliente.prototype.esVip = function () {
        return this.isVip;
    };
    Cliente.prototype.getCantVisitas = function () {
        return this.cantVisitas;
    };
    Cliente.prototype.getUltimaMascota = function () {
        return this.mascotas[this.mascotas.length - 1].getNombre();
    };
    Cliente.prototype.setVip = function (b) {
        this.isVip = b;
    };
    Cliente.prototype.contarVisita = function () {
        this.cantVisitas++;
        this.checkClientStatus();
    };
    Cliente.prototype.checkClientStatus = function () {
        if (!this.esVip() && this.getCantVisitas() > 5) {
            this.setVip(true);
            console.log("".concat(this.getNombre(), " es ahora Vip."));
        }
    };
    Cliente.prototype.agregarMascota = function (mascota) {
        this.mascotas.push(mascota);
    };
    Cliente.prototype.eliminarMascota = function (index) {
        if (index != -1) {
            this.mascotas.splice(index, 1);
            console.log("\nBaja realizada con exito.");
        }
        else {
            console.log("\nNo se pudo realiar la Baja. No se encontr\u00F3 la mascota buscada.");
        }
    };
    Cliente.prototype.buscarIndicePorIdMascota = function (idMascota) {
        var index = -1;
        for (var i = 0; i < this.mascotas.length; i++) {
            if (this.mascotas[i].getId() === idMascota) {
                index = i;
                break;
            }
        }
        return index;
    };
    return Cliente;
}(Persona_1.Persona));
exports.Cliente = Cliente;
