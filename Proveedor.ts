import { Persona } from "./Persona";

export class Proveedor extends Persona {
    private productos: string [] = [];

    constructor(id: string, nombre: string, telefono: number, producto: string){
        super(id, nombre, telefono);
        this.productos[0] = producto;
    }
    
    getProductos(): string []{
        return this.productos;
    }

    addProduct(aProduct: string): void {
        this.productos.push(aProduct);
    }

    removeProduct(aProduct: string): boolean { // Retorna true o false si fue posible la eliminacion
        let existe: number;
        existe = this.productos.indexOf(aProduct);

        if (existe != -1){
            this.productos.splice(existe, 1);
            return true;

        } else {
            return false;
        }
    }
}