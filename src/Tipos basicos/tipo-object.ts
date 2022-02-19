// TypeScript make a parameter as optional with ? (question mark)

const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string; //opcional
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

objetoA.chaveA = 'outro valor';
objetoA.chaveB = 'mais outro valor';
objetoA.chaveC = 'valor opcional';

// ----------------------------------------------------------------------------

// index signature { [key: string]: number } -> The idea of the index
// signatures is to type objects of unknown structure when you only know
// the key and value types.

const objetoB: { [key: string]: unknown } = {};

objetoB.chaveA = 'outro valor';
objetoB.chaveB = 'mais outro valor';
objetoB.chaveC = 'valor opcional';

// ----------------------------------------------------------------------------

// Record<Keys, Type>

// Constructs an object type whose property keys are Keys and whose property
// values are Type. This utility can be used to map the properties of a type
// to another type.

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = 'miffy' | 'boris' | 'mordred';

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 12, breed: 'persian' },
  boris: { age: 1, breed: 'maine coon' },
  mordred: { age: 2, breed: 'unknown' },
};

console.log(cats);
