// Declarar uma variável qualquer, que receba um objeto vazio.
var qualquer = new Object;
//console.log(qualquer);


//Declarar uma variável `pessoa`, que receba suas informações pessoais.
//As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
//- `nome` - String
//- `sobrenome` - String
//- `sexo` - String
//- `idade` - Number
//- `altura` - Number
//- `peso` - Number
//- `andando` - Boolean - recebe "falso" por padrão
//- `caminhouQuantosMetros` - Number - recebe "zero" por padrão

var Pessoas = new Object;

Pessoas.Nome= 'Joao'
Pessoas.sobrenome = 'Pedro'
Pessoas.sexo = 'Masculino'
Pessoas.idade = 17
Pessoas.altura = 1.73
Pessoas.peso = 80
Pessoas.andando = false
Pessoas.caminhouQuantosMetros = 0


//Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
//alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
//for chamado.

Pessoas.fazerAniversario = function(){
    Pessoas.idade += 1
}



/*Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";*/

Pessoas.andar = function(metroCaminhados)
{
    Pessoas.caminhouQuantosMetros += metroCaminhados;
    Pessoas.andando = true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

Pessoas.parar = function(){
    Pessoas.andando = false
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

Pessoas.nomeCompleto = function(){
    //return "Olá! Meu nome é " + Pessoas.Nome+ " " + Pessoas.sobrenome
    return  Pessoas.Nome+ " " + Pessoas.sobrenome
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

Pessoas.mostrarIdades = function(){
    return "Olá, eu tenho " + Pessoas.idade + " anos"
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

Pessoas.mostrarPeso = function(){
    return "Eu peso "+ Pessoas.peso + " Kg"
}


/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
Pessoas.mostrarAltura = function(){
    return "Minha Altura é "+ Pessoas.altura + "m"
}



/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoas.nomeCompleto());

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoas.mostrarIdades());

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoas.mostrarPeso());

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(Pessoas.mostrarAltura());

/*
Faça a `pessoa` fazer 3 aniversários.
*/

Pessoas.fazerAniversario();
Pessoas.fazerAniversario();
Pessoas.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(Pessoas.mostrarIdades());

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
Pessoas.andar(10);
Pessoas.andar(10);
Pessoas.andar(10);


/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(Pessoas);

/*
Se a pessoa ainda está andando, faça-a parar.
*/

Pessoas.parar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(Pessoas);

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log("A pessoa caminhou o total de " + Pessoas.caminhouQuantosMetros + " metros");

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"
Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/

Pessoas.apresentacao = function(){
        let pronome = "o"
        let idade = "anos"
        let metros = "metros"

    if(Pessoas.sexo == "Feminino"){
        pronome = "a"

    }
    if(Pessoas.idade == 1){
        idade = "ano"
    }
    if(Pessoas.caminhouQuantosMetros == 1){
        metros = "metro"
    }

    return  `Olá, eu sou ${pronome} ${Pessoas.nomeCompleto()}, tenho ${Pessoas.idade} ${idade}, ${Pessoas.mostrarAltura()}, ${Pessoas.mostrarPeso()} e, só hoje, eu já caminhei ${Pessoas.caminhouQuantosMetros} ${metros}!`;
}
console.log(Pessoas.apresentacao());
