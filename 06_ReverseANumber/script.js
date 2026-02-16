// This Program Returns The Reversed Value Of Numbers!
let num = Number(prompt("Enter Numbers"));
while (isNaN(num)) {
  num = Number(prompt("Please Enter Numbers"));
}

let reversedVal = num.toString().split("").reverse().join("");

console.log(reversedVal);
