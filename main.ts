import { Veterinaria } from "./Veterinaria";

let veterinaria1 = new Veterinaria("Canela", "Olavarria", 28548455, "vet0");

veterinaria1.altaCliente('Agustin', 'Giovanelli 2955', 2284602570, 'Chester', 'gato');
veterinaria1.altaCliente('Enzo', 'Giovanelli 2950', 2284602575, 'Rango', 'iguana');

veterinaria1.mostrarDatosClientes();

veterinaria1.bajaCliente('CLI1');

veterinaria1.bajaCliente('CLI6');

veterinaria1.mostrarDatosClientes();

veterinaria1.modificarCliente('CLI3', 'Sancho');

veterinaria1.mostrarDatosClientes();


