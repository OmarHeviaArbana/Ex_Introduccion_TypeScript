const a = 1 + 2;
const b = a + 3;
const c: { apple: number, banana: number } = {
  apple: a,
  banana: b
};
const d = c.apple * 4;
const e = c.strawberry * 5; 