// declaracion de variables
const personal = {
    nombre: "",
    correo: "",
    id: 0,
};

const sintoma = {
    cuandoIntento: "",
    entoncesObservo: "",
    peroEsperaba: "",
    comoEvidencia: "",
    id: 0,
};

const causa = {
    causadoCausa: "",
    analisisCausa: "",
    ocasionaCausa: "",
    id: 0,
};

const solucion = {
    cuandoImplemente: "",
    entoncesEspera: "",
    paraValidar: "",
    id: 0,
};

let listaPersonal = [];
let listaSintomas = [];
let listaCausas = [];
let listaSoluciones = [];

let datos = {
    nombreUsuario: "",
    identificacionUsuario: "",
    correoUsuario: "",
    celularUsuario: "",
    tipoUsuario: "",
    claseUsuario: "",

    fechaHoraOcurrenciaSintomas: "",
    nombreProductoAfectado: "",
    entornoError: "",
    funcionalidadError: "",
    nombreVistaError: "",
    datosEntradaUsuario: "",
    pasosAntesError: "",
    consecuenciaErrorNegocio: "",
    identificacionSolicitud: "",
    requiereAlgunTipoMantenimiento: "",
    solucionNoError: "",
    tipoMantenimientoIdentificado: "",
    tipoIncidencia: "",

    nombrePersona: "",
    correoPersona: "",
    cargoPersona: "",

    identificadorRequisitosError: "",
    nombreUbicacionSoftwareInpactados: "",
    problemasReportadosAnteriormente: "",
    consecuenciasErrorComponentes: "",
    nivelPrioridad: "",
    sugerenciasSolucionProblemaTemp: "",
    tiempoEstimadoSolucion: "",
    mantenimientoDiferente: "",
    listaMantenimientoDiferente: [],
    tipoMantenimientoCorrectivo: "",
    fechaHoraApertura: "",
    fechaHoraCierre: "",
    estadoSolicitud: "",

    listaPersonal: [],
    listaSintomas: [],
    listaCausas: [],
    listaSoluciones: [],
};

function selectTab(){
    // Obtener todos los elementos de pestañas y contenidos
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    // Manejar el clic en las pestañas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Quitar la clase activa de todas las pestañas y contenidos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Agregar la clase activa a la pestaña seleccionada y su contenido
            tab.classList.add('active');
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });
}

// declaracion de funciones
function toggleCheckboxes(show) {
    // Selecciona el contenedor de checkboxes
    const checkboxContainer = document.getElementById("checkboxContainer");
    // Cambia el estilo de visualización según la selección del radio button
    checkboxContainer.style.display = show ? "block" : "none"; 
}

function toggleCheckboxesSolicitudRequiereAlgúnMantenimiento(show) {   
    console.log("TODO: Falta implementacion");
}

