import * as rls from "readline-sync";
import * as fs from "fs";

import { Veterinaria } from "./Veterinaria";
import { RedVeterinaria } from "./RedVeterinaria";
import { Proveedor } from "./Proveedor";
import { Paciente } from "./Paciente";

// Archivo principal

let redVeterinariaAdmin = new RedVeterinaria();

redVeterinariaAdmin.cargarDesdeJSON();
console.log(redVeterinariaAdmin)

//Menues

let entrada: number = menuPrincipal();

while (entrada != 0) {
    switchMenuPrincipal(entrada);
    entrada = menuPrincipal();
}
redVeterinariaAdmin.guardarEnJSON();

//Funciones Red Veterinaria

function crearVeterinaria(){
    let nombre: string = rls.question("Ingrese el nombre de la veterinaria: ");
    let direccion: string = rls.question("Ingrese la direccion de la veterinaria: ");
    let telefono: number = rls.questionInt("Ingrese el telefono de la veterinaria: ");
    console.log('\n');

    redVeterinariaAdmin.altaVeterinaria(nombre, direccion, telefono);

}

function crearProveedor(){
    let nombre: string = rls.question("Ingrese el nombre del proveedor: ");
    let telefono: number = rls.questionInt("Ingrese el telefono del proveedor: ");
    let direccion: string = rls.question("Ingrese la direccion del proveedor: ");
    let producto: string = rls.question("Ingrese el producto de venta: ");
    
    console.log('\n');

    redVeterinariaAdmin.altaProveedor(nombre, telefono ,direccion, producto);
}

function buscarVeterinaria(): Veterinaria{
    let nombre: string = rls.question("Ingrese el nombre de la veterinaria a buscar: ");

    let vete: Veterinaria = redVeterinariaAdmin.devolverVeterinariaXNombre(nombre);

    return vete;
}

function bajaVeterinariaPorId(){
    let id: string = rls.question("Ingrese el ID de la veterinaria a dar de baja: ");
    redVeterinariaAdmin.bajaVeterinaria(id);
}

function bajaProveedorPorId(){
    let id: string = rls.question("Ingrese el ID de la veterinaria a dar de baja: ");
    redVeterinariaAdmin.bajaProveedor(id);
}

function pedirDatosModificarCliente(vete: Veterinaria){
    let id: string = rls.question("Ingrese ID del cliente a modificiar: ");
    console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
    let nombre: string = rls.question("Ingrese un nuevo nombre: ");
    let direccion: string = rls.question("Ingrese una nueva direccion: ");
    let telefono: number = rls.questionInt("Ingrese un nuevo telefono: ");
    
    console.log('\n');

    vete.modificarCliente(id, nombre, direccion, telefono);
}

function pedirDatosModificarVeterinaria(){
    let id: string = rls.question("Ingrese ID la veterinaria a modificiar: ");
    if (redVeterinariaAdmin.buscarVeterinariaPorID(id) != -1){
        console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
        let nombre: string = rls.question("Ingrese un nuevo nombre: ");
        let direccion: string = rls.question("Ingrese una nueva direccion: ");
        let telefono: number = rls.questionInt("Ingrese un nuevo telefono: ");

        console.log('\n');

        redVeterinariaAdmin.modificarVeterinaria(id, nombre, direccion, telefono);
    }else
        console.log(`Veterinaria con ID: ${id} no encontrada.`);
    
}

function pedirDatosModificarProveedor(){

    let id: string = rls.question("Ingrese ID del proveedor a modificiar: ");
    if (redVeterinariaAdmin.buscarProveedorPorID(id) != -1){
        console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
        let nombre: string = rls.question("Ingrese un nuevo nombre: ");
        let telefono: number = rls.questionInt("Ingrese un nuevo telefono: "); 
        let direccion: string = rls.question("Ingrese una nueva direccion: ");
        console.log('\n');

        redVeterinariaAdmin.modificarProveedor(id, nombre, telefono, direccion);
    }else
    console.log(`Proveedor con ID: ${id} no encontrada.`);
}

 
//Funciones de menu

