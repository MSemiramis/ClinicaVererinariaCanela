export abstract class Persona {
    protected id: string;
    protected nombre: string;
    protected telefono: number;

    constructor(id: string, nombre: string, telefono: number) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }

    //Getters y setters

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    
    
}