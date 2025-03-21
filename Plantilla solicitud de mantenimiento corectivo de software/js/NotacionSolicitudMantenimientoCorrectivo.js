// declaracion de variables
const personal = {
    nombre: "",
    correo: "",
};

const sintoma = {
    cuandoIntento: "",
    entoncesObservo: "",
    peroEsperaba: "",
    evidencia: "",
};

const causa = {
    causadoCausa: "",
    analisisCausa: "",
    ocasionaCausa: "",
};

const solucion = {
    cuandoImplemente: "",
    entoncesEspera: "",
    paraValidar: "",
};

const listaPersonal = [];
const listaSintomas = [];
const listaCausas = [];
const listaSoluciones = [];

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

    console.log("Nombre:", nombre);
    console.log("Correo:", correo);

    const nuevoPersonal = { ...personal, nombre, correo };
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
      
          // Agrega las celdas a la fila
          tr.appendChild(tdNombre);
          tr.appendChild(tdCorreo);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("nombreInput").value = '';
    document.getElementById("correoInput").value = '';
}

function saveSintomas(){
    const cuandoIntento = document.getElementById("cuandoIntentoSintomaInput").value;
    const entoncesObservo = document.getElementById("entoncesObservoSintomaInput").value;
    const peroEsperaba = document.getElementById("peroEsperabaSintomaInput").value;
    const evidencia = document.getElementById("evidenciaSintomaInput");

    const file = evidencia.files[0];
    const imagen = file.name;

    console.log("cuandoIntento:", cuandoIntento);
    console.log("entoncesObservo:", entoncesObservo);
    console.log("peroEsperaba:", peroEsperaba);
    console.log("evidenciaSintomaInput:", imagen);

    const nuevoSintoma = { ...sintoma, cuandoIntento, entoncesObservo, peroEsperaba, imagen };
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
          tdEvidencia.textContent = sintoma.imagen;
      
          // Agrega las celdas a la fila
          tr.appendChild(tdCuandoIntento);
          tr.appendChild(tdEntoncesObservo);
          tr.appendChild(tdPeroEsperaba);
          tr.appendChild(tdEvidencia);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("cuandoIntentoSintomaInput").value = '';
    document.getElementById("entoncesObservoSintomaInput").value = '';
    document.getElementById("peroEsperabaSintomaInput").value = '';
    document.getElementById("evidenciaSintomaInput").value = '';
}

function saveCausas(){
    const causado = document.getElementById("causadoCausaInput").value;
    const analisis = document.getElementById("analisisCausaInput").value;
    const ocasiona = document.getElementById("ocasionaCausaInput").value;

    console.log("causadoCausaInput:", causado);
    console.log("analisisCausaInput:", analisis);
    console.log("ocasionaCausaInput:", ocasiona);

    const nuevaCausa = { ...causa, causado, analisis, ocasiona };
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
          tdCausado.textContent = causa.causado;

          const tdAnalisis = document.createElement("td");
          tdAnalisis.textContent = causa.analisis;

          const tdOcasiona = document.createElement("td");
          tdOcasiona.textContent = causa.ocasiona;
      
          // Agrega las celdas a la fila
          tr.appendChild(tdCausado);
          tr.appendChild(tdAnalisis);
          tr.appendChild(tdOcasiona);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("causadoCausaInput").value = '';
    document.getElementById("analisisCausaInput").value = '';
    document.getElementById("ocasionaCausaInput").value = '';
}

function saveSoluciones(){
    const cuandoImplemente = document.getElementById("cuandoImplementeSolucionInput").value;
    const entoncesEspera = document.getElementById("entoncesEsperaSolucionInput").value;
    const paraValidar = document.getElementById("paraValidarSolucionInput").value;

    console.log("cuandoImplementeSolucionInput:", cuandoImplemente);
    console.log("entoncesEsperaSolucionInput:", entoncesEspera);
    console.log("paraValidarSolucionInput:", paraValidar);

    const nuevaSolucion = { ...solucion, cuandoImplemente, entoncesEspera, paraValidar };
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
      
          // Agrega las celdas a la fila
          tr.appendChild(tdCuandoImplemente);
          tr.appendChild(tdEntoncesEspera);
          tr.appendChild(tdParaValidar);
      
          // Agrega la fila al tbody
          tbody.appendChild(tr);
        });
    }

    //limpiar los input
    document.getElementById("cuandoImplementeSolucionInput").value = '';
    document.getElementById("entoncesEsperaSolucionInput").value = '';
    document.getElementById("paraValidarSolucionInput").value = '';
}