import { RedVeterinaria } from "./RedVeterinaria";
import { Paciente } from "./Paciente";
import { Cliente } from "./Cliente";

export class Veterinaria extends RedVeterinaria {
  protected nombre: string;
  protected direccion: string;
  protected id: string;
  protected telefono: number;
  protected clientes: Cliente [] = [];

  constructor (nombre: string, direccion: string, id: string) {
    super();
    this.nombre = nombre;
    this.direccion = direccion; 
    this.id = id; //Me parece que en la clase RedDeVeterinarias habria que tener un array de ids y buscar la ultima para ver cual corresponda a la nueva que se esta creando 
  }

  public altaNuevoPaciente() {};
  
  public bajaPaciente () {};

  //public modificarPaciente () {};

  public altaCliente (nombreCliente, direccionCliente, celularCliente, nombreMascota, razaMascota) {
    let nuevaId: string = this.generarId('cli');

    let nuevaMascota = new Paciente(nombreMascota, razaMascota);
    this.clientes.push(new Cliente(nuevaId, nombreCliente, direccionCliente, celularCliente, nuevaMascota));
  };

  public bajaCliente (nombreCliente: string): boolean {
      let existe: number;
      existe = this.clientes.findIndex(c => c.getNombre() === nombreCliente);

      if (existe != -1){
          this.clientes.splice(existe, 1);
          return true;

      } else {
          return false;
      }
    
  };

  public modificarCliente () {};

  //Metodos get
  
  public getNombre(): string{
    return this.nombre
  }

  public getDireccion(): string {
    return this.direccion
  }

  public getId(): string {
    return this.id
  }

  //Metodos set

  public setNombre(nuevoNombre: string): void {
    this.nombre = nuevoNombre
  }

  public setDireccion(nuevaDireccion: string) : void {
    this.direccion = nuevaDireccion
  }

  public setTelefono(nuevoTel: number) : void {
    this.telefono = nuevoTel;
  }

  

  //No deberia haber setId porque eso no se tendria que poder modificar

}