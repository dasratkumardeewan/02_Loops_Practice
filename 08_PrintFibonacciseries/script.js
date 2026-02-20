let num = 7;
let a = 0;
let b = 1;

let i = 0;
while (i < num) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
  i++;
}