function savePersonal(){
    const nombre = document.getElementById("nombreInput").value;
    const correo = document.getElementById("correoInput").value;

    const id = listaPersonal.length;
    const nuevoPersonal = { ...personal, nombre, correo, id };
    listaPersonal.push(nuevoPersonal);

    console.log("Lista personal:", listaPersonal);

    const tbody = document.querySelector("#tablaPersonal tbody");
    const noPersonasRow = document.getElementById("noPersonasRow");

    if (listaPersonal.length === 0) {
        noPersonasRow.style.display = "table-row";
      } else {
        //Limpia la tabla para evitar duplicados
        while (tbody.rows.length > 0) {
            tbody.deleteRow(0);
        }

        noPersonasRow.style.display = "none";
      
        // Itera sobre cada elemento de la lista y agrega una fila a la tabla
        listaPersonal.forEach(persona => {
          // Crea una nueva fila
          const tr = document.createElement("tr");
      
          // Crea las celdas y agrega el contenido
          const tdNombre = document.createElement("td");
          tdNombre.textContent = persona.nombre;
      
          const tdCorreo = document.createElement("td");
          tdCorreo.textContent = persona.correo;

          const tdEliminar = document.createElement("td");
          const btnEliminar = document.createElement("span");
          btnEliminar.textContent = "Eliminar";
          btnEliminar.style.color = "red";
          btnEliminar.style.cursor = "pointer";
          btnEliminar.addEventListener("click", (event) => {
            eliminar(event, listaPersonal, 'listaPersonal');
          });
          tdEliminar.appendChild(btnEliminar);
      
          // Agrega las celdas a la fila
          tr.appendChild(tdNombre);
          tr.appendChild(tdCorreo);
          tr.appendChild(tdEliminar);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("nombreInput").value = '';
    document.getElementById("correoInput").value = '';
    //Desactivar boton
    document.getElementById('btnPersonal').setAttribute("disabled", "true");
}

function saveSintomas(){
    const cuandoIntento = document.getElementById("cuandoIntentoSintomaInput").value;
    const entoncesObservo = document.getElementById("entoncesObservoSintomaInput").value;
    const peroEsperaba = document.getElementById("peroEsperabaSintomaInput").value;
    const imagen = document.getElementById("evidenciaSintomaInput");

    const file = imagen.files[0];
    const comoEvidencia = file.name;
    const id = listaSintomas.length;

    const nuevoSintoma = { ...sintoma, cuandoIntento, entoncesObservo, peroEsperaba, comoEvidencia, id };
    listaSintomas.push(nuevoSintoma);

    console.log("Lista sintomas:", listaSintomas);

    const tbody = document.querySelector("#tablaSintomas tbody");
    const noPersonasRow = document.getElementById("noSintomasRow");

    if (listaSintomas.length === 0) {
        noPersonasRow.style.display = "table-row";
      } else {
        //Limpia la tabla para evitar duplicados
        while (tbody.rows.length > 0) {
            tbody.deleteRow(0);
        }

        noPersonasRow.style.display = "none";
      
        // Itera sobre cada elemento de la lista y agrega una fila a la tabla
        listaSintomas.forEach(sintoma => {
          // Crea una nueva fila
          const tr = document.createElement("tr");
      
          // Crea las celdas y agrega el contenido      
          const tdCuandoIntento = document.createElement("td");
          tdCuandoIntento.textContent = sintoma.cuandoIntento;

          const tdEntoncesObservo = document.createElement("td");
          tdEntoncesObservo.textContent = sintoma.entoncesObservo;

          const tdPeroEsperaba = document.createElement("td");
          tdPeroEsperaba.textContent = sintoma.peroEsperaba;

          const tdEvidencia = document.createElement("td");
          tdEvidencia.textContent = sintoma.comoEvidencia;


          const tdEliminar = document.createElement("td");
          const btnEliminar = document.createElement("span");
          btnEliminar.textContent = "Eliminar";
          btnEliminar.style.color = "red";

          btnEliminar.style.cursor = "pointer";
          btnEliminar.addEventListener("click", (event) => {
            eliminar(event, listaSintomas, 'listaSintomas');
          });
          tdEliminar.appendChild(btnEliminar);

          // Agrega las celdas a la fila
          tr.appendChild(tdCuandoIntento);
          tr.appendChild(tdEntoncesObservo);
          tr.appendChild(tdPeroEsperaba);
          tr.appendChild(tdEvidencia);
          tr.appendChild(tdEliminar);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("cuandoIntentoSintomaInput").value = '';
    document.getElementById("entoncesObservoSintomaInput").value = '';
    document.getElementById("peroEsperabaSintomaInput").value = '';
    document.getElementById("evidenciaSintomaInput").value = '';
    //Desactivar boton    
    document.getElementById('btnSintomas').setAttribute("disabled", "true");
}

function saveCausas(){
    const causadoCausa = document.getElementById("causadoCausaInput").value;
    const analisisCausa = document.getElementById("analisisCausaInput").value;
    const ocasionaCausa = document.getElementById("ocasionaCausaInput").value;

    const id = listaCausas.length;

    const nuevaCausa = { ...causa, causadoCausa, analisisCausa, ocasionaCausa, id };
    listaCausas.push(nuevaCausa);

    console.log("Lista causas:", listaCausas);

    const tbody = document.querySelector("#tablaCausas tbody");
    const noCausaRow = document.getElementById("noCausasRow");

    if (listaCausas.length === 0) {
        noCausaRow.style.display = "table-row";
      } else {
        //Limpia la tabla para evitar duplicados
        while (tbody.rows.length > 0) {
            tbody.deleteRow(0);
        }

        noCausaRow.style.display = "none";
      
        // Itera sobre cada elemento de la lista y agrega una fila a la tabla
        listaCausas.forEach(causa => {
          // Crea una nueva fila
          const tr = document.createElement("tr");
      
          // Crea las celdas y agrega el contenido      
          const tdCausado = document.createElement("td");
          tdCausado.textContent = causa.causadoCausa;

          const tdAnalisis = document.createElement("td");
          tdAnalisis.textContent = causa.analisisCausa;

          const tdOcasiona = document.createElement("td");
          tdOcasiona.textContent = causa.ocasionaCausa;

          const tdEliminar = document.createElement("td");
          const btnEliminar = document.createElement("span");
          btnEliminar.textContent = "Eliminar";
          btnEliminar.style.color = "red";
          btnEliminar.style.cursor = "pointer";
          btnEliminar.addEventListener("click", (event) => {
            eliminar(event, listaCausas, 'listaCausas');
          });
          tdEliminar.appendChild(btnEliminar);
      
          // Agrega las celdas a la fila
          tr.appendChild(tdCausado);
          tr.appendChild(tdAnalisis);
          tr.appendChild(tdOcasiona);
          tr.appendChild(tdEliminar);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("causadoCausaInput").value = '';
    document.getElementById("analisisCausaInput").value = '';
    document.getElementById("ocasionaCausaInput").value = '';
    //Desactivar boton
    document.getElementById('btnCausas').setAttribute("disabled", "true");
}

function saveSoluciones(){
    const cuandoImplemente = document.getElementById("cuandoImplementeSolucionInput").value;
    const entoncesEspera = document.getElementById("entoncesEsperaSolucionInput").value;
    const paraValidar = document.getElementById("paraValidarSolucionInput").value;

    const id = listaSoluciones.length;

    const nuevaSolucion = { ...solucion, cuandoImplemente, entoncesEspera, paraValidar, id };
    listaSoluciones.push(nuevaSolucion);

    console.log("Lista soluciones:", listaSoluciones);

    const tbody = document.querySelector("#tablaSoluciones tbody");
    const noSolucionesRow = document.getElementById("noSolucionesRow");

    if (listaSoluciones.length === 0) {
        noSolucionesRow.style.display = "table-row";
      } else {
        //Limpia la tabla para evitar duplicados
        while (tbody.rows.length > 0) {
            tbody.deleteRow(0);
        }

        noSolucionesRow.style.display = "none";
      
        // Itera sobre cada elemento de la lista y agrega una fila a la tabla
        listaSoluciones.forEach(solucion => {
          // Crea una nueva fila
          const tr = document.createElement("tr");
      
          // Crea las celdas y agrega el contenido      
          const tdCuandoImplemente = document.createElement("td");
          tdCuandoImplemente.textContent = solucion.cuandoImplemente;

          const tdEntoncesEspera = document.createElement("td");
          tdEntoncesEspera.textContent = solucion.entoncesEspera;

          const tdParaValidar = document.createElement("td");
          tdParaValidar.textContent = solucion.paraValidar;

          const tdEliminar = document.createElement("td");
          const btnEliminar = document.createElement("span");
          btnEliminar.textContent = "Eliminar";
          btnEliminar.style.color = "red";
          btnEliminar.style.cursor = "pointer";
          btnEliminar.addEventListener("click", (event) => {
            eliminar(event, listaSoluciones, 'listaSoluciones');
          });
          tdEliminar.appendChild(btnEliminar);
      
          // Agrega las celdas a la fila
          tr.appendChild(tdCuandoImplemente);
          tr.appendChild(tdEntoncesEspera);
          tr.appendChild(tdParaValidar);
          tr.appendChild(tdEliminar);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("cuandoImplementeSolucionInput").value = '';
    document.getElementById("entoncesEsperaSolucionInput").value = '';
    document.getElementById("paraValidarSolucionInput").value = '';
    //Desactivar boton
    document.getElementById('btnSoluciones').setAttribute("disabled", "true");
}

function eliminar(event, lista, nombreLista) {
    const span = event.target; // El <span> donde hiciste clic
    const tr = span.closest("tr"); // Buscar el <tr> más cercano
    const tbody = tr.parentElement; // Obtener el <tbody> padre
  
    // Obtener todas las filas del tbody (sin contar tfoot o encabezado)
    const filas = Array.from(tbody.querySelectorAll("tr"));
  
    // Determinar el índice de la fila a eliminar
    const index = filas.indexOf(tr);
  
    if (index > -1) {
      // Eliminar del array
      lista.splice(index, 1);
  
      // Eliminar la fila del DOM
      tr.remove();

      console.log("**** NOMBRE LISTA ****");
      console.log(datos[lista]);      
      console.log(datos[nombreLista]);  

      switch (nombreLista) {
        case "listaSintomas":            
            listaSintomas = lista;      
            datos[nombreLista] = listaSintomas;
            console.log("ListaSintomas sin eliminar:", lista);
            mostrarTfoot(listaSintomas, "noSintomasRow");
            break;
        case "listaPersonal":
            listaPersonal = lista;
            datos[nombreLista] = listaPersonal;
            console.log("ListaPersonal sin eliminar:", lista);
            mostrarTfoot(listaPersonal, "noPersonasRow"); 
            break;
        case "listaCausas":
            listaCausas = lista;
            datos[nombreLista] = listaCausas;
            console.log("ListaCausas sin eliminar:", lista);
            mostrarTfoot(listaCausas, "noCausasRow");
            break;
        case "listaSoluciones":
            listaSoluciones = lista;
            datos[nombreLista] = listaSoluciones;
            console.log("ListaSoluciones sin eliminar:", lista);
            mostrarTfoot(listaSoluciones, "noSolucionesRow");
            break;    
        default:
            break;
      }
      localStorage.setItem('formularioDatos', JSON.stringify(datos));
      guardarDatos();
    }
}

function mostrarTfoot(lista, nameTfoot){
    if(lista.length === 0){
        const noRow = document.getElementById(nameTfoot);
        if (noRow) {
            noRow.style.display = "table-row"; // Mostrar mensaje
        }
    } 
}

//-----------------------------------------------------------------------------------
// Cargar datos almacenados al iniciar la página
window.addEventListener('load', () => {   
    const datosGuardados = JSON.parse(localStorage.getItem('formularioDatos')) || {};
    
    //region Datos del usuario que solicita el mantenimiento
    document.getElementById('nombreUsuario').value = datosGuardados.nombreUsuario || "";
    document.getElementById('identificacionUsuario').value = datosGuardados.identificacionUsuario || "";
    document.getElementById('correoUsuario').value = datosGuardados.correoUsuario || "";
    document.getElementById('celularUsuario').value = datosGuardados.celularUsuario || "";
    document.getElementById('tipoUsuario').value = datosGuardados.tipoUsuario || "";
    document.getElementById('claseUsuario').value = datosGuardados.claseUsuario || "";
    //endregion
    document.getElementById('fechaHoraOcurrenciaSintomas').value = datosGuardados.fechaHoraOcurrenciaSintomas || "";
    document.getElementById('nombreProductoAfectado').value = datosGuardados.nombreProductoAfectado || "";
    document.getElementById('entornoError').value = datosGuardados.entornoError || "";
    document.getElementById('funcionalidadError').value = datosGuardados.funcionalidadError || "";
    document.getElementById('nombreVistaError').value = datosGuardados.nombreVistaError || "";
    document.getElementById('datosEntradaUsuario').value = datosGuardados.datosEntradaUsuario || "";
    document.getElementById('pasosAntesError').value = datosGuardados.pasosAntesError || "";
    document.getElementById('consecuenciaErrorNegocio').value = datosGuardados.consecuenciaErrorNegocio || "";
    document.getElementById('identificacionSolicitud').value = datosGuardados.consecuenciaErrorNegocio || "";
    document.getElementById('solucionNoError').value = datosGuardados.solucionNoError || "";
    document.getElementById('tipoMantenimientoIdentificado').value = datosGuardados.tipoMantenimientoIdentificado || "";
    document.getElementById('tipoIncidencia').value = datosGuardados.tipoIncidencia || "";
    //region Persona que autoriza el proceso de mantenimiento
    document.getElementById('nombrePersona').value = datosGuardados.nombrePersona || "";
    document.getElementById('correoPersona').value = datosGuardados.correoPersona || "";
    document.getElementById('cargoPersona').value = datosGuardados.cargoPersona || "";
    //endregion 
    document.getElementById('identificadorRequisitosError').value = datosGuardados.identificadorRequisitosError || "";
    document.getElementById('nombreUbicacionSoftwareInpactados').value = datosGuardados.nombreUbicacionSoftwareInpactados || "";
    document.getElementById('problemasReportadosAnteriormente').value = datosGuardados.problemasReportadosAnteriormente || "";
    document.getElementById('consecuenciasErrorComponentes').value = datosGuardados.consecuenciasErrorComponentes || "";
    document.getElementById('nivelPrioridad').value = datosGuardados.nivelPrioridad || "";
    document.getElementById('sugerenciasSolucionProblemaTemp').value = datosGuardados.sugerenciasSolucionProblemaTemp || "";
    document.getElementById('tiempoEstimadoSolucion').value = datosGuardados.tiempoEstimadoSolucion || "";
    document.getElementById('tipoMantenimientoCorrectivo').value = datosGuardados.tipoMantenimientoCorrectivo || "";
    document.getElementById('fechaHoraApertura').value = datosGuardados.fechaHoraApertura || "";
    document.getElementById('fechaHoraCierre').value = datosGuardados.fechaHoraCierre || "";
    document.getElementById('estadoSolicitud').value = datosGuardados.estadoSolicitud || "";
});

function guardarDatos() {
    datos.nombreUsuario = document.getElementById('nombreUsuario')?.value.trim() || "",
    datos.identificacionUsuario = document.getElementById('identificacionUsuario')?.value.trim() || "";
    datos.correoUsuario = document.getElementById('correoUsuario')?.value.trim() || "";
    datos.celularUsuario = document.getElementById('celularUsuario')?.value.trim() || "";
    datos.tipoUsuario = document.getElementById('tipoUsuario')?.value.trim() || "";
    datos.claseUsuario = document.getElementById('claseUsuario')?.value.trim() || "";

    datos.fechaHoraOcurrenciaSintomas = document.getElementById('fechaHoraOcurrenciaSintomas')?.value.trim() || "";
    datos.nombreProductoAfectado = document.getElementById('nombreProductoAfectado')?.value.trim() || "";
    datos.entornoError = document.getElementById('entornoError')?.value.trim() || "";
    datos.funcionalidadError = document.getElementById('funcionalidadError')?.value.trim() || "";
    datos.nombreVistaError = document.getElementById('nombreVistaError')?.value.trim() || "";
    datos.datosEntradaUsuario = document.getElementById('datosEntradaUsuario')?.value.trim() || "";
    datos.pasosAntesError = document.getElementById('pasosAntesError')?.value.trim() || "";
    datos.consecuenciaErrorNegocio = document.getElementById('consecuenciaErrorNegocio')?.value.trim() || "";
    datos.identificacionSolicitud = document.getElementById('identificacionSolicitud')?.value.trim() || "", //Identificacion de la solicitud debe ser automatic;
    datos.requiereAlgunTipoMantenimiento = document.querySelector('input[name="inlineRadioOptions"]:checked')?.value.trim() || "";
    datos.solucionNoError = document.getElementById('solucionNoError')?.value.trim() || "";
    datos.tipoMantenimientoIdentificado = document.getElementById('tipoMantenimientoIdentificado')?.value.trim() || "";
    datos.tipoIncidencia = document.getElementById('tipoIncidencia')?.value.trim() || "";

    datos.nombrePersona = document.getElementById('nombrePersona')?.value.trim() || "";
    datos.correoPersona = document.getElementById('correoPersona')?.value.trim() || "";
    datos.cargoPersona = document.getElementById('cargoPersona')?.value.trim() || "";

    datos.identificadorRequisitosError = document.getElementById('identificadorRequisitosError')?.value.trim() || "";
    datos.nombreUbicacionSoftwareInpactados = document.getElementById('nombreUbicacionSoftwareInpactados')?.value.trim() || "";
    datos.problemasReportadosAnteriormente = document.getElementById('problemasReportadosAnteriormente')?.value.trim() || "";
    datos.consecuenciasErrorComponentes = document.getElementById('consecuenciasErrorComponentes')?.value.trim() || "";
    datos.nivelPrioridad = document.getElementById('nivelPrioridad')?.value.trim() || "";
    datos.sugerenciasSolucionProblemaTemp = document.getElementById('sugerenciasSolucionProblemaTemp')?.value.trim() || "";
    datos.tiempoEstimadoSolucion = document.getElementById('tiempoEstimadoSolucion')?.value.trim() || "";
    datos.mantenimientoDiferente = document.querySelector('input[name="inlineRadioOptions2"]:checked')?.value.trim() || "";
    datos.listaMantenimientoDiferente = Array.from(document.querySelectorAll('#checkboxContainer input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    datos.tipoMantenimientoCorrectivo = document.getElementById('tipoMantenimientoCorrectivo')?.value.trim() || "";
    datos.fechaHoraApertura = document.getElementById('fechaHoraApertura')?.value.trim() || "";
    datos.fechaHoraCierre = document.getElementById('fechaHoraCierre')?.value.trim() || "";
    datos.estadoSolicitud = document.getElementById('estadoSolicitud')?.value.trim() || "";

    datos.listaPersonal = listaPersonal || [];
    datos.listaSintomas = listaSintomas || [];
    datos.listaCausas = listaCausas || [];
    datos.listaSoluciones = listaSoluciones || [];

    // Seleccionar el botón
    const botonDescargar = document.getElementById('descargarBtn');

    // Verificar si todos los campos obligatorios tienen datos
    if (
        datos.nombreUsuario!=="" && datos.identificacionUsuario!=="" && datos.correoUsuario!=="" && datos.celularUsuario!=="" && datos.tipoUsuario!=="" && datos.claseUsuario!=="" &&
        datos.nombreProductoAfectado!=="" && 
        datos.listaSintomas.length!==0 &&
        datos.entornoError!=="" &&
        datos.funcionalidadError!=="" &&
        datos.consecuenciaErrorNegocio!=="" &&
        datos.identificacionSolicitud!=="" &&
        datos.requiereAlgunTipoMantenimiento!=="" &&
        datos.tipoMantenimientoIdentificado!=="" &&
        datos.tipoIncidencia!=="" &&
        datos.listaPersonal.length!==0 &&
        datos.identificadorRequisitosError!=="" &&
        datos.listaCausas.length!==0 &&
        datos.nombreUbicacionSoftwareInpactados!=="" &&
        datos.consecuenciasErrorComponentes!=="" &&
        datos.nivelPrioridad!=="" &&
        datos.tiempoEstimadoSolucion!=="" &&
        datos.mantenimientoDiferente!=="" &&
        datos.tipoMantenimientoCorrectivo!=="" &&
        datos.listaSoluciones.length!==0 &&
        datos.fechaHoraApertura!=="" &&
        datos.fechaHoraCierre!=="" &&
        datos.estadoSolicitud!==""
    ) 
    {
        if(datos.mantenimientoDiferente === "Si" && datos.listaMantenimientoDiferente.length === 0){
            botonDescargar.setAttribute("disabled", "true"); // Deshabilitar botón
        } else {
            botonDescargar.removeAttribute("disabled"); // Habilitar botón
        }
    } else {
        botonDescargar.setAttribute("disabled", "true"); // Deshabilitar botón        
    }

    // Verificar si todos los campos de "Equipo responsable del desarrollo de la solución del error" tienen datos
    const botonPersonal = document.getElementById('btnPersonal');
    if(document.getElementById("nombreInput").value !== "" &&
       document.getElementById("correoInput").value !== ""
    ){
        botonPersonal.removeAttribute("disabled");
    }

    // Verificar si todos los campos de "Descripción e imagen de los síntomas observados cuando ocurre el error" tienen datos
    const botonSintomas = document.getElementById('btnSintomas');
    if(document.getElementById("cuandoIntentoSintomaInput").value !== "" &&
       document.getElementById("entoncesObservoSintomaInput").value !== "" &&
       document.getElementById("peroEsperabaSintomaInput").value !== "" &&
       document.getElementById("evidenciaSintomaInput").value !== ""
    ){
        botonSintomas.removeAttribute("disabled");
    }

    // Verificar si todos los campos de "Descripción detallada de las causas del error que ocasiona los síntomas" tienen datos
    const botonCausas = document.getElementById('btnCausas');
    if(document.getElementById("causadoCausaInput").value !== "" &&
       document.getElementById("analisisCausaInput").value !== "" &&
       document.getElementById("ocasionaCausaInput").value !== ""
    ){
        botonCausas.removeAttribute("disabled");
    }

    // Verificar si todos los campos de "Solución al error" tienen datos
    const botonSoluciones = document.getElementById('btnSoluciones');
    if(document.getElementById("cuandoImplementeSolucionInput").value !== "" &&
       document.getElementById("entoncesEsperaSolucionInput").value !== "" &&
       document.getElementById("paraValidarSolucionInput").value !== ""
    ){
        botonSoluciones.removeAttribute("disabled");
    }

    // Guardar en localStorage
    localStorage.setItem('formularioDatos', JSON.stringify(datos));
}

// Escuchar cambios en los campos
window.addEventListener('DOMContentLoaded', () => {
    // Borrar datos guardados en el localStorage al cargar la página
    localStorage.removeItem('formularioDatos');

    // Limpiar todos los campos del formulario
    document.querySelectorAll('#miFormulario input, #miFormulario textarea, #miFormulario select, #miFormulario button, #miFormulario span')
        .forEach(campo => {
            if (campo.type === "checkbox" || campo.type === "radio") {
                campo.checked = false; // Desmarcar checkboxes y radiobuttons
            } else {
                campo.value = ""; // Limpiar inputs y selects
            }
            
            // Agregar eventos para guardar los datos en localStorage
            campo.addEventListener('input', guardarDatos);
            campo.addEventListener('change', guardarDatos);
            campo.addEventListener('click', guardarDatos);
        });

    // Deshabilitar el botón de descarga hasta que los datos sean completados
    document.getElementById('descargarBtn').setAttribute("disabled", "true");
    document.getElementById('btnPersonal').setAttribute("disabled", "true");
    document.getElementById('btnSintomas').setAttribute("disabled", "true");
    document.getElementById('btnCausas').setAttribute("disabled", "true");
    document.getElementById('btnSoluciones').setAttribute("disabled", "true");

    // Limpiar listas de datos
    listaPersonal = [];
    listaSintomas = [];
    listaCausas = [];
    listaSoluciones = [];
});

function descargarJSON() {
    const datos = localStorage.getItem('formularioDatos');
    if (!datos) {
        alert("No hay datos guardados para descargar.");
        return;
    }
    const blob = new Blob([datos], { type: 'application/json' });
    const enlace = document.createElement('a');
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'nombre-apellido-#solicitud.json';
    enlace.click();

    // Borrar datos del localStorage después de la descarga
    localStorage.removeItem('formularioDatos');

    // Limpiar los campos del formulario después de borrar localStorage
    document.querySelectorAll('#miFormulario input, #miFormulario textarea, #miFormulario select')
        .forEach(campo => {
            if (campo.type === "checkbox" || campo.type === "radio") {
                campo.checked = false; // Desmarcar checkboxes y radiobuttons
            } else {
                campo.value = ""; // Limpiar inputs y selects
            }
        });  

    // Deshabilitar el botón de descarga hasta que los datos sean completados
    document.getElementById('descargarBtn').setAttribute("disabled", "true");
    document.getElementById('btnPersonal').setAttribute("disabled", "true");
    document.getElementById('btnSintomas').setAttribute("disabled", "true");
    document.getElementById('btnCausas').setAttribute("disabled", "true");
    document.getElementById('btnSoluciones').setAttribute("disabled", "true");

    // Limpiar el contenido de las tablas
    limpiarTabla("tablaPersonal", "noPersonasRow");
    limpiarTabla("tablaSintomas", "noSintomasRow");
    limpiarTabla("tablaCausas", "noCausasRow");   
    limpiarTabla("tablaSoluciones", "noSolucionesRow");

    // Limpiar las listas de las tablas
    listaPersonal = [];
    listaSintomas = [];
    listaCausas = [];
    listaSoluciones = [];

    // Se oculta la seleccion de checkbox para "¿La solucion desencadena una solucion diferente al mantenimiento correctivo?"
    const checkboxContainer = document.getElementById("checkboxContainer");
    checkboxContainer.style.display = "none";
}

function limpiarTabla(idTabla, noRowId) {
    const tabla = document.getElementById(idTabla);
    if (tabla) {
        const tbody = tabla.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = ""; // Eliminar todas las filas
        }
        // Obtener la fila vacía del <tfoot>
        const noRow = document.getElementById(noRowId);
        if (noRow) {
            noRow.style.display = "table-row"; // Mostrar mensaje
        }
    }
}