"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinaria = void 0;
var Proveedor_1 = require("./Proveedor");
var Veterinaria_1 = require("./Veterinaria");
var fs = require("fs");
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
var RedVeterinaria = /** @class */ (function () {
    function RedVeterinaria() {
        this.RUTA_DATOS = "./datos/red_veterinaria.json";
        this.veterinarias = [];
        this.proveedores = [];
        this.contador = 0;
    }
    //Funciones para JSON
    RedVeterinaria.prototype.guardarEnJSON = function (ruta) {
        var data = {
            veterinarias: this.veterinarias,
            proveedores: this.proveedores,
            contador: this.contador
        };
        fs.writeFileSync(ruta, JSON.stringify(data, null, 2), "utf-8");
        console.log("Datos guardados en ".concat(ruta));
    };
    RedVeterinaria.prototype.cargarDesdeJSON = function () {
        if (fs.existsSync(this.RUTA_DATOS)) {
            var data = JSON.parse(fs.readFileSync(this.RUTA_DATOS, "utf-8"));
            // Cargar veterinarias
            this.veterinarias = data.veterinarias.map(function (vet) {
                var _a;
                var veterinaria = new Veterinaria_1.Veterinaria(vet.nombre, vet.direccion, vet.telefono, vet.id);
                // Cargar clientes dentro de la veterinaria
                if (vet.clientes && vet.clientes.length > 0) {
                    (_a = veterinaria.getClientes()).push.apply(_a, vet.clientes.map(function (cli) {
                        // Crear el primer paciente para el constructor
                        var primerPaciente = new Paciente_1.Paciente(cli.mascotas[0].id, cli.mascotas[0].nombre, cli.mascotas[0].especie);
                        // Crear el cliente con el primer paciente
                        var cliente = new Cliente_1.Cliente(cli.id, cli.nombre, cli.direccion, cli.telefono, primerPaciente);
                        // Agregar los demás pacientes al cliente (si los hay)
                        for (var i = 1; i < cli.mascotas.length; i++) {
                            var paciente = new Paciente_1.Paciente(cli.mascotas[i].id, cli.mascotas[i].nombre, cli.mascotas[i].especie);
                            cliente.getPacientes().push(paciente);
                        }
                        return cliente;
                    }));
                }
                return veterinaria;
            });
            // Cargar proveedores
            this.proveedores = data.proveedores.map(function (prov) {
                var proveedor = new Proveedor_1.Proveedor(prov.id, prov.nombre, prov.telefono, prov.direccion, prov.productos[0] || "" // Cargar el primer producto para cumplir con el constructor
                );
                // Agregar los productos restantes
                for (var i = 1; i < prov.productos.length; i++) {
                    proveedor.addProduct(prov.productos[i]);
                }
                return proveedor;
            });
            // Cargar contador
            this.contador = data.contador;
            console.log("Datos cargados desde ".concat(this.RUTA_DATOS));
        }
        else {
            console.log("Archivo no encontrado: ".concat(this.RUTA_DATOS));
        }
    };
    /* public guardarAutomaticamente(): void {
         let data = {
             veterinarias: this.veterinarias.map(vet => ({
                 id: vet.getId(),
                 nombre: vet.getNombre(),
                 direccion: vet.getDireccion(),
                 telefono: vet.getTelefono(),
                 clientes: vet.getClientes().map(cli => ({
                     id: cli.getId(),
                     nombre: cli.getNombre(),
                     direccion: cli.getDireccion(),
                     telefono: cli.getTelefono(),
                     cantVisitas: cli.getCantVisitas(),
                     isVip: cli.esVip(),
                     mascotas: cli.getPacientes().map(pac => ({
                         id: pac.getId(),
                         nombre: pac.getNombre(),
                         especie: pac.getEspecie()
                     }))
                 }))
             })),
             proveedores: this.proveedores.map(prov => ({
                 id: prov.getId(),
                 nombre: prov.getNombre(),
                 direccion: prov.getDireccion(),
                 telefono: prov.getTelefono(),
                 productos: prov.getProductos()
             })),
             contador: this.contador
         };
     
         // Guardar el JSON en el archivo correspondiente
         fs.writeFileSync(this.RUTA_DATOS, JSON.stringify(data, null, 2));
         console.log('Datos guardados automáticamente.');
     }*/
    // Generar los id para veterinarias y proveedores incrementando el contador
    RedVeterinaria.prototype.generarId = function (prefijo) {
        this.contador++;
        return prefijo + this.contador;
    };
    // Métodos Veterinarias
    RedVeterinaria.prototype.altaVeterinaria = function (nombre, direccion, telefono) {
        var id = this.generarId("VET");
        var nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, direccion, telefono, id);
        this.veterinarias.push(nuevaVeterinaria);
        console.log("Veterinaria ".concat(nombre, " agregada con ID: ").concat(id));
    };
    // Elimina veterinaria por ID
    RedVeterinaria.prototype.bajaVeterinaria = function (id) {
        var dimA = this.veterinarias.length;
        this.veterinarias = this.veterinarias.filter(function (vet) { return vet.getId() !== id; });
        var dimD = this.veterinarias.length;
        if (dimA > dimD) {
            console.log("Realizando Baja...");
            console.log("La veterinaria con ID ".concat(id, " fue eliminada exitosamente."));
        }
        else {
            console.log("No se encontr\u00F3 ninguna veterinaria con ID ".concat(id, " para eliminar."));
        }
    };
    RedVeterinaria.prototype.modificarVeterinaria = function (id, nombre, direccion, telefono) {
        var veterinariaEncontrada = false;
        this.veterinarias.forEach(function (vet) {
            if (vet.getId() === id) {
                veterinariaEncontrada = true;
                if (nombre)
                    vet.setNombre(nombre);
                if (direccion)
                    vet.setDireccion(direccion);
                if (telefono)
                    vet.setTelefono(telefono);
                console.log("Veterinaria con ID: ".concat(id, " modificada."));
                return;
            }
        });
        // Si no encontramos la veterinaria, mostramos un mensaje
        if (!veterinariaEncontrada) {
            console.log("Veterinaria con ID: ".concat(id, " no encontrada."));
        }
    };
    RedVeterinaria.prototype.buscarVeterinariaPorID = function (id) {
        var index = -1;
        for (var i = 0; i < this.veterinarias.length; i++) {
            if (this.veterinarias[i].getId() === id) {
                index = i;
                break;
            }
        }
        return index;
    };
    RedVeterinaria.prototype.buscarProveedorPorID = function (id) {
        var index = -1;
        for (var i = 0; i < this.proveedores.length; i++) {
            if (this.proveedores[i].getId() === id) {
                index = i;
                break;
            }
        }
        return index;
    };
    RedVeterinaria.prototype.buscarVeterinariaPorNombre = function (nombre) {
        var index = -1;
        for (var i = 0; i < this.veterinarias.length; i++) {
            if (this.veterinarias[i].getNombre() === nombre) {
                index = i;
                break;
            }
        }
        return index;
    };
    RedVeterinaria.prototype.devolverVeterinariaXId = function (id) {
        var index = this.buscarVeterinariaPorID(id);
        if (index != -1) {
            return this.veterinarias[index];
        }
        else {
            return this.veterinarias[0];
        }
    };
    RedVeterinaria.prototype.devolverVeterinariaXNombre = function (nombre) {
        var index = this.buscarVeterinariaPorNombre(nombre);
        if (index != -1) {
            return this.veterinarias[index];
        }
        else {
            console.log('Veterinaria no encontrada. Mostrando ultima Veterinaria agregada...');
            return this.veterinarias[this.veterinarias.length - 1];
        }
    };
    // Métodos para Proveedores
    RedVeterinaria.prototype.altaProveedor = function (nombre, telefono, direccion, producto) {
        var id = this.generarId("PROV");
        var nuevoProveedor = new Proveedor_1.Proveedor(id, nombre, telefono, direccion, producto);
        this.proveedores.push(nuevoProveedor);
        console.log("Proveedor ".concat(nombre, " agregado con ID: ").concat(id));
    };
    // Elimina veterinaria por ID
    RedVeterinaria.prototype.bajaProveedor = function (id) {
        var dimA = this.proveedores.length;
        this.proveedores = this.proveedores.filter(function (prov) { return prov.getId() !== id; });
        var dimD = this.proveedores.length;
        if (dimA > dimD) {
            console.log("Realizando Baja...");
            console.log("El Proveedor con ID ".concat(id, " fue eliminado exitosamente."));
        }
        else {
            console.log("No se encontr\u00F3 ningun Proveedor con ID ".concat(id, " para eliminar."));
        }
        console.log("Proveedor con ID: ".concat(id, " eliminado."));
    };
    RedVeterinaria.prototype.modificarProveedor = function (id, nombre, telefono, direccion) {
        var proveedorEncontrado = false;
        this.proveedores.forEach(function (p) {
            if (p.getId() === id) {
                proveedorEncontrado = true;
                if (nombre)
                    p.setNombre(nombre);
                if (telefono)
                    p.setTelefono(telefono);
                if (direccion)
                    p.setDireccion(direccion);
                console.log("Proveedor con ID: ".concat(id, " modificado."));
            }
            return;
        });
        // Si no encontramos el proveedor, mostramos un mensaje
        if (!proveedorEncontrado) {
            console.log("Proveedor con ID: ".concat(id, " no encontrado."));
        }
    };
    ;
    RedVeterinaria.prototype.listarVeterinarias = function () {
        if (this.veterinarias.length === 0) {
            console.log("\nNo hay veterinarias registradas.");
            return;
        }
        this.veterinarias.forEach(function (v) {
            console.log("\nNombre: ".concat(v.getNombre()));
            console.log("Direccion: ".concat(v.getDireccion()));
            console.log("Telefono: ".concat(v.getTelefono()));
            console.log("Id: ".concat(v.getId()));
            console.log("Clientes a cargo de la Veterinaria: ".concat(v.getCantClientes()));
        });
    };
    RedVeterinaria.prototype.listarProveedores = function () {
        if (this.proveedores.length === 0) {
            console.log("\nNo hay proveedores registrados.");
            return;
        }
        this.proveedores.forEach(function (p) {
            console.log("\nNombre: ".concat(p.getNombre()));
            console.log("Telefono: ".concat(p.getTelefono()));
            console.log("Direccion: ".concat(p.getDireccion()));
            p.mostrarProductos();
            console.log("Id: ".concat(p.getId()));
        });
    };
    return RedVeterinaria;
}());
exports.RedVeterinaria = RedVeterinaria;
