//Array para agregar amigos
let amIgos = [];

//1. Función para agregar amigos
function agregarAmigo(){
  const registrarAmigo = document.getElementById("amigo");
  const partiCipante = registrarAmigo.value.trim();
      
//Validar que el registro no esté vacío
  if (partiCipante === ""){
    alert("Por favor, escriba un nombre");
    return;
  }

//Validar que el amigo no esté repetido
if (amIgos.includes(partiCipante)){
  alert(`El nombre "${partiCipante}" ya fue agregado a la lista de amigos`);
  return;
}

//Agregar el amigo a la lista de amigos
  amIgos.push(partiCipante);

//Limpiar el input
  registrarAmigo.value = "";
  
//Actualizar la lista en el HTML
actualizarLista();

}

//2. Función para actualizar la lista de amigos
function actualizarLista(){
  const listaAmigos = document.getElementById("listaAmigos");

  //Limpiar contenido de la lista
  listaAmigos.innerHTML = "";

  //Recorrer el array de amigos y agregar cada uno a la lista
  for(let i = 0; i < amIgos.length; i++){
    const li = document.createElement("li");
    li.textContent = amIgos[i];
    listaAmigos.appendChild(li);
};
}

//3. Función para sortear un amigo
function sortearAmigo(){
  //Validar que haya amigos para sortear
  if(amIgos.length === 0){
    alert("Por favor, agrega amigos para sortear");
    return;
  }

  //Obtener un amigo aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amIgos.length);

  //Mostrar el amigo sorteado
  const amigoSorteado = amIgos[indiceAleatorio];

  //Actualizar el HTML
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}


