
// Defino la clase Club y el metodo para calcular el precio final para ver partidos por cantidad de hinchas.
class Club {
    constructor(equipo, precioBase) {
        this.equipo = equipo;
        this.precioBase = precioBase;
    }
    calcularPrecio(CantidadDeHinchas, CantidadDePartidos) {
        let incremento = 0;

        switch (true) {
            case CantidadDePartidos === 4:
                incremento = 4;
                break;
            case CantidadDePartidos >= 3:
                incremento = 3;
                break;
            case CantidadDePartidos >= 2:
                incremento = 2;
                break;
            case CantidadDePartidos >= 1:
                incremento = 1;
                break;
            default:
                incremento = 0;
                break;
        }
        const precioFinal = this.precioBase * CantidadDeHinchas * (incremento);
        return precioFinal;
    }
}

// Crear un array de objetos Club
const Clubs = [
    new Club("River", 5000),
    new Club("Boca", 4500),
    new Club("Independiente", 3900),
    new Club("Racing", 3500),
    new Club("San Lorenzo", 3000),
    new Club("Velez", 3300)
];

// Ingreso año de nacimiento
let anioNacimiento;

do {
    anioNacimiento = Number(prompt("Ingrese su año de nacimiento:"));
} while (anioNacimiento <= 0 || !Number.isInteger(anioNacimiento));

// Edad del usuario
let fechaActual = new Date();
let anioActual = fechaActual.getFullYear();
let edad = anioActual - anioNacimiento;

if (edad < 18) {
    alert(`Lo siento, ud tiene ${edad} años no esta autorizado para la comrpa de esta experiencia, te invitamos a que realices un nuevo intento con un mayor de edad.`);
} else {
    alert(`Hola, estas a punto de simular la compra de entradas para vivir la experiencia futbolistica mas hermosa del mundo.`);

    let nombre, equipo, CantidadDeHinchas, CantidadDePartidos;
    do {
        nombre = prompt("Por favor, ingrese su nombre:").toUpperCase();
    } while (nombre === "");

    do {
        equipo = prompt("Ingrese el equipo de futbol que desea conocer (River, Boca, Independiente, Racing, San Lorenzo o Velez):").toUpperCase();
    } while (equipo == "River" && equipo == "Boca" && equipo == "Independiente" && equipo == "Racing" && equipo == "San Lorenzo" && equipo == "Velez");

    do {
        CantidadDeHinchas = Number(prompt("Ingrese la cantidad de hinchas:"));
    } while (isNaN(CantidadDeHinchas) || CantidadDeHinchas < 1 || !Number.isInteger(CantidadDeHinchas));

    do {
        CantidadDePartidos = Number(prompt("Ingrese la cantidad de partidos deseados:"));
    } while (isNaN(CantidadDePartidos) || CantidadDePartidos < 1 || !Number.isInteger(CantidadDePartidos));

    // Busco el objeto Club con find()
    const ClubSeleccionado = Clubs.find(Club => Club.equipo.toUpperCase() === equipo);

    // Calculo el precio final y renderizo
    if (ClubSeleccionado) {
        const precioFinal = ClubSeleccionado.calcularPrecio(CantidadDeHinchas, CantidadDePartidos);
        alert(` Excelente ${nombre}, el precio final de su experiencia para ver a ${equipo} por ${CantidadDeHinchas} hinchas a ${CantidadDePartidos} partidos es de ARS $${precioFinal.toLocaleString('es-AR')}.`);

        document.write(` <h1> Estimado/a ${nombre}, el precio final de su experiencia para ver a ${equipo} por ${CantidadDeHinchas} hinchas a ${CantidadDePartidos} partidos es de ARS $${precioFinal.toLocaleString('es-AR')}. </h1>`);

    } else {
    }

    // Utilizo un map() para obtener un array con los precios finales de cada Club para el % aplicable al usuario por la cantidad de partido seleccionados mas hinchas
    const preciosFinales = Clubs.map(Club => Club.calcularPrecio(CantidadDeHinchas, CantidadDePartidos));

    // Muestro Array con precios finales por Consola
    console.log(preciosFinales);

}