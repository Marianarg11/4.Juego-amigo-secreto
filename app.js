let amigos = [];

function agregarAmigo() {
const inputAmigo = document.getElementById("amigo");
const nombreAmigo = inputAmigo.value.trim();

if (nombreAmigo === "") {
    alert("Por favor, inserte un Nombre Amigo");
    return;
}

if (amigos.includes(nombreAmigo)) {
    alert("Este nombre ya está en la lista.");
    return;
}

amigos.push(nombreAmigo);
actualizarLista();

inputAmigo.value = "";
inputAmigo.focus();
}

function actualizarLista() {
const listaAmigoUl = document.getElementById("listaAmigos")
listaAmigoUl.innerHTML = "";

amigos.forEach(amigo => {
const listaItem = document.createElement("li");
listaItem.textContent = amigo;
listaAmigoUl.appendChild(listaItem);
});
document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo() {
if(amigos.length === 0) {
    alert("No hay amigos para sortear. Agrega nombre primero.");
return;
}

const indiceAleatorio = Math.floor(Math.random() * amigos.length);
const amigoSorteado = amigos[indiceAleatorio];

const resultadoUl = document.getElementById("resultado");
resultadoUl.innerHTML =  `<li>${amigoSorteado}</li> `;

}

