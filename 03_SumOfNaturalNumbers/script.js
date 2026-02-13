let num = Number(prompt("Enter A Natural Number"));
let sum = 0;

while (isNaN(num)) {
  num = Number(prompt("Please Enter A Natural Number"));
}

for (let i = 1; i <= num; i++) {
  sum += i;
}

console.log(sum);
