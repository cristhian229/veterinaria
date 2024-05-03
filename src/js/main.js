const main = document.querySelector("main")
const contenedor = document.querySelector("#contenedor-cards");

main.classList.add("d-flex","flex-wrap","gap-5","justify-content-center")

console.log(main)
console.log("")
console.log(main.innerHTML)
console.log(main.outerHTML)

console.table(mascotasVeterinario)

mascotasVeterinario.forEach(mascota => {
  console.log(mascota)
});

mascotasVeterinario.forEach(mascota => {
  contenedor.innerHTML += 
  `<div class="card" style="width: 18rem;">
  <img src=${mascota.link} class="card-img-top w-100 h-100" alt="...">
  <div class="card-body">
    <h5 class="card-title">Nombre: ${mascota.nombreMascota} </h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Especie: ${mascota.especieMascota} </li>
    <li class="list-group-item">Raza: ${mascota.razaMascota} </li>
    <li class="list-group-item">Edad: ${mascota.edadMascota}</li>
    <li class="list-group-item">Peso: ${mascota.pesoMascota}</li>
    <li class="list-group-item">Estado: ${mascota.estadoMascota}</li>
    <li class="list-group-item">Dueño: ${mascota.propietarioMascota}</li>
  </ul>
</div>`
});



