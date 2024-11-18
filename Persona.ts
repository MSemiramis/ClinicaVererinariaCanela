export abstract class Persona {
    protected id: string;
    protected nombre: string;
    protected telefono: number;
    protected direccion: string;

    constructor(id: string, nombre: string, telefono: number, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
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

// const arrPacientes: Persona[] = [];
// const arrayDeIds: string[] = [];

// function altaPersona (nombre: string, telefono: number) {
//     arrayDeIds.push(`Persona${arrayDeIds.length+1}`);
//     let nuevaPersona = new Persona (arrayDeIds[arrayDeIds.length], nombre, telefono);
//     arrPacientes.push(nuevaPersona)
// }

// console.log("arreglo de ids: " + arrayDeIds);
// console.log("arreglo de pacientes: " + arrPacientes);

// altaPersona("enzo", 1231231);

// console.log("arreglo de ids: " + arrayDeIds);
// console.log("arreglo de pacientes: " + arrPacientes);

// console.log("Nombre de persona agregada: " + arrPacientes[0].getNombre())

// altaPersona("semi", 234123);

// console.log("arreglo de ids: " + arrayDeIds);
// console.log("arreglo de pacientes: " + arrPacientes);

// console.log("Nombre de persona agregada: " + arrPacientes[1].getNombre())
    
