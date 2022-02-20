// a union type variable is a variable which can store multiple type of
// values (i.e. number, string etc). A union type allows us to define a
// variable with multiple types.

function addOrConcat(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(1, 2));
console.log(addOrConcat('a', 'c'));
console.log(addOrConcat('a', 2));
