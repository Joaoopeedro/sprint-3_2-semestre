/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function(argumento){
    return !! argumento
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

console.log("Funções do tipo falsy:")

console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(NaN));
console.log(isTruthy(''));


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("\nFunções do tipo truthy:")

console.log(isTruthy(true));
console.log(isTruthy({}));
console.log(isTruthy([]));
console.log(isTruthy(42));
console.log(isTruthy("foo"));
console.log(isTruthy(new Date()));
console.log(isTruthy(-42));
console.log(isTruthy(3.14));
console.log(isTruthy(-3.14));
console.log(isTruthy(Infinity));
console.log(isTruthy(-Infinity));

console.log();
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var Carro = new Object;

Carro.marca = "Nissan"
Carro.Modelo = "GTR R-34"
Carro.Placa = "GTR-2001"
Carro.ano = 2000
Carro.cor = "Azul royal"
Carro.quantasPortas = 2
Carro.assentos = 5
Carro.quantidadePessoas = 0

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

Carro.mudarCor = (novaCor) => {
    Carro.cor = novaCor
    return "Cor mudada"
}
//Carro.mudarCor("vermelho")

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

Carro.obterCor = () =>{
    return Carro.cor
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
Carro.obterModelo = () =>{
    return Carro.Modelo
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
Carro.obterMarca = () =>{
    return Carro.marca
}


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

Carro.obterMarcaModelo = () => {
    return `Esse carro é um  ${Carro.marca} ${Carro.Modelo}`

}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.aa
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

Carro.adcionarPessoas = pessoas  =>{
    let reset = Carro.quantidadePessoas
    let quantidade = 5- Carro.quantidadePessoas
    let plural = "pessoas"
    if(Carro.quantidadePessoas >= 5)return `O carro esta lotado`
    Carro.quantidadePessoas += pessoas
    if(Carro.quantidadePessoas > 5){
        Carro.quantidadePessoas = reset 
        return `Só cabem mais ${quantidade} pessoas no carro`
    }
    if(Carro.quantidadePessoas == 1)plural = "pessoa"
    
    
    return `já temos ${Carro.quantidadePessoas} ${plural} no carro`
}

Carro.TirarPessoas = pessoas =>{
    let plural = "pessoas"
    if(Carro.quantidadePessoas == 1)plural = "pessoa"

    if(Carro.quantidadePessoas <0)return "Não tem ninhuem no carro"
    Carro.quantidadePessoas -= pessoas

    if(Carro.quantidadePessoas < 0)return "Você não pode tirar pessoas do carro"

    return `Há ${Carro.quantidadePessoas} ${plural} no carro`
}

console.log();
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log("Qual a cor atual do carro?")
console.log(Carro.obterCor())

// Mude a cor do carro para vermelho.

console.log("\nMude a cor do carro para vermelho.")
console.log(Carro.mudarCor("Vermelho"))

// E agora, qual a cor do carro?
console.log("\nE agora, qual a cor do carro?")
console.log(Carro.obterCor())

// Mude a cor do carro para verde musgo.
console.log("\nMude a cor do carro para verde musgo.")
console.log(Carro.mudarCor("verde musgo"))

// E agora, qual a cor do carro?
console.log("\nE agora, qual a cor do carro?")
console.log(Carro.obterCor())

// Qual a marca e modelo do carro?
console.log("\nQual a marca e modelo do carro?")
console.log(Carro.obterModelo())

// Adicione 2 pessoas no carro.
console.log("\nAdicione 2 pessoas no carro.")
console.log(Carro.adcionarPessoas(2))


// Adicione mais 4 pessoas no carro.
console.log("\nAdicione 4 pessoas no carro.")
console.log(Carro.adcionarPessoas(4))

// Faça o carro encher.
console.log("\nFaça o carro encher.")
console.log(Carro.adcionarPessoas(3))

// Tire 4 pessoas do carro.
console.log("\nTire 4 pessoas do carro.")
console.log(Carro.TirarPessoas(4))

// Adicione 10 pessoas no carro.
console.log("\nAdicione 10 pessoas no carro.")
console.log(Carro.adcionarPessoas(10))

// Quantas pessoas temos no carro?
console.log("\nQuantas pessoas temos no carro?")
console.log(Carro.quantidadePessoas)