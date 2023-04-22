/*
let value1 = "";
let value2 = "";
let rate1 = "";

document.addEventListener("input", function () {
  console.log("hi");
  let value1 = document.getElementById("input2").value;
  let value2 = document.getElementById("input1");
  value2.value = value1;
});

*/

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let rate = 5;

input1.addEventListener("click", function () {
  console.log("hi");
  input1.addEventListener("input", function () {
    console.log("hi");

    input2.value = input1.value * rate;
  });
});

input2.addEventListener("click", function () {
  console.log("hi");
  input2.addEventListener("input", function () {
    console.log("hi");

    input1.value = input2.value * rate;
  });
});
