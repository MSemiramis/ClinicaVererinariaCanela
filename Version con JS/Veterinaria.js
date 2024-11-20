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
exports.Veterinaria = void 0;
var redVeterinaria_1 = require("./redVeterinaria");
var Paciente_1 = require("./Paciente");
var Cliente_1 = require("./Cliente");
var Veterinaria = /** @class */ (function (_super) {
    __extends(Veterinaria, _super);
    function Veterinaria(nombre, direccion, id) {
        var _this = _super.call(this) || this;
        _this.clientes = [];
        _this.nombre = nombre;
        _this.direccion = direccion;
        _this.id = id; //Me parece que en la clase RedDeVeterinarias habria que tener un array de ids y buscar la ultima para ver cual corresponda a la nueva que se esta creando 
        return _this;
    }
    Veterinaria.prototype.altaNuevoPaciente = function () { };
    ;
    Veterinaria.prototype.bajaPaciente = function () { };
    ;
    //public modificarPaciente () {};
    Veterinaria.prototype.altaCliente = function (nombreCliente, direccionCliente, celularCliente, nombreMascota, razaMascota) {
        var nuevaId = this.generarId('cli');
        var nuevaMascota = new Paciente_1.Paciente(nombreMascota, razaMascota);
        this.clientes.push(new Cliente_1.Cliente(nuevaId, nombreCliente, direccionCliente, celularCliente, nuevaMascota));
    };
    ;
    Veterinaria.prototype.bajaCliente = function (nombreCliente) {
        var existe;
        existe = this.clientes.findIndex(function (c) { return c.getNombre() === nombreCliente; });
        if (existe != -1) {
            this.clientes.splice(existe, 1);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    Veterinaria.prototype.modificarCliente = function () { };
    ;
    //Metodos get
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    //Metodos set
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Veterinaria.prototype.setDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
    };
    Veterinaria.prototype.setTelefono = function (nuevoTel) {
        this.telefono = nuevoTel;
    };
    return Veterinaria;
}(redVeterinaria_1.RedVeterinaria));
exports.Veterinaria = Veterinaria;
