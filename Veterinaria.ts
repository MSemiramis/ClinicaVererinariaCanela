import { RedDeVeterinarias } from "./redDeVeterinarias";
import { Paciente } from "./paciente";
import { Cliente } from "./cliente";

export class Veterinaria extends RedDeVeterinarias {
  protected nombre: string;
  protected direccion: string;
  protected id: string;
  protected paciente: Paciente;
  protected cliente: Cliente;

  constructor (nombre: string, direccion: string, id: string) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.id = id; //Me parece que en la clase RedDeVeterinarias habria que tener un array de ids y buscar la ultima para ver cual corresponda a la nueva que se esta creando 
  }

  public altaPaciente () {};
  
  public bajaPaciente () {};

  public modificarPaciente () {};

  public altaCliente (nombreCliente, direccionCliente, celularCliente, nombreMascota, razaMascota) {
    this.cliente.push(new Cliente(nombreCliente, direccionCliente, celularCliente, nombreMascota, razaMascota));
  };

  public bajaCliente (nombreCliente) {
    
  };

  public modificarCliente () {};

  //Metodos get
  public getNombre: string () {
    return this.nombre
  }

  public getDireccion: string () {
    return this.direccion
  }

  public getId: string () {
    return this.id
  }

  //Metodos set
  public setNombre: void (nuevoNombre: string) {
    this.nombre = nuevoNombre
  }

  public setDireccion: void (nuevaDireccion: string) {
    this.direccion = nuevaDireccion
  }

  //No deberia haber setId porque eso no se tendria que poder modificar

}