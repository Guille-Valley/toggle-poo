document.getElementById('boton').addEventListener('click', function () {
    this.classList.toggle('agrandar');
});




class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
}
let cont = 0;
document.getElementById('enviar').addEventListener('click', evt => {
    evt.preventDefault(); // Evita la carga de la página al mandar el formulario.

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let nuevaPersona = new Persona(nombre, edad);

    let personas = document.getElementById('personas');

    personas.innerHTML += `<li>${nuevaPersona.getNombre()} | ${nuevaPersona.getEdad()}</li>`;

    localStorage.setItem('Persona ' + cont++ + ':', 'Nombre: ' + nuevaPersona.getNombre() + '. Edad: ' + nuevaPersona.getEdad());

console.log(nuevaPersona);

});

