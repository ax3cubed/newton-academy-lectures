document.addEventListener("DOMContentLoaded", function () {
  document.title = "Checkout - Changed by markup";
  var amount1 = document.getElementById("amount-1");
  var amount1TextValue = amount1.textContent.slice(1);
  var amount1FloatValue = parseFloat(amount1TextValue) * 6;
  amount1.innerText = "$" + amount1FloatValue;

  var arrayOfInteger = [1, 2, 3, 4, 5, 6, 7];
  var arrayOfStrings = ["apple", "ball", "cat"];
  arrayOfStrings[0] = "banana";
  console.log(arrayOfStrings);
  console.log(arrayOfStrings.indexOf("cat"));
  arrayOfStrings.push("books", "candle", "mountain");
  console.log(arrayOfStrings);

  var objectExamplePerson1 = {
    firstName: "Andrew",
    lastName: "Jones",
    age: 21,
    gender: "M",
  };
  var objectExamplePerson2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
    gender: "F",
  };
  console.log(Object.keys(objectExamplePerson1));
  console.log(Object.values(objectExamplePerson1));
  console.log(Object.entries(objectExamplePerson1));
  var listOfObjectsPerson = [objectExamplePerson1, objectExamplePerson2];
  console.log(listOfObjectsPerson);

  var checkoutTable = document.getElementById("checkoutTable");
  var cells = checkoutTable.getElementsByTagName("tr");
  var totalSum = 0;
  for (let index = 0; index < cells.length; index++) {
    
    console.log(cells[index]);
    console.log(cells[index].children[3]);
    var amountChild = cells[index].children[3];
    var amountChildInteger = parseFloat(amountChild.textContent.slice(1));
    var ammountChildCalculate =(amountChildInteger * 0.98);
    cells[index].children[3].innerHTML = "$" +ammountChildCalculate.toFixed(2);
     totalSum += ammountChildCalculate;
  }
  var totalAmount = document.getElementById("totalAmount");
  totalAmount.innerText = "$"+ totalSum;
  
});
