console.log("🟢 Connected!");

const formulario = document.querySelector("#formulario");

const nombreForm = document.querySelector("#nombre");
const apellidoForm = document.querySelector("#apellido");
const telefonoForm = document.querySelector("#telefono");
const correoForm = document.querySelector("#correo");
const notaForm = document.querySelector("#nota");

const modal = document.querySelector("#modal");
const modalText = document.querySelector("#modalText");

class Contacto {
  constructor(nombre, apellido, telefono, correo, nota) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.telefono = telefono),
      (this.correo = correo),
      (this.nota = nota);
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const valores = [
    nombreForm.value,
    apellidoForm.value,
    telefonoForm.value,
    correoForm.value,
    notaForm.value,
  ];

  const contacto = new Contacto(...valores);

  const {
    nombreCompleto = `${contacto.nombre} ${contacto.apellido}`,
    telefono,
    correo,
  } = contacto;

  modal.classList.remove("d-none");
  modalText.textContent = `Nombre: ${nombreCompleto} Email: ${correo} ${telefono}`;
});
