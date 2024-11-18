import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";

export abstract class RedVeterinaria{
   protected  verterinarias:  Veterinaria[] = [];
   protected  provedores: Proveedor [] = [];


   // Métodos Veterinarias
   altaVeterinaria() {
    
    }   

    bajaVeterinaria() {
        
    }

    modificarVeterinaria() {
    }
    
    // Métodos Proveedor
    altaProveedor() {
        
    }

    bajaProveedor() {
       
    }

    modificarProveedor() {
        
    }
}
