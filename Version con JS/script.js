import {Veterinaria} from "./Veterinaria";

const tituloSeccion = document.getElementById("titulo-seccion");
const btnConsulta = document.getElementById("btn-consulta");
const btnAlta = document.getElementById("btn-alta-cliente");
const btnModif = document.getElementById("btn-modif-cliente");
const btnBaja = document.getElementById("btn-baja-cliente");
const divInputs = document.getElementById("div-inputs");

let veterinariaOriginal = new Veterinaria("Canela", "Olavarria", "vet0");

btnConsulta.addEventListener("click", nuevaConsulta);
btnAlta.addEventListener("click", darDeAlta);
btnModif.addEventListener("click", modificarCliente);
btnBaja.addEventListener("click", darDeBaja);

console.log("Hola esto ya deberia andar");

function nuevaConsulta () {
  btnConsulta.classList.add("btn-activo");
  tituloSeccion.textContent = "Nueva Consulta";
  divInputs.innerHTML = `<div class="datos">
      <label for="cliente">Cliente: <input name="cliente" id="cliente" type="text" required></input></label>
      <label for="paciente">Nombre de mascota: <input name="paciente" id="paciente" type="text" required></input></label>
      <label for="problema">¿Qué le ocurre? <textarea name="problema" id="problema" rows="5"></textarea></label>
<button id="btn-enviar" onclick="enviarConsulta()">Enviar</button>
</div>`;
}

function enviarConsulta () {
    console.log("Se registro la consulta")
}

function darDeAlta () {
  btnAlta.classList.add("btn-activo");
  tituloSeccion.textContent = "Alta Cliente";
  divInputs.innerHTML = `<div class="datos">
      <label for="cliente">Nombre y apellido: <input name="cliente" id="crear-cliente" type="text" required></input></label>
      <label for="cliente">Celular: <input name="cel-cliente" id="cel-cliente" type="number" required></input></label>
      <label for="cliente">Direccion: <input name="direccion-cliente" id="direccion-cliente" type="text" required></input></label>
      <label for="paciente">Nombre de mascota: <input name="paciente" id="crear-paciente" type="text" required></input></label>
      <label for="paciente">Tipo de animal: <input name="raza" id="raza-paciente" type="text" required></input></label>
      <p>Su ID será: <em><b>(buscar la id correspondiente)</b></em></p>
<button id="btn-dar-alta" onclick="darAltaCliente()">Crear</button>
    </div>`;
}

function darAltaCliente() {
    const nombreCliente = document.getElementById("crear-cliente").value;
    const direccionCliente = document.getElementById("direccion-cliente").value;
    const celularCliente = document.getElementById("cel-cliente").value;
    const nombreMascota = document.getElementById("crear-paciente").value;
    const razaMascota = document.getElementById("raza-paciente").value;
    
    console.log("El cliente se llama " + nombreCliente + ", y su mascota se llama " + nombreMascota + " que es de raza " + razaMascota);
    
    veterinariaOriginal.altaCliente(nombreCliente, direccionCliente, celularCliente, nombreMascota, razaMascota);

    console.log("Arreglo de clientes de esta veterinaria: " + veterinariaOriginal.clientes);
}

function modificarCliente () {
  btnModif.classList.add("btn-activo");
  tituloSeccion.textContent = "Modificar Cliente";
  divInputs.innerHTML = `<div class="datos">
      <label for="cliente">ID del cliente: <input name="cliente" id="id-cliente" type="text" required></input></label>
      <label for="nuevo-telefono">Nuevo número de teléfono: <input name="nuevo-telefono" id="nuevo-celu-paciente" type="number" required></input></label>
      <button id="btn-cambiar-celu" onclick="actualizarTelefono()">Actualizar numero</button>
      <label for="nueva-direccion">Nueva dirección: <input name="nueva-direccion" id="nueva-direccion-paciente" type="string" required></input></label>
      <button id="btn-cambiar-direccion" onclick="actualizarDireccion()">Actualizar dirección</button>
      <label for="paciente">Mascota a agregar: <input name="paciente" id="nuevo-paciente" type="text" required></input></label>
      <label for="paciente">Tipo de animal: <input name="raza" id="raza-nuevo-paciente" type="text" required></input></label>
      <button id="btn-agregar-mascota" onclick="agregarMascota()">Agregar</button>
      <label for="paciente-a-borrar">Mascota a eliminar: <input name="paciente-a-borrar" id="paciente-a-borrar" type="text" required></input></label>
      <button id="btn-eliminar-mascota" onclick="eliminarMascota()">Eliminar</button>
    </div>`;
}

function buscarCliente () {
    let idAVerificar = document.getElementById("id-cliente").value;
    let clienteCorrecto = this.clientes.find(cli => cli.id == idAVerificar);
    return clienteCorrecto;
}

function actualizarTelefono() {
    let clienteEncontrado = buscarCliente();
    nuevoNumero = document.getElementById("nuevo-celu-paciente").value;
    
    if (clienteEncontrado) {
        clienteEncontrado.setTelefono(nuevoNumero);
    } else {
        alert("No se encontró un cliente con esa ID")
    }
}

function actualizarDireccion() {
    let clienteEncontrado = buscarCliente();
    nuevaDireccion = document.getElementById("nueva-direccion-paciente").value;

    if (clienteEncontrado) {
        clienteEncontrado.setDireccion(nuevoNumero);
    } else {
        alert("No se encontró un cliente con esa ID")
    }
}

function agregarMascota() {
    let clienteEncontrado = buscarCliente();
    let nombreNuevaMascota = document.getElementById("nuevo-paciente").value;
    let razaNuevaMascota = document.getElementById("raza-nuevo-paciente").value;

    if (clienteEncontrado) {
        let nuevaMascota = new Paciente(nombreNuevaMascota, razaNuevaMascota);
        clienteEncontrado.mascotas.push(nuevaMascota);
        console.log(`El cliente ${clienteEncontrado.getNombre()} ahora tiene una nueva mascota, llamada ${clienteEncontrado.getUltimaMascota()}`)
    } else {
        alert("No se encontró un cliente con esa ID")
    }
    
    console.log("Se ha añadido a la mascota " + nuevaMascota + " al cliente " + clienteCorrespondiente);
}

function eliminarMascota() {
  let mascotaAEliminar = document.getElementById("paciente-a-borrar").value;
  
  let clienteCorrespondiente = document.getElementById("nombre-cliente").value;
  //let clienteEnArray = this.cliente.indexOf(clienteCorrespondiente).bajaPaciente(mascotaAEliminar);
  //ver si asi se encuentra y se agrega una nueva mascota para un cliente existente
  
  console.log("Se ha dado de baja a la mascota " + mascotaAEliminar + " del cliente " + clienteCorrespondiente);
}

function darDeBaja () {
  btnBaja.classList.add("btn-activo");
  tituloSeccion.textContent = "Baja Cliente";
  divInputs.innerHTML = `<div class="datos">
      <label for="cliente">Nombre y apellido: <input name="cliente" id="eliminar-cliente" type="text" required></input></label>
<button id="btn-dar-baja" onclick="darBajaCliente()">Eliminar</button>
    </div>`;
}

function darBajaCliente () {
  let clienteAEliminar = document.getElementById("eliminar-cliente").value;
  //let clienteEnArray = this.cliente.indexOf(clienteAEliminar).bajaPaciente(clienteAEliminar);
  //ver si asi se encuentra y se agrega una nueva mascota para un cliente existente
  console.log("Se ha dado de baja al cliente " + clienteAEliminar);
}