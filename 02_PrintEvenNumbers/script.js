// This program checks whether given number is even or odd
let evenOrOdd = Number(prompt("Enter Numbers"));

while (isNaN(evenOrOdd)) {
  evenOrOdd = Number(prompt("Please Enter Number"));
}

if (evenOrOdd % 2 === 0) {
  console.log(`${evenOrOdd}, Is Even`);
} else {
  console.log(`${evenOrOdd}, Is Odd`);
}
