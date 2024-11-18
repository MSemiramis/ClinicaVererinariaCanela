import { Persona } from "./Persona";
//import { Paciente } from "./Paciente";

export class Cliente extends Persona {
    private isVip: boolean = false;
    private cantVisitas: number = 1;
    private visitas: string [] = [];
    //private mascotas: Paciente [] = [];

    constructor(id: string, nombre: string, telefono: number, motivoVisita: string){
        super(id, nombre, telefono);
        this.visitas [0] = motivoVisita;
    }

    mostrarVisitas(): void {
        console.log(`Motivo/s de visita/s del cliente ${this.getNombre()}:`)
        this.visitas.forEach(v => {
            console.log(`${v}`)
        });
    }

    mostrarMascotas(): void {
        console.log(`Mascota/s a cargo del cliente ${this.getNombre()}:`)
        this.visitas.forEach(m => {
            //console.log(`Nombre: ${m.getNombre()}. Especie: ${m.getRaza()}`); DESCOMENTAR CUANDO SE TENGA CLASE PACIENTE
        });
    }

    getClientStatus(): boolean {
        return this.isVip;
    }

    getCantVisitas(): number{
        return this.cantVisitas;
    }

    getVisitas(): string[] {
        return this.visitas;
    }

    // getMascotas(): string[] {
    //     return this.mascotas;
    // }

    addVisita(motivoVisita): void{
        this.visitas.push(motivoVisita);
    }

    private setVip(b: boolean): void {
        this.isVip = b;
    }

    contarVisita(): void {
        this.cantVisitas++;
    }

    checkClientStatus(): void { //Si ha hecho mas de 5 visitas, se convierte en VIP
        if (this.getCantVisitas() > 5){
            this.setVip(true);
        }
    }

   
}

