import { Persona } from "./Persona";

const arrayDeIds: string[] = [];

/*console.log(arrayDeIds);

arrayDeIds.push(`vet${arrayDeIds.length+1}`);

console.log(arrayDeIds);

arrayDeIds.push(`vet${arrayDeIds.length+1}`);

console.log(arrayDeIds);*/

const arrPacientes: Persona[] = [];

function altaPersona (nombre: string, telefono: number) {
    arrayDeIds.push(`Persona${arrayDeIds.length+1}`);
    let nuevaPersona = new Persona (arrayDeIds[arrayDeIds.length], nombre, telefono);
    arrPacientes.push(nuevaPersona)
}

console.log("arreglo de ids: " + arrayDeIds);
console.log("arreglo de pacientes: " + arrPacientes);

altaPersona("enzo", 1231231);

console.log("arreglo de ids: " + arrayDeIds);
console.log("arreglo de pacientes: " + arrPacientes);

console.log("Nombre de persona agregada: " + arrPacientes[0].getNombre)