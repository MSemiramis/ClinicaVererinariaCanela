export class Paciente{
    private id: string;
    private nombre: string;
    private especie: string

    constructor(id: string, nombre: string, especie: string){
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
    }
    
    getNombre(): string {
        return this.nombre;
    }

    getEspecie(): string{
        return this.especie;
    }

    public getId(): string{
        return this.id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    
}

