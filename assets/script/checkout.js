// import iceCream from '../data/ice_cream.json';
// const iceCream = require('./assets/data/ice_cream.json');
// fetch("assets/data/ice_cream.json").then( async(reponse)=>{
//   if (!reponse.ok) {
//     throw new Error('Http error!')
//   }
//    console.log(await reponse.json());
// }).then( jsonData =>{
//   console.log("i got here");
//   console.log(jsonData);
// }).catch(error =>{
//   console.error("Error during fetch", error);
// })

document.addEventListener("DOMContentLoaded", async function () {
  async function fetchCakes() {
    try {
      const reponse = await fetch("assets/data/ice_cream.json");
      if (!reponse.ok) {
        throw new Error("Http error!");
      }
      const jsondata = await reponse.json();
      return jsondata;
    } catch (error) {
      console.error("Error during fetch", error);
    }
  }
  const data = await fetchCakes();
  console.log(data);
  let checkoutTable = document.getElementById("checkoutTable");

  // Create table body
  let tbody = document.createElement("tbody");
  data.forEach((item) => {

    let row = document.createElement("tr");

    
    // let imgCell = document.createElement("td");
    // let img = document.createElement("img");
    // img.src = item.image_url;
    // imgCell.appendChild(img);
    // row.appendChild(imgCell);

    // let nameCell = document.createElement("td");
    // nameCell.appendChild(document.createTextNode(item.name));
    // row.appendChild(nameCell);

    // let quantityCell = document.createElement("td");
    // quantityCell.appendChild(document.createTextNode(item.quantity));
    // row.appendChild(quantityCell);

    // let amountCell = document.createElement("td");
    // amountCell.appendChild(document.createTextNode(item.amount));
    // row.appendChild(amountCell);

    Object.keys(data[0]).forEach(key => {
      if (key === 'image_url') {
       let imgCell = document.createElement("td");
       let img = document.createElement("img");
       img.src = item.image_url;
       imgCell.appendChild(img);
       row.appendChild(imgCell);
      }
      else{
       let cell = document.createElement("td");
       cell.appendChild(document.createTextNode(item[key]));
       row.appendChild(cell);
      }
     })
    tbody.appendChild(row);
  });


  
  checkoutTable.appendChild(tbody);
});




// document.addEventListener("DOMContentLoaded", function () {
//   document.title = "Checkout - Changed by markup";
//   var amount1 = document.getElementById("amount-1");
//   var amount1TextValue = amount1.textContent.slice(1);
//   var amount1FloatValue = parseFloat(amount1TextValue) * 6;
//   amount1.innerText = "$" + amount1FloatValue;

//   var arrayOfInteger = [1, 2, 3, 4, 5, 6, 7];
//   var arrayOfStrings = ["apple", "ball", "cat"];
//   arrayOfStrings[0] = "banana";
//   console.log(arrayOfStrings);
//   console.log(arrayOfStrings.indexOf("cat"));
//   arrayOfStrings.push("books", "candle", "mountain");
//   console.log(arrayOfStrings);

//   var objectExamplePerson1 = {
//     firstName: "Andrew",
//     lastName: "Jones",
//     age: 21,
//     gender: "M",
//   };
//   var objectExamplePerson2 = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 24,
//     gender: "F",
//   };
//   console.log(Object.keys(objectExamplePerson1));
//   console.log(Object.values(objectExamplePerson1));
//   console.log(Object.entries(objectExamplePerson1));
//   var listOfObjectsPerson = [objectExamplePerson1, objectExamplePerson2];
//   console.log(listOfObjectsPerson);

//   var checkoutTable = document.getElementById("checkoutTable");
//   var cells = checkoutTable.getElementsByTagName("tr");
//   var totalSum = 0;
//   for (let index = 0; index < cells.length; index++) {

//     console.log(cells[index]);
//     console.log(cells[index].children[3]);
//     var amountChild = cells[index].children[3];
//     var amountChildInteger = parseFloat(amountChild.textContent.slice(1));
//     var ammountChildCalculate =(amountChildInteger * 0.98);
//     cells[index].children[3].innerHTML = "$" +ammountChildCalculate.toFixed(2);
//      totalSum += ammountChildCalculate;
//   }
//   var totalAmount = document.getElementById("totalAmount");
//   totalAmount.innerText = "$"+ totalSum;

// });
