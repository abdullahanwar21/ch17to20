// //  Q-4 multiplication of any Number
let userGivenNum = +prompt(
  "ENter A Number To Show its multiplication number !"
);
let tableLength = +prompt("ENter  Lenght multiplication Table !");
for (u = 1; u <= tableLength; u++) {
  let ansNumber = u * userGivenNum;
  document.write(`<b> ${u} X ${ansNumber} =  ${ansNumber}</b> <br>`);
}
document.write(`<br><br>`);

// // Q-5 printing array with for loop
let fruits = ["apple", "banana", "Mango", "orange", "strawberry"];
for (let x = 0; x < fruits.length; x++) {
  document.write(`${fruits[x]} <br>`);
}
document.write(`<br><br>`);
for (let m = 0; m < fruits.length; m++) {
  document.write(`Element at ${m} is ${fruits[m]} <br>`);
}
