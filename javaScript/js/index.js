let a = 3;
let b = 4;

console.log(`Exponente base 2 a la cuarta potencia es: ${a**b}`);


// Ejercicio 1. Verificar si el valro de la variable es número par o impar 


let numero = 10;

// Utilizar valor ternario

const esPar = numero => (numero % 2 === 0) ? `El número ${numero} es par` : `El número ${numero} es impar`;

console.log(esPar(7));
console.log(esPar(4));

// Una persona es mayor de edad 


const esAdulto = (edad) => {

    if (edad <= 0 || isNaN(edad)) {
        console.log('Edad Incorrecta');
    }
    else if(edad >= 18){
        console.log(`Tienes ${edad} eres mayor de edad`);
    } else {
        console.log(`Tienes ${edad} eres menor de edad`);
    }
}

esAdulto(19);
esAdulto(7);
// Solucionar 
esAdulto(-10);
esAdulto('19x');


// Ejercicio estaciones del año 

let mes = 4;



// Ejercicio con hora del día saludos diferentes 

let hora = 27;

if ( hora >=6  && hora < 12) {
    console.log('Buenos días');
    
} else if (hora >=12 && hora < 18) {
    console.log('Buenas tardes');
} else if (hora >= 18 && hora < 24) {
    console.log('Buenas noches');
} else if (hora >= 0 && hora < 6) {
    console.log('No molestar');
} else {
    console.log('Hora no existente');
}

// Imprimir ciclos pares 


const esPar = numero => (numero % 2 === 0) ? true : false;

const pares = elementos => {
    for (let i = 0; i <= elementos; i++) {
        if (esPar(i)) {
            console.log(i);
            i++;
        }
        else {
            i++;
        }
    }
}
pares(20);


// break finaliza el bloque de código
// Continue va a la siguiente iteración

// Etiquetas en javaScript es una mala práctica 



const esPar = numero => (numero % 2 === 0) ? true : false;

const pares = elementos => {
    inicio:
    for (let i = 0; i <= elementos; i++) {
        if (esPar(i)) {
            console.log(i);
            i++;
            break inicio;
        }
        else {
            i++;
        }
    }
    console.log('Holi');
}
pares(20);

const autos = ['BMW','Mercedes Benz', 'Volvo'];
autos.push('Audi');

autos.map(aux => console.log(aux));

// Agregar elementos mediante el metodo push

// Funciones expresivas se definen mediante tipos de variables

// Funciones que se llaman así misma, pero solo 1 sola vez pero ya no puede ser reutilizada
// (    funcion)(llamda a función){}
// Funciones como objetos, las funciones son objetos se pueden usar propiedades y métodos 

// Parametros y argumentps 
// Parametros. Lista que valores que va a recibir una función 
// Argumentos. Son los valores que se pasan a la función

// Para acceder a los argumentos se puede usar las propiedades

const suma = function(a , b) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a+b;
}

const resultado = suma(5,7);
console.log(resultado);


// Sumar todos los argumentos 
const resultado = sumarTodo(5,4,13,10,9,10);
function sumarTodo() {
    let suma =0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}
console.log(resultado);

// Paso por valor, valores primitivos 
// Pasos por referencia -> valor no primitivo objetos

let x = 10;

function cambiaValor(a) {
    a = 20;
}
cambiaValor(x);
console.log(x);

// Objetos {} 
// Agregar prpiedades objeto.elemento = valor
// Eliminar delete persona.argumento

// Mostrar los obejetos 

// forin
// Saca los valores del objeto 

// Object.value()
// Se debe definir una variable donde se almacenen los valores 
//  let persona = Object.values(nombreObjeto);

// En formato JSON
// Se tiene que definir la variable 
//  let ejemplo = JSON.stringify (nombreObjeto);

// Conceptos de get o set (acceder y modificar)

// GET Obtiene información del objeto 
// SET Modifica información del objeto 
// Estos ambos solo funcionan en las funciones

// Constructores de objetos

function Persona(nombre, apellido, correo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.nombreCompleto = function() {
        return `${this.nombre} ${this.apellido}`;
    }
}

// Persona.prototype.tel='4455775544'; se define de forma global
// Como si fuera un valor por defecto

let padre = new Persona ('Juan', 'Perez', 'correo@gmail.com');
console.log(padre);

let madre = new Persona('Karla', 'Vazquez', 'karla@gmail.com');

