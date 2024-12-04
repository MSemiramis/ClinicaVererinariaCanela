import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";

export class Veterinaria {
  protected nombre: string;
  protected direccion: string;
  protected id: string;
  protected telefono: number;
  protected clientes: Cliente[] = [];
  protected contador: number;

  constructor(nombre: string, direccion: string, telefono: number, id: string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id; 
    this.telefono = telefono;
    this.contador = 0;
  }

  public altaPaciente(nombre: string, especie: string, idDueño: string) {
    let nuevaMascota: Paciente = this.altaNuevoPaciente(nombre, especie); 
    let index: number = this.buscarIndicePorId(idDueño);

    if (index != -1) {
      this.clientes[index].agregarMascota(nuevaMascota);
      console.log("Se ha agregado exitosamente la nueva mascota.");
    } else {
      console.log(`\nNo se pudo encontrar al cliente. El ID no existe.`);
    }
  }

  public altaNuevoPaciente(nombre: string, especie: string): Paciente {
    let idPac = this.generarId("PAC");
    especie = this.validarEspecie(especie);

    return new Paciente(idPac, nombre, especie);
  }

  public bajaPaciente(idDueño: string, idMascota: string): void {
    let existeCliente: number;
    existeCliente = this.buscarIndicePorId(idDueño);
    
    console.log(`\nIntentando realizar la baja del paciente con id ${idMascota}...`);
    let existePaciente: number;
    existePaciente = this.clientes[existeCliente].buscarIndicePorIdMascota(idMascota);
    this.clientes[existeCliente].eliminarMascota(existePaciente);
    
  }
  

  public validarEspecie(especie: string): string {
    if (especie.toLowerCase() == "perro" || especie.toLowerCase() == "gato") {
      return especie;
    } else {
      return "exotico";
    }
  }

  public generarId(prefijo:string): string {
    this.contador++;
    return prefijo + this.contador; 
}

  public altaCliente(nombreCliente: string, direccionCliente: string, celularCliente: number, nombreMascota: string, razaMascota: string): void {
    let idCli: string = this.generarId("CLI");
    let nuevaMascota: Paciente = this.altaNuevoPaciente(nombreMascota, razaMascota);

    this.clientes.push(new Cliente(idCli, nombreCliente, direccionCliente, celularCliente, nuevaMascota));
  }

  public buscarIndicePorId(id: string): number{
    let index = -1;
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].getId() === id) {
        index = i;
      break;
      }
    }
    return index;
  }

  public mostrarClienteXId(id: string){
    let index = this.buscarIndicePorId(id);
    
    if (index != -1) {
      this.mostrarDatosCliente(this.clientes[index]);
      
    } else {
      console.log(`\nNo se pudo encontrar al cliente. El ID no existe.`);
    }
    
  }

  public bajaCliente(id: string): void {
    let existe: number;
    existe = this.buscarIndicePorId(id);
    console.log(`\nIntentando realizar Baja del cliente con id ${id}...`);

    if (existe != -1) {
      this.clientes.splice(existe, 1);
      console.log(`\nBaja realizada con exito.`);
    } else {
      console.log(`\nNo se pudo realiar la Baja. El ID no existe.`);
    }
  }

  public modificarCliente(id: string, nombre?: string, direccion?: string, telefono?: number): void {
    let pos = this.buscarIndicePorId(id);
    if (pos != -1) {
      if (nombre) this.clientes[pos].setNombre(nombre);
      if (direccion) this.clientes[pos].setDireccion(direccion);
      if (telefono) this.clientes[pos].setTelefono(telefono);
      console.log(`Cliente modificado con exito.`);
    } else {
      console.log(`No se pudo modificar al cliente con ID: ${id}`)
    }    
    
  } 

  public mostrarDatosClientes(): void {
    if(this.clientes.length != 0){
      this.clientes.forEach((c) => {
        this.mostrarDatosCliente(c);
      });
    } else {
      console.log("No hay clientes registrados.");
    }
  }

  public mostrarDatosCliente(c: Cliente): void{
    console.log(`\nNombre del Cliente: ${c.getNombre()}`);
      console.log(`Direccion: ${c.getDireccion()}`);
      console.log(`Telefono: ${c.getTelefono()}`);
      console.log(`Id: ${c.getId()}`);
      console.log(`Es VIP: ${c.esVip() ? 'Si' : 'No'}`);
      console.log(`Cantidad de Visitas: ${c.getCantVisitas()}`);

      c.mostrarMascotas(c);
  }

  //Metodos get

  public getNombre(): string {
    return this.nombre;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public getId(): string {
    return this.id;
  }

  public getTelefono(): number{
    return this.telefono;
  }

  public getClientes(): Cliente[]{
    return this.clientes;
  }

  public getCantClientes(): number{
    return this.clientes.length;
  }

  //Metodos set

  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre;
  }

  public setDireccion(nuevaDireccion: string): void {
    this.direccion = nuevaDireccion;
  }

  public setTelefono(nuevoTel: number): void {
    this.telefono = nuevoTel;
  }

  //No deberia haber setId porque eso no se tendria que poder modificar
}
