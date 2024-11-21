"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var Paciente_1 = require("./Paciente");
var Cliente_1 = require("./Cliente");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, telefono, id) {
        this.clientes = [];
        this.nombre = nombre;
        this.direccion = direccion;
        this.id = id;
        this.telefono = telefono;
        this.contador = 0;
    }
    Veterinaria.prototype.altaPaciente = function (nombre, especie, idDueño) {
        var nuevaMascota = this.altaNuevoPaciente(nombre, especie);
        var index = this.buscarIndicePorId(idDueño);
        if (index != -1) {
            this.clientes[index].agregarMascota(nuevaMascota);
            console.log("Se ha agregado exitosamente la nueva mascota.");
        }
        else {
            console.log("\nNo se pudo encontrar al cliente. El ID no existe.");
        }
    };
    Veterinaria.prototype.altaNuevoPaciente = function (nombre, especie) {
        var idPac = this.generarId("PAC");
        especie = this.validarEspecie(especie);
        return new Paciente_1.Paciente(idPac, nombre, especie);
    };
    Veterinaria.prototype.bajaPaciente = function (idDueño, idMascota) {
        var existeCliente;
        existeCliente = this.buscarIndicePorId(idDueño);
        var existePaciente;
        existePaciente = this.clientes[existeCliente].buscarIndicePorIdMascota(idMascota);
        this.clientes[existeCliente].eliminarMascota(existePaciente);
        console.log("\nIntentando realizar la baja del paciente con id ".concat(idMascota, "..."));
    };
    Veterinaria.prototype.validarEspecie = function (especie) {
        if (especie.toLowerCase() == "perro" || especie.toLowerCase() == "gato") {
            return especie;
        }
        else {
            return "exotico";
        }
    };
    //public modificarPaciente () {};
    Veterinaria.prototype.generarId = function (prefijo) {
        this.contador++;
        return prefijo + this.contador;
    };
    Veterinaria.prototype.altaCliente = function (nombreCliente, direccionCliente, celularCliente, nombreMascota, razaMascota) {
        var idCli = this.generarId("CLI");
        var nuevaMascota = this.altaNuevoPaciente(nombreMascota, razaMascota);
        this.clientes.push(new Cliente_1.Cliente(idCli, nombreCliente, direccionCliente, celularCliente, nuevaMascota));
    };
    Veterinaria.prototype.buscarIndicePorId = function (id) {
        var index = -1;
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].getId() === id) {
                index = i;
                break;
            }
        }
        return index;
    };
    Veterinaria.prototype.mostrarClienteXId = function (id) {
        var index = this.buscarIndicePorId(id);
        if (index != -1) {
            this.mostrarDatosCliente(this.clientes[index]);
        }
        else {
            console.log("\nNo se pudo encontrar al cliente. El ID no existe.");
        }
    };
    Veterinaria.prototype.bajaCliente = function (id) {
        var existe;
        existe = this.buscarIndicePorId(id);
        console.log("\nIntentando realizar Baja del cliente con id ".concat(id, "..."));
        if (existe != -1) {
            this.clientes.splice(existe, 1);
            console.log("\nBaja realizada con exito.");
        }
        else {
            console.log("\nNo se pudo realiar la Baja. El ID no existe.");
        }
    };
    Veterinaria.prototype.modificarCliente = function (id, nombre, direccion, telefono) {
        var pos = this.buscarIndicePorId(id);
        if (pos != -1) {
            if (nombre)
                this.clientes[pos].setNombre(nombre);
            if (direccion)
                this.clientes[pos].setDireccion(direccion);
            if (telefono)
                this.clientes[pos].setTelefono(telefono);
            console.log("Cliente modificado con exito.");
        }
        else {
            console.log("No se pudo modificar al cliente con ID: ".concat(id));
        }
    };
    Veterinaria.prototype.mostrarDatosClientes = function () {
        var _this = this;
        if (this.clientes.length != 0) {
            this.clientes.forEach(function (c) {
                _this.mostrarDatosCliente(c);
            });
        }
        else {
            console.log("No hay clientes registrados.");
        }
    };
    Veterinaria.prototype.mostrarDatosCliente = function (c) {
        console.log("\nNombre del Cliente: ".concat(c.getNombre()));
        console.log("Direccion: ".concat(c.getDireccion()));
        console.log("Telefono: ".concat(c.getTelefono()));
        console.log("Id: ".concat(c.getId()));
        console.log("Es VIP: ".concat(c.esVip() ? 'Si' : 'No'));
        console.log("Cantidad de Visitas: ".concat(c.getCantVisitas()));
        c.mostrarMascotas(c);
    };
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
    Veterinaria.prototype.getTelefono = function () {
        return this.telefono;
    };
    Veterinaria.prototype.getClientes = function () {
        return this.clientes;
    };
    Veterinaria.prototype.getCantClientes = function () {
        return this.clientes.length;
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
}());
exports.Veterinaria = Veterinaria;
