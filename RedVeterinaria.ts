import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import { Persona } from "./Persona"

export class RedVeterinaria {
   protected  veterinarias:  Veterinaria[] = [];
   protected  proveedores: Proveedor[] = [];
   protected contador : number = 0

   // Generar los id para veterinarias y proveedores incrementando el contador
    public generarId(prefijo:string): string {
        this.contador++;
        return prefijo + this.contador; 
    }

    // Métodos Veterinarias

    altaVeterinaria(nombre: string, direccion: string, telefono: number): void {
        const id = this.generarId("VET"); 
        const nuevaVeterinaria = new Veterinaria(nombre, direccion, telefono, id); 
        this.veterinarias.push(nuevaVeterinaria); 
        console.log(`Veterinaria ${nombre} agregada con ID: ${id}`);
    }


    // Elimina veterinaria por ID
    bajaVeterinaria(id: string) : void {
        this.veterinarias = this.veterinarias.filter(vet => vet.getId() !== id); 
        console.log(`Veterinaria con ID: ${id} eliminada.`);
    }

    modificarVeterinaria(id: string, nombre?: string, direccion?: string, telefono?: number): void {
        let veterinariaEncontrada: boolean = false; 
        this.veterinarias.forEach(vet => {
            if (vet.getId() === id) {
                veterinariaEncontrada = true; 
                if (nombre) vet.setNombre(nombre);
                if (direccion) vet.setDireccion(direccion);
                if(telefono) vet.setTelefono(telefono);
                console.log(`Veterinaria con ID: ${id} modificada.`);
             return
            }
        });
    
        // Si no encontramos la veterinaria, mostramos un mensaje
        if (!veterinariaEncontrada) {
            console.log(`Veterinaria con ID: ${id} no encontrada.`);
        }
    }

    public buscarVeterinariaPorID(id: string): number{
        let index = -1;
        for (let i = 0; i < this.veterinarias.length; i++) {
          if (this.veterinarias[i].getId() === id) {
            index = i;
          break;
          }
        }
        return index;
    }

    
    public buscarVeterinariaPorNombre(nombre: string): number{
        let index = -1;
        for (let i = 0; i < this.veterinarias.length; i++) {
          if (this.veterinarias[i].getNombre() === nombre) {
            index = i;
          break;
          }
        }
        return index;
    }



    public devolverVeterinaria (id:string) : Veterinaria {
        let index : number = this.buscarVeterinariaPorID(id);
        if (index != -1){
            return this.veterinarias[index]
        } else{
            return this.veterinarias[0] 
        }
        
    }

    // Métodos para Proveedores
    altaProveedor(nombre: string, telefono: number, direccion: string, producto: string): void {
        const id = this.generarId("PROV"); 
        const nuevoProveedor = new Proveedor(id, nombre, telefono, direccion, producto); 
        this.proveedores.push(nuevoProveedor); 
        console.log(`Proveedor ${nombre} agregado con ID: ${id}`);
    }

    // Elimina veterinaria por ID
    bajaProveedor(id: string): void {
        this.proveedores = this.proveedores.filter(prov => prov.getId() !== id); 
        console.log(`Proveedor con ID: ${id} eliminado.`);
    }

    modificarProveedor(id: string, nombre?: string, telefono?: number, producto?: string): void {
        let proveedorEncontrado: boolean = false;
    
        this.proveedores.forEach(p => {
            if (p.getId() === id) {
                proveedorEncontrado = true; 
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


