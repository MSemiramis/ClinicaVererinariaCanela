"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
var Veterinaria_1 = require("./Veterinaria");
var Proveedor_1 = require("./Proveedor");
var RedVeterinaria = /** @class */ (function () {
    function RedVeterinaria() {
        this.veterinarias = [];
        this.proveedores = [];
        this.contador = 0;
    }
    // Generar los id para veterinarias y proveedores incrementando el contador
    RedVeterinaria.prototype.generarId = function (prefijo) {
        this.contador++;
        return prefijo + this.contador;
    };
    // Métodos Veterinarias
    RedVeterinaria.prototype.altaVeterinaria = function (nombre, direccion, telefono) {
        var id = this.generarId("vet");
        var nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, direccion, id);
        this.veterinarias.push(nuevaVeterinaria);
        console.log("Veterinaria ".concat(nombre, " agregada con ID: ").concat(id));
    };
    RedVeterinaria.prototype.bajaVeterinaria = function (id) {
        this.veterinarias = this.veterinarias.filter(function (vet) { return vet.getId() !== id; }); // Elimina veterinaria por ID
        console.log("Veterinaria con ID: ".concat(id, " eliminada."));
    };
    RedVeterinaria.prototype.modificarVeterinaria = function (id, nombre, direccion, telefono) {
        var veterinariaEncontrada = false; // Variable para verificar si la veterinaria fue encontrada
        this.veterinarias.forEach(function (vet) {
            if (vet.getId() === id) {
                veterinariaEncontrada = true; // Marcamos que encontramos la veterinaria
                // Modificamos los valores si se pasan
                if (nombre)
                    vet.setNombre(nombre);
                if (direccion)
                    vet.setDireccion(direccion);
                if (telefono)
                    vet.setTelefono(telefono);
                console.log("Veterinaria con ID: ".concat(id, " modificada."));
            }
        });
        // Si no encontramos la veterinaria, mostramos un mensaje
        if (!veterinariaEncontrada) {
            console.log("Veterinaria con ID: ".concat(id, " no encontrada."));
        }
    };
    // Métodos para Proveedores
    RedVeterinaria.prototype.altaProveedor = function (nombre, telefono, producto) {
        var id = this.generarId("prov");
        var nuevoProveedor = new Proveedor_1.Proveedor(id, nombre, telefono, producto); // Crea un nuevo proveedor
        this.proveedores.push(nuevoProveedor); // Agrega el proveedor a la lista
        console.log("Proveedor ".concat(nombre, " agregado con ID: ").concat(id));
    };
    RedVeterinaria.prototype.bajaProveedor = function (id) {
        this.proveedores = this.proveedores.filter(function (prov) { return prov.getId() !== id; }); // Elimina proveedor por ID
        console.log("Proveedor con ID: ".concat(id, " eliminado."));
    };
    RedVeterinaria.prototype.modificarProveedor = function (id, nombre, telefono, producto) {
        var proveedorEncontrado = false; // Variable para verificar si el proveedor fue encontrado
        this.proveedores.forEach(function (p) {
            if (p.getId() === id) {
                proveedorEncontrado = true; // Marcamos que encontramos el proveedor
                // Modificamos los valores si se pasan
                if (nombre)
                    p.setNombre(nombre);
                if (telefono)
                    p.setTelefono(telefono);
                if (producto)
                    p.addProduct(producto);
                console.log("Proveedor con ID: ".concat(id, " modificado."));
            }
        });
        // Si no encontramos el proveedor, mostramos un mensaje
        if (!proveedorEncontrado) {
            console.log("Proveedor con ID: ".concat(id, " no encontrado."));
        }
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
