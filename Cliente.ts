import { Persona } from "./Persona";
import { Paciente } from "./Paciente";

export class Cliente extends Persona {
    private isVip: boolean = false;
    private cantVisitas: number = 1;
    //private visitas: string [] = [];
    private mascotas: Paciente [] = [];

    constructor(id: string, nombre: string, direccion: string, telefono: number, mascota: Paciente){
        super(id, nombre, telefono, direccion);
        this.mascotas.push(mascota);
    }

    // addVisita(motivoVisita: string): void{
    //     this.visitas.push(motivoVisita);
    // }

    // mostrarVisitas(): void {
    //     console.log(`Motivo/s de visita/s del cliente ${this.getNombre()}:`)
    //     this.visitas.forEach(v => {
    //         console.log(`${v}`)
    //     });
    // }

    // getVisitas(): string[] {
    //     return this.visitas;
    // }

    mostrarMascotas(): void {
        console.log(`\nPacientes del Cliente:`)
        this.mascotas.forEach(m => {
            console.log(`Nombre: ${m.getNombre()}. Especie: ${m.getEspecie()}`);
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

   
}

