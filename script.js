const contenido = document.querySelector("#name")
const btnRegistrar = document.querySelector("#registrar")

const listadoTareas = document.querySelector("#tareas-list")
const db = window.localStorage;

btnRegistrar.onclick = () => {
  let tarea = {
    contenido: contenido.value,
    id: Math.random(1,100),
  }
  guardarTarea(db, tarea)
}
cargarTareas(db, listadoTareas)