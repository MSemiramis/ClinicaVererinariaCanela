import { Persona } from "./Persona";
import { Paciente } from "./Paciente";

export class Cliente extends Persona {
    private isVip: boolean = false;
    private cantVisitas: number = 1;
    private mascotas: Paciente [] = [];

    constructor(id: string, nombre: string, direccion: string, telefono: number, mascota: Paciente){
        super(id, nombre, telefono, direccion);
        this.mascotas.push(mascota);
    }

    getPacientes(): Paciente[] {
        return this.mascotas;
    }

    mostrarMascotas(c: Cliente): void {
        console.log(`\nPacientes del Cliente:`)
        c.mascotas.forEach(p => {
            console.log(`Nombre: ${p.getNombre()}. Especie: ${p.getEspecie()}. ID: ${p.getId()}`);
        });
        console.log(`\n`);
    }

    esVip(): boolean {
        return this.isVip;
    }

    getCantVisitas(): number{
        return this.cantVisitas;
    }

    getUltimaMascota(): string {
        return this.mascotas[this.mascotas.length-1].getNombre();
    }

    private setVip(b: boolean): void {
        this.isVip = b;
    }

    contarVisita(): void {
        this.cantVisitas++;
        this.checkClientStatus();
    }

    checkClientStatus(): void { //Si ha hecho mas de 5 visitas, se convierte en VIP
        if (!this.esVip() && this.getCantVisitas() > 5){
            this.setVip(true);
            console.log(`${this.getNombre()} es ahora Vip.`);
        }
    }

    agregarMascota(mascota: Paciente): void {
        this.mascotas.push(mascota);
    }

    eliminarMascota(index: number) {
        if (index != -1) {
            this.mascotas.splice(index, 1);
            console.log(`\nBaja realizada con exito.`);
        } else {
            console.log(`\nNo se pudo realiar la Baja. No se encontró la mascota buscada.`);
        }
    }

    buscarIndicePorIdMascota(idMascota:string): number {
        let index = -1;
        for (let i = 0; i < this.mascotas.length; i++) {
          if (this.mascotas[i].getId() === idMascota) {
            index = i;
          break;
          }
        }
        return index;
    }
   
}

