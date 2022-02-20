// A tuple type is another sort of Array type that knows exactly how many
// elements it contains, and exactly which types it contains at specific
// positions.

const dados: [number, string] = [1, 'cláudio'];
const dados2: [number, string, string] = [2, 'vitor', 'natalia'];
const dados3: [string, number, number?] = ['sandro', 29];
const dados4: [string, number, ...number[]] = ['claudio', 1, 2, 3, 4, 5, 5];

dados[0] = 100;
dados[1] = 'vitor';