// Agregar métodos aun método constructor de objetos


// Personas con new pero hay otros metodos 

// Prototype (introducción)
// Funciona para agregar un elemento a todos los elementos (para hacer modificaciones)
// Atributos y metodos 

// Método call

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function () {
        return `${this.nombre} ${this.apellido}`;
    }
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
// Uso de call para usar el método nombre completo con los datos de persona 2
console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));
// Con el uso de calla se puede utilizar métodos de otros objetos

// Método call con parametros 
// Objeto 1
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo ='C.', tel='N/A') {
        return `Nombre: ${this.nombre} ${this.apellido} Tel: ${tel} Titulo: ${titulo}`;
    }
}
// Objeto 2
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
// Llamando un método de objeto1 con call para utilizarlo en el objeto2
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '33223322'));
// Llamando al objeto 1 solamente
console.log(persona1.nombreCompleto());

// Método apply, es equivalente a call pero sin parametros

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    // nombreCompleto: function () {
    nombreCompleto: function (titulo, tel) {
        // return `Nombre: ${this.nombre} ${this.apellido}`;
        return `Nombre: ${this.nombre} ${this.apellido} Tel: ${tel} Titulo: ${titulo}`;
    }
}
let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}

// Llamada de ejempolo funciona como call
// console.log(persona1.nombreCompleto());
// console.log(persona1.nombreCompleto.apply(persona2));

/* Llamando un método de objeto1 con apply para utilizarlo en el objeto2 a diferencia de call este es necesario que se pase primero como un arreglo por lo que primero se define el arreglo
console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '33223322'));
*/
let arreglo = ['Ing.','4455778899'];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));

// Llamando al objeto 1 solamente
console.log(persona1.nombreCompleto());

// Clases Creación de las clases 
// 
/*
Las clases son plantillas que queremos que tengan los objetos:
Nombre -> Nombre de la clase (Tiene que iniciar con mayuscula)
Atributos -> Caracteristicas
Métodos -> Acciones
*/

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
// Creación de la instancia de clase u objeto
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let uriel = new Persona('Uriel', 'Sanjuán');
console.log(uriel);

// Método get

// Definición de la clase
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // Definiendo los metodos GET
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    // Definiendo los métodos SET
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

// Definiendo al objeto 
let uriel = new Persona('Uriel', 'Sanjuan');
console.log(uriel.nombre);
uriel.nombre = 'Zoe';
console.log(uriel.nombre);
// Hoisting no aplica en las clases, a diferencia de las funciones




// Herencia en JavaScript 
// Definición de la persona padre 
class Persona {
    constructor(nombre, apellido) {
        this.Nombre = nombre;
        this.Apellido = apellido;
    }
    // Definiendo los metodos GET
    get nombre() {
        return this.Nombre;
    }
    get apellido() {
        return this.Apellido;
    }
    // Definiendo los métodos SET
    set nombre(nombre) {
        this.Nombre = nombre;
    }
    set apellido(apellido) {
        this.Apellido = apellido;
    }
    // Se define un método en la clase padre y se usará en la clase hija
    nombreCompleto(){
        return `${this.Nombre} ${this.Apellido}`;
    }
}

// Clase hija 

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this.Departamento = departamento;
    }
    get departamento() {
        return this.Departamento;
    }
    set departamento(departamento) {
        this.Departamento = departamento;
    }
}
// Llamando a la clase hija con herencia
let empleado1 = new Empleado('Carlos', 'Ramirez', 'Sistemas');
console.log(empleado1);
// Llamando a métodos de la clase padre 
console.log(empleado1.apellido);
console.log(empleado1.nombre);
// Llamando al método de la case padre 
console.log(empleado1.nombreCompleto());




// Sobre escritura en JavaScript
class Persona {
    constructor(nombre, apellido) {
        this.Nombre = nombre;
        this.Apellido = apellido;
    }
    get nombre() {
        return this.Nombre;
    }
    get apellido() {
        return this.Apellido;
    }
    set nombre(nombre) {
        this.Nombre = nombre;
    }
    set apellido(apellido) {
        this.Apellido = apellido;
    }
    nombreCompleto(){
        return `${this.Nombre} ${this.Apellido}`;
    }
}
// Clase hija 
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this.Departamento = departamento;
    }
    get departamento() {
        return this.Departamento;
    }
    set departamento(departamento) {
        this.Departamento = departamento;
    }
    // Sobreescritura
    nombreCompleto() {
        // return `${this.nombre} ${this.apellido} ${this.departamento}`
        // Optimizando
        return `${super.nombreCompleto()} ${this.Departamento}`;
    }
}
// Creando al nuevo empleado
let empleado1 = new Empleado('Valeria', 'Ramirez', 'Sistemas');

