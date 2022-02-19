// VOID: quando um método não retorna nada

// dica: sempre colocar o tipo de retorno

// Rest operator (...args) -> Permite representar um número indefinido de
// argumentos na forma de um Array

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

semRetorno('claudio', 'vitor');

const pessoa = {
  nome: 'claudio',
  sobrenome: 'dantas',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

pessoa.exibirNome();
