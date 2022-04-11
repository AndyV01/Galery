
function cargarDepartamentos() {
    var array = ["Artigas", "Canelones", "Montevideo", "Salto"];
    array.sort();
    addOptions("departamento", array);
}


//Función para agregar opciones a un <select>.
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (departamento in array) {
        var opcion = document.createElement("option");
        opcion.text = array[departamento];
        // Añadimos un value a los option para hacer mas facil escoger los departamentos
        opcion.value = array[departamento]
        selector.add(opcion);
    }
}

function cargarLocalidades() {
    // Objeto de provincias con pueblos
    var listaLocalidad = {
        "Artigas":["Artigas","Bella Unión"],
        "Canelones":["Canelones","Santa Lucía"],
        "Montevideo":["Montevideo"],
        "Salto":["Salto","Daymán","Arapey"]
    }
    
    var departamentos = document.getElementById('departamento')
    var localidades = document.getElementById('localidad')
    var departamentoSeleccionada = departamentos.value
    
    // Se limpian la localidad
    localidades.innerHTML = '<option value="">Localidad</option>'
    
    if(departamentoSeleccionada !== ''){
      // Se seleccionan localidad y se ordenan
      departamentoSeleccionada = listaLocalidad[departamentoSeleccionada]
      departamentoSeleccionada.sort()
    
      // Insertamos la localidad
      departamentoSeleccionada.forEach(function(localidad){
        let opcion = document.createElement('option')
        opcion.value = localidad
        opcion.text = localidad
        localidades.add(opcion)
      });
    }
    
  }
  
cargarDepartamentos();

//Validaciones para los campos del formulario
//Expresiones regulares
const expresiones={
  nombre: /^[a-zA-Z]{3,15}$/,
  apellido: /^[a-zA-Z]{3,15}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
}

function validarCedula(ci) {
  //Inicializo los coefcientes en el orden correcto
  var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  var suma = 0;
  //Para el caso en el que la CI tiene menos de 8 digitos
  //calculo cuantos coeficientes no voy a usar
  var difCoef = parseInt(arrCoefs.length - ci.length);
  //recorro cada digito empezando por el de más a la derecha
  //o sea, el digito verificador, el que tiene indice mayor en el array
  for (var i = ci.length - 1; i > -1; i--) {
      //Obtengo el digito correspondiente de la ci recibida
      var dig = ci.substring(i, i + 1);
      //Lo tenía como caracter, lo transformo a int para poder operar
      var digInt = parseInt(dig);
      //Obtengo el coeficiente correspondiente al ésta posición del digito
      var coef = arrCoefs[i + difCoef];
      //Multiplico dígito por coeficiente y lo acumulo a la suma total
      suma = suma + digInt * coef;
  }
  var result = false;
  // si la suma es múltiplo de 10 es una ci válida
  if ((suma % 10) === 0) {
      result = true;
  }
  return result;
}

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const validarFormulario = (e) => {
    switch (e.target.name) {
      case "nombre":
          if(expresiones.nombre.test(e.target.value)){
         document.getElementById('nombre').classList.remove('incorrecto')
         document.querySelector('#grupo-nombre .form_input-error').classList.remove('form_input-error-active')
          }else{ 
            document.getElementById('nombre').classList.add('incorrecto')
            document.querySelector('#grupo-nombre .form_input-error').classList.add('form_input-error-active')
          }
      break;
      case "apellido":
          if(expresiones.apellido.test(e.target.value)){
         document.getElementById('apellido').classList.remove('incorrecto')
          document.querySelector('#grupo-apellido .form_input-error').classList.remove('form_input-error-active')
          }else{
            document.getElementById('apellido').classList.add('incorrecto')
            document.querySelector('#grupo-apellido .form_input-error').classList.add('form_input-error-active')
          }
      break;
      case "email":
          if(expresiones.email.test(e.target.value)){
          document.getElementById('email').classList.remove('incorrecto')
          document.querySelector('#grupo-email .form_input-error').classList.remove('form_input-error-active')
          }else{
            document.getElementById('email').classList.add('incorrecto')
            document.querySelector('#grupo-email .form_input-error').classList.add('form_input-error-active')
          }
      break;
      case "departamento":
        if(e.target.value !== ''){
          document.getElementById('departamento').classList.remove('incorrecto')
          document.querySelector('#grupo-departamento .form_input-error').classList.remove('form_input-error-active')
        }else{
          document.getElementById('departamento').classList.add('incorrecto')
          document.querySelector('#grupo-departamento .form_input-error').classList.add('form_input-error-active')
        }
      break;
      case "localidad":
        if(e.target.value !== ''){
          document.getElementById('localidad').classList.remove('incorrecto')
          document.querySelector('#grupo-localidad .form_input-error').classList.remove('form_input-error-active')
        }else{
          document.getElementById('localidad').classList.add('incorrecto')
          document.querySelector('#grupo-localidad .form_input-error').classList.add('form_input-error-active')
        }
      break;
      case "ci":
        if(validarCedula(e.target.value)){
          document.getElementById('ci').classList.remove('incorrecto')
          document.querySelector('#grupo-ci .form_input-error').classList.remove('form_input-error-active')
        }else{
          document.getElementById('ci').classList.add('incorrecto')
          document.querySelector('#grupo-ci .form_input-error').classList.add('form_input-error-active')
        }
      break;
    }
}

inputs.forEach((input) =>{
   input.addEventListener('keyup', validarFormulario)
   input.addEventListener('blur', validarFormulario)
})


formulario.addEventListener('submit', (e) =>{
  e.preventDefault()
})
