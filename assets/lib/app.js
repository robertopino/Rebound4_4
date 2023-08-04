"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log("🟢 Connected!");

var formulario = document.querySelector("#formulario");

var nombreForm = document.querySelector("#nombre");
var apellidoForm = document.querySelector("#apellido");
var telefonoForm = document.querySelector("#telefono");
var correoForm = document.querySelector("#correo");
var notaForm = document.querySelector("#nota");

var modal = document.querySelector("#modal");
var modalText = document.querySelector("#modalText");

var Contacto = function Contacto(nombre, apellido, telefono, correo, nota) {
  _classCallCheck(this, Contacto);

  this.nombre = nombre, this.apellido = apellido, this.telefono = telefono, this.correo = correo, this.nota = nota;
};

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var valores = [nombreForm.value, apellidoForm.value, telefonoForm.value, correoForm.value, notaForm.value];

  var contacto = new (Function.prototype.bind.apply(Contacto, [null].concat(valores)))();

  var _contacto$nombreCompl = contacto.nombreCompleto,
      nombreCompleto = _contacto$nombreCompl === undefined ? contacto.nombre + " " + contacto.apellido : _contacto$nombreCompl,
      telefono = contacto.telefono,
      correo = contacto.correo;


  modal.classList.remove("d-none");
  modalText.textContent = "Nombre: " + nombreCompleto + " Email: " + correo + " " + telefono;
});