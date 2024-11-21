"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var RedVeterinaria_1 = require("./RedVeterinaria");
// Archivo principal
var redVeterinariaAdmin = new RedVeterinaria_1.RedVeterinaria();
redVeterinariaAdmin.cargarDesdeJSON();
console.log(redVeterinariaAdmin);
//Menues
var entrada = menuPrincipal();
while (entrada != 0) {
    switchMenuPrincipal(entrada);
    entrada = menuPrincipal();
}
redVeterinariaAdmin.guardarEnJSON("./datos/red_veterinaria.json");
//Funciones Red Veterinaria
function crearVeterinaria() {
    var nombre = rls.question("Ingrese el nombre de la veterinaria: ");
    var direccion = rls.question("Ingrese la direccion de la veterinaria: ");
    var telefono = rls.questionInt("Ingrese el telefono de la veterinaria: ");
    console.log('\n');
    redVeterinariaAdmin.altaVeterinaria(nombre, direccion, telefono);
}
function crearProveedor() {
    var nombre = rls.question("Ingrese el nombre del proveedor: ");
    var telefono = rls.questionInt("Ingrese el telefono del proveedor: ");
    var direccion = rls.question("Ingrese la direccion del proveedor: ");
    var producto = rls.question("Ingrese el producto de venta: ");
    console.log('\n');
    redVeterinariaAdmin.altaProveedor(nombre, telefono, direccion, producto);
}
function buscarVeterinaria() {
    var nombre = rls.question("Ingrese el nombre de la veterinaria a buscar: ");
    var vete = redVeterinariaAdmin.devolverVeterinariaXNombre(nombre);
    return vete;
}
function bajaVeterinariaPorId() {
    var id = rls.question("Ingrese el ID de la veterinaria a dar de baja: ");
    redVeterinariaAdmin.bajaVeterinaria(id);
}
function bajaProveedorPorId() {
    var id = rls.question("Ingrese el ID de la veterinaria a dar de baja: ");
    redVeterinariaAdmin.bajaProveedor(id);
}
function pedirDatosModificarCliente(vete) {
    var id = rls.question("Ingrese ID del cliente a modificiar: ");
    console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
    var nombre = rls.question("Ingrese un nuevo nombre: ");
    var direccion = rls.question("Ingrese una nueva direccion: ");
    var telefono = rls.questionInt("Ingrese un nuevo telefono: ");
    console.log('\n');
    vete.modificarCliente(id, nombre, direccion, telefono);
}
function pedirDatosModificarVeterinaria() {
    var id = rls.question("Ingrese ID la veterinaria a modificiar: ");
    if (redVeterinariaAdmin.buscarVeterinariaPorID(id) != -1) {
        console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
        var nombre = rls.question("Ingrese un nuevo nombre: ");
        var direccion = rls.question("Ingrese una nueva direccion: ");
        var telefono = rls.questionInt("Ingrese un nuevo telefono: ");
        console.log('\n');
        redVeterinariaAdmin.modificarVeterinaria(id, nombre, direccion, telefono);
    }
    else
        console.log("Veterinaria con ID: ".concat(id, " no encontrada."));
}
function pedirDatosModificarProveedor() {
    var id = rls.question("Ingrese ID del proveedor a modificiar: ");
    if (redVeterinariaAdmin.buscarProveedorPorID(id) != -1) {
        console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
        var nombre = rls.question("Ingrese un nuevo nombre: ");
        var telefono = rls.questionInt("Ingrese un nuevo telefono: ");
        var direccion = rls.question("Ingrese una nueva direccion: ");
        console.log('\n');
        redVeterinariaAdmin.modificarProveedor(id, nombre, telefono, direccion);
    }
    else
        console.log("Proveedor con ID: ".concat(id, " no encontrada."));
}
//Funciones de menu
function menuPrincipal() {
    console.log("\n---Menu Principal---");
    console.log("1. Buscar una veterinaria.");
    console.log("2. Dar de Alta una Veterinaria.");
    console.log("3. Dar de Alta un Proveedor.");
    console.log("4. Dar de Baja una Veterinaria.");
    console.log("5. Dar de Baja un Proveedor.");
    console.log("6. Modificar una Veterinaria.");
    console.log("7. Modificar un Proveedores.");
    console.log("8. Listar Veterinarias.");
    console.log("9. Listar Proveedores.");
    console.log("0. Salir.");
    var entrada = rls.questionInt("\nIngrese una opcion. Ingrese 0 para Salir: ");
    return entrada;
}
function volverAtras() {
    var entrada = rls.questionInt("\nIngrese 0 para volver atras: ");
    while (entrada != 0) {
        entrada = rls.questionInt("\nIngrese 0 para volver atras: ");
    }
}
function switchMenuPrincipal(entrada) {
    switch (entrada) {
        case 1: //Buscar Veterinaria
            var v = buscarVeterinaria();
            gestionVeterinaria(v);
            break;
        case 2: //Alta Veterinaria
            crearVeterinaria();
            break;
        case 3: //Alta Proveedor
            crearProveedor();
            break;
        case 4: //Baja Veterinaria
            bajaVeterinariaPorId();
            volverAtras();
            break;
        case 5: //Baja Proveedor
            bajaProveedorPorId();
            volverAtras();
            break;
        case 6: //Modificar Veterinaria
            pedirDatosModificarVeterinaria();
            volverAtras();
            break;
        case 7: //Modificar Proveedor   
            pedirDatosModificarProveedor();
            volverAtras();
            break;
        case 8: //Listar Veterinarias
            redVeterinariaAdmin.listarVeterinarias();
            volverAtras();
            break;
        case 9: //Listar Proveedores
            redVeterinariaAdmin.listarProveedores();
            volverAtras();
            break;
        default:
            break;
    }
}
function menuVeterinaria(nombreV) {
    console.log("\n---Menu Veterinaria ".concat(nombreV, "---"));
    console.log("---Gestion Clientes---");
    console.log("1. Dar de Alta un Cliente.");
    console.log("2. Dar de Baja un Cliente.");
    console.log("3. Modificar un Cliente.");
    console.log("4. Buscar un Cliente por ID.");
    console.log("5. Mostrar todos los Clientes.");
    console.log("\n---6. Gestionar Pacientes---");
    console.log("7. Volver Atras.");
    console.log("0. Salir.");
    var entrada = rls.questionInt("\nIngrese una opcion. Ingrese 0 para Salir: ");
    console.log('\n');
    return entrada;
}
function switchMenuVeterinaria(entrada, v) {
    switch (entrada) {
        case 1: //Alta un Cliente
            crearCliente(v);
            break;
        case 2: //Baja un Cliente
            var idBaja = pedirId();
            v.bajaCliente(idBaja);
            break;
        case 3: //Modificar un Cliente
            pedirDatosModificarCliente(v);
            break;
        case 4: //Buscar un Cliente por ID
            var idBuscar = pedirId();
            v.mostrarClienteXId(idBuscar);
            volverAtras();
            break;
        case 5: //Mostrar todos los Clientes
            v.mostrarDatosClientes();
            volverAtras();
            break;
        case 6: //Gestionar Pacientes
            break;
        case 7: //Volver Atras
            menuPrincipal();
            break;
        default:
            break;
    }
}
function gestionVeterinaria(vet) {
    var entrada = menuVeterinaria(vet.getNombre());
    while (entrada != 0) {
        switchMenuVeterinaria(entrada, vet);
        entrada = menuVeterinaria(vet.getNombre());
    }
}
function crearCliente(vet) {
    var nombre = rls.question("Ingrese el nombre del cliente: ");
    var direccion = rls.question("Ingrese la direccion del cliente: ");
    var telefono = rls.questionInt("Ingrese el telefono del cliente: ");
    var nomMasc = rls.question("Ingrese el nombre de la mascota: ");
    var razaMasc = rls.question("Ingrese la raza de la mascota: ");
    console.log('\n');
    vet.altaCliente(nombre, direccion, telefono, nomMasc, razaMasc);
}
function pedirId() {
    var id = rls.question("\nIngrese el ID a buscar: ");
    return id;
}
