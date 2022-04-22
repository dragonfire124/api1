const guardarTarea = (db, tarea) => {
  db.setItem(tarea.id ,JSON.stringify(tarea))
}

const cargarTareas = (db, parentNode) => {
  let claves = Object.keys(db)
  for(clave of claves){
    let tarea = JSON.parse(db.getItem(clave))
    crearTarea(parentNode, tarea, db)
  }
}

const crearTarea = (parentNode, tarea, db) => {
  
  let divTarea = document.createElement("div")
  let divCard = document.createElement("div")
  let divForm = document.createElement("div")
  let divEdityDelete = document.createElement("div")
  let spanContenido = document.createElement("span")
  let aEditar = document.createElement("a")
  let aDelete = document.createElement("a")

  spanContenido.innerHTML = tarea.contenido
  aEditar.innerHTML = "Editar"
  aDelete.innerHTML = "Delete"

  divCard.classList.add("card-body")
  divForm.classList.add("form-control","d-flex","justify-content-between")
  aEditar.classList.add("btn","btn-success")
  aDelete.classList.add("btn","btn-danger")
  
  divTarea.appendChild(divCard)
  divCard.appendChild(divForm)
  divForm.appendChild(spanContenido)
  divForm.appendChild(divEdityDelete)
  divEdityDelete.appendChild(aEditar)
  divEdityDelete.appendChild(aDelete)
  
  parentNode.appendChild(divTarea);

  aDelete.onclick = () => {
    db.removeItem(tarea.id)
    divTarea.remove();
  }

  aEditar.onclick = () => {
  let editarse = prompt("Editando tarea:");
  tarea.contenido = editarse
  guardarTarea(db, tarea)
  spanContenido.textContent = editarse;
  }
}
