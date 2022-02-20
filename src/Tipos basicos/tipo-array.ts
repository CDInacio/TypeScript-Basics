// Array<T> ou T[]

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

const res = multiplicaArgs(1, 2, 3);
console.log(res);

// ----------------------------------------------------------------------------

function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

const res2 = concatenaStrings('a', 'b', 'd');
console.log(res2);

// ----------------------------------------------------------------------------

function toUpperCase(...args: Array<string>): string[] {
  return args.map((value) => value.toUpperCase());
}

const res3 = toUpperCase('a', 'b', 'f');
console.log(res3);