console.log(empleado1.nombreCompleto());


// Manejo de objetos para manejo de métodos 
class Persona {
    constructor(nombre, apellido) {
        this.Nombre = nombre;
        this.Apellido = apellido;
    }
    get nombre() {
        return this.Nombre;
    }
    get apellido() {
        return this.Apellido;
    }
    set nombre(nombre) {
        this.Nombre = nombre;
    }
    set apellido(apellido) {
        this.Apellido = apellido;
    }
    nombreCompleto(){
        return `${this.Nombre} ${this.Apellido}`;
    }
        // Sobreescribiendo métodos 
    toString(){
        // Utilización de polimorfismo (multiples formas en tiempo de ejecución)
        // El método se aplica si es el padre o el hijo
        return this.nombreCompleto();
    }
}
// Clase hija 
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this.Departamento = departamento;
    }
    get departamento() {
        return this.Departamento;
    }
    set departamento(departamento) {
        this.Departamento = departamento;
    }
    nombreCompleto() {
        return `${super.nombreCompleto()} ${this.Departamento}`;
    }
}
let empleado1 = new Empleado('Valeria', 'Ramirez', 'Sistemas');
console.log(empleado1.nombreCompleto());
// Polimorfismo se llama la segunda función definida en el hijo
console.log(empleado1.toString());

let uriel = new Persona('Uriel', 'Sanjuan');
console.log(uriel.toString());

// Métodos estaticos 
// -------------------------------------------------------------------

class Persona {
    constructor(nombre, apellido) {
        this.Nombre = nombre;
        this.Apellido = apellido;
    }
    get nombre() { return this.Nombre; }
    get apellido() { return this.Apellido; }
    set nombre(nombre) { this.Nombre = nombre; }
    set apellido(apellido) { this.Apellido = apellido; }
    nombreCompleto(){ return `${this.Nombre} ${this.Apellido}`; }
    toString(){ return this.nombreCompleto(); }
    // Método estático static
    // El método estático solo se puede llamar desde la clase no desde un objeto
    static saludar(){ console.log('Hola soy estático');}
    // Pero si se puede usar objetos
    static saludar2(persona) { console.log(persona.nombre);}
}
// Clase hija 
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this.Departamento = departamento;
    }
    get departamento() { return this.Departamento; }
    set departamento(departamento) { this.Departamento = departamento; }
    nombreCompleto() { return `${super.nombreCompleto()} ${this.Departamento}`; }
}
let empleado1 = new Empleado('Valeria', 'Ramirez', 'Sistemas');
let uriel = new Persona('Uriel', 'Sanjuan');

// uriel.saludar(); //-> error porque es una clase
// Solo se llama desde la clase
Persona.saludar();
// Un método estatico si puede recibir objetos
Persona.saludar2(uriel);
// los métodos estáticos se heredan a los nuevas clases hijas
Empleado.saludar();
Empleado.saludar2(empleado1);

// Valores estáticos 

class Persona {
    // Valor estático, solo lo podrá usar las clases
    static contarObjetosPersona = 0;
    constructor(nombre, apellido) {
        this.Nombre = nombre;
        this.Apellido = apellido;
    }
    get nombre() { return this.Nombre; }
    get apellido() { return this.Apellido; }
    set nombre(nombre) { this.Nombre = nombre; }
    set apellido(apellido) { this.Apellido = apellido; }
    nombreCompleto(){ return `${this.Nombre} ${this.Apellido}`; }
    toString(){ return this.nombreCompleto(); }
    static saludar(){ console.log('Hola soy estático');}
    static saludar2(persona) { console.log(persona.nombre);}
}
// Clase hija 
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this.Departamento = departamento;
    }
    get departamento() { return this.Departamento; }
    set departamento(departamento) { this.Departamento = departamento; }
    nombreCompleto() { return `${super.nombreCompleto()} ${this.Departamento}`; }
}
let empleado1 = new Empleado('Valeria', 'Ramirez', 'Sistemas');
let uriel = new Persona('Uriel', 'Sanjuan');





