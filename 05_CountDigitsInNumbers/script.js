// This Program Returns The Length Of Given Numbers!
let num = Number(prompt("Enter Numbers"));
while (isNaN(num)) {
  num = Number(prompt("Please Enter Numbers"));
}

console.log(num.toString().length);
