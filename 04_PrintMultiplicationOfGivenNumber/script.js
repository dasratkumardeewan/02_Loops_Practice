let table = Number(prompt("Enter A Number To Get Its Multiplication Table"));

while (isNaN(table)) {
  table = Number(
    prompt("Please Enter A Number To Get Its Multiplication Table"),
  );
}

for (let j = 1; j <= 10; j++) {
  console.log(`${table * j}`);
}
