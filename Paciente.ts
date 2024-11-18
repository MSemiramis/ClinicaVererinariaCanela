class Paciente{

    protected nombre: string;
    protected especie: string

    constructor( nombre: string, especie:string){
        this.nombre = nombre;
        this.especie = especie;
    }
    
    public getNombre(): string{
        return this.nombre
    }

    public getespecie(): string{
        return this.especie
    }

    // agregar especie
    public static agregarPaciente(nombre: string, especie: string): Paciente {
        const especiesPermitidas = ["perro", "gato"];
        let especieValida = false;

        // Verificar especie
        for (let i = 0; i < especiesPermitidas.length; i++) {
            if (
                especie === especiesPermitidas[i] || // Comparación exacta
                especie === especiesPermitidas[i].toUpperCase() || // Todo en mayúsculas
                especie === especiesPermitidas[i][0].toUpperCase() + especiesPermitidas[i].slice(1) 
            ) {
                especieValida = true;
                break;
            }
        }

        if (!especieValida) {
            console.log(`Especie no reconocida. Registrando como '${especie}'.`);
        }
        return new Paciente(nombre, especie);
    }
}

