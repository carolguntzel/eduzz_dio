var old = function(a, b) {
    return a + b
}

console.log(sum(5, 5))

// Arrow function:

var sum = (a, b) => a + b;
console.log(sum(5, 5))

// Criar objetos:

var createObject = () => ({teste: 123});

console.log(createObject());

// Criar objetos a partir de uma função construtora:

function Car() {
    this.foo = 'bar';
}

console.log(new Car());

//Multiplicação com ECMA6 quando o segundo valor não é definido:
function multiply(a,b = 1) {
    return a * b
}

console.log(multiply(5))

//Número randômico:
function randomNumber(){
    return Math.random()*10;
}

console.log(randomNumber())

//Multiplicação com número randômico
function randomNumber(){
    return Math.random()*10;
}

function multiply(a,b = randomNumber()) {
    return a * b;
} 

console.log(multiply(5));
