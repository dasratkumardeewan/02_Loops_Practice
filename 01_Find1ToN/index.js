let N = Number(prompt("Enter Number To Print"));

while (isNaN(N)) {
  N = Number(prompt("Please Enter Number To Print"));
}

for (let i = 1; i <= N; i++) {
  console.log(i);
}
