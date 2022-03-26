//Destructuring assignment

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['tomato']];

console.log(tomato2);

//Para 'destruir' um objeto e atribuir nova propriedade a outra variável

var obj = {
    name: 'Carol',
    props: {
        age: 42,
        favoriteColors: ['black', 'blue']
    }
};

var { 
    props: {
        age: age2,
        favoriteColors: [color1, color2] 
    }
} = obj;

console.log(age2);

//Função soma de array sem destructuring

function sum(arr) {
    return arr[0] + arr [1];
}

console.log(sum([5, 5]));

//Função soma de array com destructuring

function sum ([a, b]) {
    return a + b;
}

console.log(sum([5, 5]));