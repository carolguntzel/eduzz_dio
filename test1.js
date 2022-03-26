//Declarar propriedade para uma variável:
var prop1 = 'Digital Inovation One';

var obj = {
    prop1
}

console.log(obj);

//Função para construir métodos:
function method1(){
    console.log('method called');
}

var obj = {
    method1
}

obj.method1()

//Função soma com ECMA6:
var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1,5));

//Criação de objeto, atribuição de propriedade e concatenação:

var proName = 'teste';

var obj = {
    [proName + 'concat']: 'prop value'
}

console.log(obj);