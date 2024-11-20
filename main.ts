import * as rls from "readline-sync";
import { Veterinaria } from "./Veterinaria";
import { RedVeterinaria } from "./RedVeterinaria";
import { Proveedor } from "./Proveedor";


let palabraUsuario : string = rls.question("Ingrese una palabra: ");
let RedVeterinariaAdmin = new RedVeterinaria ();

/*letveterinaria1 = new Veterinaria("Canela", "Olavarria", 28548455);*/

RedVeterinariaAdmin.altaVeterinaria("Canela", "Olavarria", 28548455);

RedVeterinariaAdmin.altaVeterinaria ("Curcuma", "Olavarria", 2284452658);
RedVeterinariaAdmin.altaProveedor ("Juan Alvarez", 11525454, "av. cordoba 123", "pastillas")

let veterinaria1 : Veterinaria = RedVeterinariaAdmin.devolverVeterinaria("VET1")

//RedVeterinariaAdmin.modificarVeterinaria()

veterinaria1.altaCliente('Agustin', 'Giovanelli 2955', 2284602570, 'Chester', 'gato');
veterinaria1.altaCliente('Enzo', 'Giovanelli 2950', 2284602575, 'Rango', 'iguana');

veterinaria1.mostrarDatosClientes();

veterinaria1.bajaCliente('CLI1');

veterinaria1.bajaCliente('CLI6');

veterinaria1.mostrarDatosClientes();

veterinaria1.modificarCliente('CLI3', 'Sancho');

veterinaria1.mostrarDatosClientes();