function menuPrincipal(): number{
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

    let entrada: number = rls.questionInt("\nIngrese una opcion. Ingrese 0 para Salir: ");

    return entrada;
}

function volverAtras(): void{
    let entrada: number = rls.questionInt("\nIngrese 0 para volver atras: ");
    
    while (entrada != 0) {
        entrada = rls.questionInt("\nIngrese 0 para volver atras: ");
    }
}

function switchMenuPrincipal(entrada: number){
    switch (entrada) {
        case 1: //Buscar Veterinaria
                let v: Veterinaria = buscarVeterinaria();
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

function menuVeterinaria(nombreV: string): number {
    console.log(`\n---Menu Veterinaria ${nombreV}---`);
    console.log("---Gestion Clientes---");
    console.log("1. Dar de Alta un Cliente.");
    console.log("2. Dar de Baja un Cliente.");
    console.log("3. Modificar un Cliente.");
    console.log("4. Mostrar todos los Clientes.");
    console.log("5. Alta nuevo paciente.");
    console.log("6. Baja de paciente.");
    console.log("7. Volver Atras.");
    console.log("0. Salir.");

    let entrada: number = rls.questionInt("\nIngrese una opcion. Ingrese 0 para Salir: ");
    console.log('\n');

    return entrada;
}


function switchMenuVeterinaria(entrada: number, v: Veterinaria){
    switch (entrada) {
        case 1: //Alta un Cliente
                crearCliente(v);
            break;
        case 2: //Baja un Cliente
                let idBaja = pedirId()
                v.bajaCliente(idBaja);
            break;
        case 3: //Modificar un Cliente
                pedirDatosModificarCliente(v);
            break;
        case 4: //Mostrar todos los Clientes
                    v.mostrarDatosClientes();
                    volverAtras();
            break;
        case 5: //Alta paciente
                crearPaciente(v);
                volverAtras();
           
            break;
        case 6: //Baja Pacientes
            bajaPaciente(v);    
            break;
        case 7: //Volver Atras
                menuPrincipal();
                redVeterinariaAdmin.guardarEnJSON();
            break;
    
        default:
            break;
    }
}

function gestionVeterinaria(vet: Veterinaria){
    let entrada = menuVeterinaria(vet.getNombre());

    while (entrada != 0) {
        switchMenuVeterinaria(entrada, vet);
        entrada = menuVeterinaria(vet.getNombre());
    }
}

function crearCliente(vet: Veterinaria): void{
    let nombre: string = rls.question("Ingrese el nombre del cliente: ");
    let direccion: string = rls.question("Ingrese la direccion del cliente: ");
    let telefono: number = rls.questionInt("Ingrese el telefono del cliente: ");
    let nomMasc: string = rls.question("Ingrese el nombre de la mascota: ");
    let razaMasc: string = rls.question("Ingrese la raza de la mascota: ");
    console.log('\n');

    vet.altaCliente(nombre, direccion, telefono, nomMasc, razaMasc);    
}

function crearPaciente(vete: Veterinaria): void {
    let idDueño: string = rls.question("Ingrese el ID del cliente: ");
    let mascota: string = rls.question("Ingrese el nombre de la mascota: ");
    let razaMascota: string = rls.question("Ingrese la raza de la mascota: ");
    vete.altaPaciente(mascota, razaMascota, idDueño); 
}

function bajaPaciente(vete: Veterinaria): void {
    let idDueño: string = rls.question("Ingrese el ID del cliente: ");
    let idMascota: string = rls.question("Ingrese el ID de la mascota a dar de baja: ");
    vete.bajaPaciente(idDueño, idMascota);
}

function pedirId(): string{
    let id: string = rls.question("\nIngrese el ID a buscar: "); 
    return id;
}
