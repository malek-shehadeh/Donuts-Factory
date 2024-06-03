let FullName = prompt("Enter Your Name : ");
let gender = prompt("Enter Your Gender : ");
if (gender == "male") {
  alert("Welcome MR." + FullName);
} else if (gender == "female") {
  alert("Welcome MS." + FullName);
} else {
  alert("Welcome " + FullName);
}

let Q1 = confirm("Do you want buy donuts or coffee or ice cream or bakery ?");
if (Q1 == true) {
  var order = prompt("write the order want to buy ?");
  alert("The order will prepare ");
}
console.log("My name " + FullName + " " + "order is " + order);
