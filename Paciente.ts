export class Paciente{

    private nombre: string;
    private especie: string
    private id: string;

    constructor(nombre: string, especie: string, id: string){
        this.nombre = nombre;
        this.especie = especie;
        this.id = id;
    }
    
    public getNombre(): string{
        return this.nombre
    }

    public getEspecie(): string{
        return this.especie;
    }

    public getId(): string{
        return this.id;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    
}

