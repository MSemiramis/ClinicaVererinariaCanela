import * as rls from "readline-sync";

import { Veterinaria } from "./Veterinaria";
import { RedVeterinaria } from "./RedVeterinaria";

// Archivo principal

let redVeterinariaAdmin: RedVeterinaria = new RedVeterinaria();

redVeterinariaAdmin.cargarDesdeJSON();
//console.log(redVeterinariaAdmin)

//Menues

menuPrincipal();



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

function buscarVeterinaria(): Veterinaria | undefined{
    let id: string = rls.question("Ingrese el ID de la veterinaria a buscar: ").toUpperCase();

    return redVeterinariaAdmin.devolverVeterinariaXId(id);
}

function bajaVeterinariaPorId(){
    let id: string = rls.question("Ingrese el ID de la veterinaria a dar de baja: ").toUpperCase();
    redVeterinariaAdmin.bajaVeterinaria(id);
}

function bajaProveedorPorId(){
    let id: string = rls.question("Ingrese el ID del proveedor a dar de baja: ").toUpperCase();
    redVeterinariaAdmin.bajaProveedor(id);
}

function pedirDatosModificarCliente(vete: Veterinaria){
    let id: string = rls.question("Ingrese ID del cliente a modificiar: ").toUpperCase();
    console.log("Si no desea modificar alguno de los siguientes datos, solamente presione 'enter' cuando corresponda.");
    let nombre: string = rls.question("Ingrese un nuevo nombre: ");
    let direccion: string = rls.question("Ingrese una nueva direccion: ");
    let telefono: number = rls.questionInt("Ingrese un nuevo telefono: ");
    
    console.log('\n');

    vete.modificarCliente(id, nombre, direccion, telefono);
}

function pedirDatosModificarVeterinaria(){
    let id: string = rls.question("Ingrese ID la veterinaria a modificiar: ").toUpperCase();
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

    let id: string = rls.question("Ingrese ID del proveedor a modificiar: ").toUpperCase();
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

function menuPrincipal(): void{
    console.clear();

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

    switch (entrada) {
        case 1: //Buscar Veterinaria
                gestionVeterinaria(buscarVeterinaria());
                volverMenuP();            
            break;
        case 2: //Alta Veterinaria
                crearVeterinaria();
                volverMenuP();
            break;
        case 3: //Alta Proveedor
                crearProveedor();
                volverMenuP();
            break;
        case 4: //Baja Veterinaria
                bajaVeterinariaPorId();
                volverMenuP();
            break;
        case 5: //Baja Proveedor
                bajaProveedorPorId();
                volverMenuP();
            break;
        case 6: //Modificar Veterinaria
                pedirDatosModificarVeterinaria();
                volverMenuP();
            break;
        case 7: //Modificar Proveedor   
                pedirDatosModificarProveedor();
                volverMenuP();
            break;
        case 8: //Listar Veterinarias
                redVeterinariaAdmin.listarVeterinarias();
                volverMenuP();
            break;
        case 9: //Listar Proveedores
                redVeterinariaAdmin.listarProveedores();
                volverMenuP();
            break;
        case 0: //Salir
                console.log('Saliendo del sistema...');
            break;
    
        default:
            console.log('Ingrese una opcion Valida. Enter para continuar...');
            rls.question();

            menuPrincipal();
            break;
    }

}

function volverMenuP(): void{
    console.log("\nPresione Enter para volver atras...");
    rls.question();
    menuPrincipal();
}

function volverSubmenuV(v: Veterinaria): void{
    console.log("\nPresione Enter para volver atras...");
    rls.question();
    menuVeterinaria(v);
}

function menuVeterinaria(v: Veterinaria): void {
    console.clear();

    console.log(`\n---Menu Veterinaria ${v.getNombre()}---`);
    console.log("---Gestion Clientes---");
    console.log("1. Dar de Alta un Cliente.");
    console.log("2. Dar de Baja un Cliente.");
    console.log("3. Modificar un Cliente.");
    console.log("4. Mostrar todos los Clientes.");
    console.log("5. Alta nuevo paciente.");
    console.log("6. Baja de paciente.");
    console.log("7. Volver Atras.");

    let entrada: number = rls.questionInt("\nIngrese una opcion.");
    console.log('\n');

    switch (entrada) {
        case 1: //Alta un Cliente
                crearCliente(v);
                volverSubmenuV(v);
            break;
        case 2: //Baja un Cliente
                bajaCliente(v);
                volverSubmenuV(v);
            break;
        case 3: //Modificar un Cliente
                pedirDatosModificarCliente(v);
                volverSubmenuV(v);
            break;
        case 4: //Mostrar todos los Clientes
                v.mostrarDatosClientes();
                volverSubmenuV(v);
            break;
        case 5: //Alta paciente
                crearPaciente(v);
                volverSubmenuV(v); 
            break;
        case 6: //Baja Pacientes
                bajaPaciente(v);
                volverSubmenuV(v);   
            break;
        case 7: //Volver Atras
                redVeterinariaAdmin.guardarEnJSON();
                menuPrincipal();
            break;

        default:
            console.log('Ingrese una opcion Valida.')
            volverSubmenuV(v);
            break;
    }
}

/*
function switchMenuVeterinaria(entrada: number, v: Veterinaria){
    switch (entrada) {
        case 1: //Alta un Cliente
                crearCliente(v);
            break;
        case 2: //Baja un Cliente
                bajaCliente(v);
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
                volverAtras();    
            break;
        case 7: //Volver Atras
                redVeterinariaAdmin.guardarEnJSON();
                menuPrincipal();
            break;
    
        default:
            break;
    }
}*/

function gestionVeterinaria(vet: Veterinaria | undefined){
    if (vet){
        menuVeterinaria(vet);
    } else {
        rls.question('Presione Enter para continuar...');
        menuPrincipal();
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

function bajaCliente(vete: Veterinaria): void {
    let id: string = rls.question("\nIngrese el ID del cliente a dar de baja: ").toUpperCase(); 
    vete.bajaCliente(id);
}

function pedirId(): string{
    let id: string = rls.question("\nIngrese el ID a buscar: ").toUpperCase(); 
    return id;
}
