class Pessoa {
    #nome; // nome privado

    constructor (nome){
        this.#nome = nome;

    }
 //getter para acessar o nome 
 get nome (){
    return  this.#nome;
 }

 //setter para definir o nome 
 set nome(novoNome){
    if (typeof novoNome === 'string' && novoNome.length >0 ){
        this.#nome = novoNome;
    }
    else {
        console.error(" O nome não deve ser uma string vazia.");
    }
 }
}
//usando getter
 const pessoa = new Pessoa("João")

 console.log (pessoa.nome);

 // Usando setter
  pessoa.nome = "Messi"

  console.log(pessoa.nome);

  // setter vazio 

  pessoa.nome = '';