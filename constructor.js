// create a empty object

var newObject = {};

var newObject2 = Object.create(Object.prototype);

var newObject3 = new Object();

// there are four ways in which keys and values can then be asigned to an Object

// 1. dot sintax

newObject.someMonkey = "Hello world";

// get properties

var value = newObject.someMonkey;

// 2. square brackets sintax
 newObject2["someMonkey"] = "Hello world 2";

 var value2 = newObject2["someMonkey"];

// 4. Object.defineProperties

// set properties

Object.defineProperties(newObject3, {
  "someKey": {
    value: "Hello world",
    writable: true
  },
  "anotherKey": {
    value: "hi",
    writable: true
  }
});


// BASIC CONSTRUCTOR

function Person (dni, firstName, SecondName) {
  this.dni = dni;
  this.firstName = firstName;
  this.SecondName = SecondName;

  this.toString = function () {
    return this.dni + " " + this.firstName + " " + this.SecondName;
  };
}

var personOne = new Person(70439598, "Bra", "Ja");
console.log(personOne.toString());

// CONSTRUCTOR WITH PROTOTYPES

function Car(color, placa) {
  this.color = color;
  this.placa = placa;

}

Car.prototype.toString = function () {
  return this.color + " " + this.placa + " ";
};

// Usage:

var civic = new Car( "blue", 213212 );
var mondeo = new Car( "red", 243234 );

console.log( civic.toString() );
console.log( mondeo.toString() );
