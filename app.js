let nombreAmigos = [];

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre");
    } else {
        nombreAmigos.push(nombre);
        actualizarLista();
    }
    limpiarInput();
}

function limpiarInput() {
    let limpiar = document.querySelector('#amigo').value = '';
    return;
}

function actualizarLista() {
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = ""; 
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombreAmigos[i];
        listaElementos.appendChild(li);
    }
}

function sortearAmigo() {
    if (nombreAmigos.length < 2) {
        alert("Por favor, agrega mas nombres de amigos.");
        return;
    }
    let listaElementos = document.getElementById("listaAmigos");
    listaElementos.innerHTML = "";
    let indice = Math.floor(Math.random() * nombreAmigos.length);
    let li = document.createElement("li");
        li.textContent = alert("Tu amigo secreto es: ", nombreAmigos[indice]);
        listaElementos.appendChild(li);
}



