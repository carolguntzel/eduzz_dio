//Soma com número não definido de argumentos usando rest operator ...

function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 4, 3, 6, 7));

//Pega apenas alguns parêmtros com o rest operator

const sum = (a, b, ...rest) => {
    console.log(a, b, rest);
}

console.log(sum(5, 5, 5, 2, 3));

//Spread operator ...

const multiply = (...args) => args.reduce((acc, value) => acc +  value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3))

// Spread operator para strings, arrays, literal objects e objetos iteraveis

//Caso 1: quebrando a string e transformando em array para passar para outra função:

const str = 'Digital Inovation One';

function logArgs(...args){
    console.log(args);
}

logArgs(...str);

// Caso 2: concatenar arrays, clone de array
const arr = [1, 2, 3, 4];

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

const arrClone = [...arr];

console.log(arr3);
console.log(arrClone);

//Objetos literais

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2);



