const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

//Uso una expresión regular para validar los campos del formulario.
const expresiones = {
    nombre: /^[a-zA-Z\s]{1,40}$/, //Campo nombre solo acepta letras y espacios.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9_.]+$/ //campo correo electronico letras, numeros, guion y guion_bajo, arroba.    
}

//campos seteados como false por defecto para validar luego con un if si fueron rellenados.
var campos = {
    nombre: false,
    correo: false
}



//Función para validar que cada campo obligatorio del formulario este correcto.
const validarCamp = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`${campo}`).classList.add('formulario_grupo-correcto');
        document.getElementById(`${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;
    }else {
        document.getElementById(`${campo}`).classList.remove('formulario_grupo-correcto');
        document.getElementById(`${campo}`).classList.add('formulario_grupo-incorrecto');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo')
        campos[campo] = false;
    }
}

//Función para validar select.
var opcAsunto;
function validarAsunto() {
    var Asunto = document.getElementById('asunto');
    if (Asunto.value == "0" || Asunto.value == undefined) {
        document.getElementById('error_asunto').classList.add('formulario_input-error-activo');
        return opcAsunto = false;
    } else {
        document.getElementById('error_asunto').classList.remove('formulario_input-error-activo');
        return opcAsunto = true;
    }
}



//Función para validar el formulario.
const validarForm = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCamp(expresiones.nombre, e.target, e.target.name)
        break;
        case "correo":
            validarCamp(expresiones.correo, e.target, e.target.name)
        break;
    }
}

//Función para comprobar si hay algun cambio en el campo
inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

//evento "submit" del boton enviar
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarAsunto();
    const privacidad = document.getElementById('privacidad');
    if(campos.nombre && campos.correo && privacidad.checked && opcAsunto){
        formulario.reset();
        document.getElementById('mensaje_exito').classList.add('campo_mensaje-correcto-activo')
        document.getElementById('mensaje_error').classList.remove('formulario__mensaje-activo')
    }else {
        document.getElementById('mensaje_exito').classList.remove('campo_mensaje-correcto-activo')
        document.getElementById('mensaje_error').classList.add('formulario__mensaje-activo')
     
    }
})