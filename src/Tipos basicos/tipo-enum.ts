// Enums allow a developer to define a set of named constants. Using enums
// can make it easier to document intent, or create a set of distinct cases.
//  TypeScript provides both numeric and string-based enums.

enum Cores {
  VERMELHO, //0
  AMARELO, //1
  PRETO, //2
  AZUL, //3
}

// output -> 0
console.log(Cores.VERMELHO);

// output -> AMARELO
console.log(Cores[1]);

// ---------------------------------------------------------------------------

enum Carros {
  HB20 = 1,
  FOCUS = 'FOCUS',
  FUSION = 'FUSION',
}

// output -> FOCUS
console.log(Carros.FOCUS);

// ---------------------------------------------------------------------------

function escolhaUmCarro(carro: Carros): void {
  console.log(Carros[carro]);
}

escolhaUmCarro(Carros.HB20);
