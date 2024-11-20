import * as rls from "readline-sync";
import { Veterinaria } from "./Veterinaria";
import { RedVeterinaria } from "./RedVeterinaria";
import { Proveedor } from "./Proveedor";

let redVeterinariaAdmin = new RedVeterinaria();

let veterinaria2 = new Veterinaria("Canela", "Olavarria", 28548455, 'VET88');

redVeterinariaAdmin.altaVeterinaria("Canela", "Olavarria", 28548455);

redVeterinariaAdmin.altaVeterinaria ("Curcuma", "Olavarria", 2284452658);
redVeterinariaAdmin.altaProveedor ("Juan Alvarez", 11525454, "av. cordoba 123", "pastillas")

let veterinaria1: Veterinaria = redVeterinariaAdmin.devolverVeterinaria("VET1")

//RedVeterinariaAdmin.modificarVeterinaria()

veterinaria2.altaCliente('Agustin', 'Giovanelli 2955', 2284602570, 'Chester', 'gato');
veterinaria2.altaCliente('Enzo', 'Giovanelli 2950', 2284602575, 'Rango', 'iguana');

veterinaria2.mostrarDatosClientes();
/*
veterinaria1.bajaCliente('CLI1');

veterinaria1.bajaCliente('CLI6');

veterinaria1.mostrarDatosClientes();

veterinaria1.modificarCliente('CLI3', 'Sancho');

veterinaria1.mostrarDatosClientes();
*/

//Menues

let entrada: number = menuPrincipal();

while (entrada != 0) {
    switchMenuPrincipal(entrada);
    entrada = menuPrincipal();
}

//Funciones Red Veterinaria

function crearVeterinaria(){
    let nombre: string = rls.question("Ingrese el nombre de la veterinaria: ");
    let direccion: string = rls.question("Ingrese la direccion de la veterinaria: ");
    let telefono: number = rls.questionInt("Ingrese el telefono de la veterinaria: ");
    console.log('\n');

    redVeterinariaAdmin.altaVeterinaria(nombre, direccion, telefono);
}

function crearProveedor(){
    let nombre: string = rls.question("Ingrese el nombre de la veterinaria: ");
    let direccion: string = rls.question("Ingrese la direccion de la veterinaria: ");
    let telefono: number = rls.questionInt("Ingrese el telefono de la veterinaria: ");
    console.log('\n');

    redVeterinariaAdmin.altaVeterinaria(nombre, direccion, telefono);
}

function buscarVeterinaria(): Veterinaria{
    let nombre: string = rls.question("Ingrese el nombre de la veterinaria a buscar: ");

    let vete: Veterinaria = redVeterinariaAdmin.devolverVeterinariaXNombre(nombre);

    return vete;
}

//Funciones de menu

function menuPrincipal(): number{
    console.log("\n---Menu Principal---");
    console.log("1. Buscar una veterinaria.");
    console.log("2. Dar de Alta una Veterinaria.");
    console.log("3. Dar de Alta un Proveedor.");
    console.log("4. Listar Veterinarias.");
    console.log("5. Listar Proveedores.");
    console.log("0. Salir.");

    let entrada: number = rls.questionInt("\nIngrese una opcion. Ingrese 0 para Salir: ");
    console.log('\n');

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
        case 4: //Listar Veterinarias
                redVeterinariaAdmin.listarVeterinarias();
                volverAtras();
            break;
        case 5: //Listar Proveedores
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
    console.log("4. Buscar un Cliente por ID.");
    console.log("5. Mostrar todos los Clientes.");
    console.log("\n6. Gestionar Pacientes.");
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
                //modificarCliente();
            break;
        case 4: //Buscar un Cliente por ID
                let idBuscar = pedirId(); 
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

function pedirId(): string{
    let id: string = rls.question("\nIngrese el ID a buscar: "); 
    return id;
}




