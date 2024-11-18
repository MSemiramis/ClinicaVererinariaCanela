import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import { Persona } from "./Persona"

export abstract class RedVeterinaria {
   protected  veterinarias:  Veterinaria[] = [];
   protected  proveedores: Proveedor[] = [];
   protected contador : number = 0

   // Generar los id para veterinarias y proveedores incrementando el contador

    private generarID(prefijo:string): string {
        this.contador = this.contador+1;
        return prefijo + this.contador; 
    }

    // Métodos Veterinarias

    altaVeterinaria(nombre: string, direccion: string, telefono: number) {
        const id = this.generarID("vet"); 
        const nuevaVeterinaria = new Veterinaria(id, nombre, direccion, telefono); 
        this.veterinarias.push(nuevaVeterinaria); 
        console.log(`Veterinaria ${nombre} agregada con ID: ${id}`);
    }

    bajaVeterinaria(id: string) : void {
        this.veterinarias = this.veterinarias.filter(vet => vet.getId() !== id); // Elimina veterinaria por ID
        console.log(`Veterinaria con ID: ${id} eliminada.`);
    }

    modificarVeterinaria(id: string, nombre?: string, direccion?: string, telefono?: number): void {
        let veterinariaEncontrada: boolean = false; // Variable para verificar si la veterinaria fue encontrada
    
        this.veterinarias.forEach(vet => {
            if (vet.getId() === id) {
                veterinariaEncontrada = true; // Marcamos que encontramos la veterinaria
    
                // Modificamos los valores si se pasan
                if (nombre) vet.setNombre(nombre);
                if (direccion) vet.setDireccion(direccion);
                if(telefono) vet.setTelefono(telefono);
    
                console.log(`Veterinaria con ID: ${id} modificada.`);
            }
        });
    
        // Si no encontramos la veterinaria, mostramos un mensaje
        if (!veterinariaEncontrada) {
            console.log(`Veterinaria con ID: ${id} no encontrada.`);
        }
    }

    // Métodos para Proveedores
    altaProveedor(nombre: string, telefono: number, producto: string): void {
        const id = this.generarID("prov"); 
        const nuevoProveedor = new Proveedor(id, nombre, telefono, producto); // Crea un nuevo proveedor
        this.proveedores.push(nuevoProveedor); // Agrega el proveedor a la lista
        console.log(`Proveedor ${nombre} agregado con ID: ${id}`);
    }

    bajaProveedor(id: string): void {
        this.proveedores = this.proveedores.filter(prov => prov.getId() !== id); // Elimina proveedor por ID
        console.log(`Proveedor con ID: ${id} eliminado.`);
    }

    modificarProveedor(id: string, nombre?: string, telefono?: number, producto?: string): void {
        let proveedorEncontrado: boolean = false; // Variable para verificar si el proveedor fue encontrado
    
        this.proveedores.forEach(p => {
            if (p.getId() === id) {
                proveedorEncontrado = true; // Marcamos que encontramos el proveedor
    
                // Modificamos los valores si se pasan
                if (nombre) p.setNombre(nombre);
                if (telefono) p.setTelefono(telefono);
                if (producto) p.addProduct(producto);
    
                console.log(`Proveedor con ID: ${id} modificado.`);
            }
        });
    
        // Si no encontramos el proveedor, mostramos un mensaje
        if (!proveedorEncontrado) {
            console.log(`Proveedor con ID: ${id} no encontrado.`);
        }
    }

}


