// Q-8 find the largest number from an array
let abc = [24, 53, 78, 91, 12];
document.write("Array Item : ");
for (ab of abc) {
  document.write(ab + ",");
}
document.write(`<br>`);
document.write("THe Largest Number is " + Math.max(...abc));
document.write(`<br><br>`);

// Q-9 find the Smallest number from an array
let findLowestNum = [24, 53, 78, 91, 12];
document.write("Array Item : ");
for (smallest of findLowestNum) {
  document.write(smallest + ",");
}
document.write(`<br>`);
document.write("THe Smallest Number is " + Math.min(...findLowestNum));
document.write(`<br><br>`);

// 10. Write a program to print multiples of 5 ranging 1 to 100.
for (let five = 0; five <= 100; five += 5) {
  if (five === 0) {
    continue;
  }
  document.write(five + "  , ");
}
