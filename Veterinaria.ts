import * as rls from "readline-sync";

import { RedVeterinaria } from "./RedVeterinaria";
import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";

export class Veterinaria extends RedVeterinaria {
  protected nombre: string;
  protected direccion: string;
  protected id: string;
  protected telefono: number;
  protected clientes: Cliente[] = [];

  constructor(nombre: string, direccion: string, telefono: number, id: string) {
    super();
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id; 
    this.telefono = telefono;
  }

  public altaNuevoPaciente(nombre: string, especie: string): Paciente {
    let idPac = this.generarId("PAC");
    especie = this.validarEspecie(especie);

    return new Paciente(nombre, especie, idPac);
  }

  public bajaPaciente() {}

  public validarEspecie(especie: string): string {
    if (especie.toLowerCase() == "perro" || especie.toLowerCase() == "gato") {
      return especie;
    } else {
      return "exotico";
    }
  }

  //public modificarPaciente () {};

  public altaCliente(nombreCliente: string, direccionCliente: string, celularCliente: number, nombreMascota: string, razaMascota: string): void {
    let idCli: string = this.generarId("CLI");
    let nuevaMascota: Paciente = this.altaNuevoPaciente(nombreMascota, razaMascota);

    this.clientes.push(new Cliente(idCli, nombreCliente, direccionCliente, celularCliente, nuevaMascota));
  }

  public buscarIndicePorId(id: string){
    return this.clientes.findIndex(c => c.getId() === id)
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
    }

    console.log(`Cliente modificado con exito.`);
      
  }

  public mostrarDatosClientes(): void {
    this.clientes.forEach((c) => {
      console.log(`\nNombre del Cliente: ${c.getNombre()}`);
      console.log(`Direccion: ${c.getDireccion()}`);
      console.log(`Telefono: ${c.getTelefono()}`);
      console.log(`Id: ${c.getId()}`);
      console.log(`Es VIP: ${c.esVip() ? 'Si' : 'No'}`);
      console.log(`Cantidad de Visitas: ${c.getCantVisitas()}`);

      c.mostrarMascotas();
    });
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
