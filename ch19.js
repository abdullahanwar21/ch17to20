// //  Q-6  Generate the following series

// #01 Counting from 1 to 15
document.write(`<h2>counting:</h2>`);
for (let counting = 1; counting <= 15; counting++) {
  document.write(`<b>${counting},</b>`);
}

// //  Reversing
document.write(`<h2>Reversing:</h2>`);
let reverse = [];
for (let xx = 1; xx <= 10; xx++) {
  reverse.push(xx);
}
document.write(`<b>${reverse.reverse()},</b>`);
// // console.log(xx.reverse());

// //  Even Number
document.write(`<h2>Even:</h2>`);
for (let even = 0; even <= 20; even += 2) {
  document.write(`<b>${even},</b>`);
}

// //  Odd Number
document.write(`<h2>Odd:</h2>`);
for (let odd = 0; odd <= 20; odd++) {
  if (odd % 2) {
    document.write(`<b>${odd},</b>`);
  }
}

// //  Series Number
document.write(`<h2>Series:</h2>`);
for (let series = 1; series <= 20; series++) {
  if (!(series % 2)) {
    document.write(`<b>${series}k,</b>`);
  }
}
document.write(`<br> <br>`);

let bakrey = ["cake", "apple pie", "cookie", "chips", "patties"];
let askUserForBaker = prompt(
  "Welcome to the abc Baker,What do you want to order !"
);
switch (askUserForBaker) {
  case "cake":
    document.write(
      `${bakrey[0]} is <b>Available</b> at index 0 in our bakery `
    );
    break;
  case "apple pie":
    document.write(
      `${bakrey[1]} is <b>Available</b> at index 1 in our bakery `
    );
    break;
  case "cookie":
    document.write(
      `${bakrey[2]} is <b>Available</b> at index 2 in our bakery `
    );
    break;
  case "chips":
    document.write(
      `${bakrey[3]} is <b>Available</b> at index 3 in our bakery `
    );
    break;
  case "patties":
    document.write(
      `${bakrey[4]} is <b>Available</b> at index 4 in our bakery `
    );
    break;
  default:
    document.write(
      `we are sorry ${askUserForBaker} is <b> Not Available</b> in our bakery`
    );
}
document.write(`<br><br>`);
