import { RedVeterinaria } from "./RedVeterinaria";
import { Proveedor } from "./Proveedor";
import { Veterinaria } from "./Veterinaria";

/*//Crear proveedor

const proverdor1 = new Proveedor (" ", "semi",1234, " pastilla" ) ;
console.log (proverdor1);*/

// Crear veterinaria

const veterinarias:Veterinaria [] = []; 
const proveedores:Proveedor [] = []; 
let contador: number = 0

function generarID(prefijo:string): string {
    
        contador = contador+1;
        return prefijo + contador; 
}

// Métodos Veterinarias

function altaVeterinaria(nombre: string, direccion: string, telefono: number) {
    const id = generarID("vet"); 
    const nuevaVeterinaria = new Veterinaria(id, nombre, direccion, telefono); 
    veterinarias.push(nuevaVeterinaria); 
    console.log(`Veterinaria ${nombre} agregada con ID: ${id}`);
}

function altaProveedor(nombre: string, telefono: number, producto: string): void {
    const id = generarID("prov"); 
    const nuevoProveedor = new Proveedor(id, nombre, telefono, producto); // Crea un nuevo proveedor
    proveedores.push(nuevoProveedor); // Agrega el proveedor a la lista
    console.log(`Proveedor ${nombre} agregado con ID: ${id}`);
}

altaVeterinaria("elsa","ahfgh" ,2858741)
altaProveedor("Pedro", 2285452, "vacunas")
altaVeterinaria("pepe","ahfgh" ,2858741)
altaVeterinaria("pato","ahfgh" ,2858741)


