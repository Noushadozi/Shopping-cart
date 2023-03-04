let num = 0;
document.getElementById("first-card").addEventListener("click", function () {
  num += 1;
  const productName = document.getElementById("first-name").innerText;
  const productPrice = document.getElementById("first-price").innerText;
  const productQuantity = document.getElementById("first-quantity").innerText;
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(num, productName, productPrice, productQuantity, priceTotal);
  disabledButton("first-card");
});

document.getElementById("second-card").addEventListener("click", function (e) {
  num += 1;
  const productName = e.target.parentNode.parentNode.children[0].innerText;
  const productPrice =
    e.target.parentNode.parentNode.children[2].children[0].innerText;
  const productQuantity =
    e.target.parentNode.parentNode.children[3].children[0].innerText;
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
  displayData(num, productName, productPrice, productQuantity, priceTotal);
  disabledButton("second-card");
});

document.getElementById("third-card").addEventListener("click", function () {
  num += 1;
  const productName = document.getElementById("third-name").innerText;
  const productPrice = document.getElementById("third-price").innerText;
  const productQuantity = document.getElementById("third-quantity").innerText;
  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(num, productName, productPrice, productQuantity, priceTotal);
  disabledButton("third-card");
});
document.getElementById("fourth-card").addEventListener("click", function () {
  num += 1;

  const productName = document.getElementById("fourth-name").innerText;
  const productPrice = document.getElementById("fourth-price").innerText;
  const productQuantity = document.getElementById("fourth-quantity").innerText;

  const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

  displayData(num, productName, productPrice, productQuantity, priceTotal);
  disabledButton("fourth-card");
});
document.getElementById("fivth-card").addEventListener("click", function () {
  num += 1;

  const productName = document.getElementById("fivth-name").innerText;
  const productPrice = document.getElementById("fivth-price").value;
  const productQuantity = document.getElementById("fivth-quantity").value;

  if (productPrice == '' || productQuantity == '' || productPrice < 0 || productQuantity < 0) {
    alert("give valid number");
  } else {
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

    displayData(num, productName, productPrice, productQuantity, priceTotal);
    disabledButton("fivth-card");
  }
});

function displayData(
  num,
  productName,
  productPrice,
  productQuantity,
  priceTotal
) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <th>${num}</th>
        <td>${productName}</td>
        <td>${productPrice}</td>
        <td>${productQuantity}</td>
        <td>${priceTotal}</td>
        `;
  container.appendChild(tr);
}
function disabledButton(id) {
  document.getElementById(id).setAttribute("disabled", true);
}
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//     displayData(num, productName, productPrice, productQuantity, priceTotal);
// });
// console.log(productName);
// console.log(productPrice);
// console.log(productQuantity);
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//     displayData(num, productName, productPrice, productQuantity, priceTotal);
// });
// console.log(productName);
// console.log(productPrice);
// console.log(productQuantity);
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//     displayData(num, productName, productPrice, productQuantity, priceTotal);
// });
// console.log(productName);
// console.log(productPrice);
// console.log(productQuantity);
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//     displayData(num, productName, productPrice, productQuantity, priceTotal);
// });
// console.log(productName);
// console.log(productPrice);
// console.log(productQuantity);
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//     displayData(num, productName, productPrice, productQuantity, priceTotal);
// });
// console.log(productName);
// console.log(productPrice);
// console.log(productQuantity);
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);

//     displayData(num, productName, productPrice, productQuantity, priceTotal);
// });
// console.log(productName);
// console.log(productPrice);
// console.log(productQuantity);
// document.getElementById('second-card').addEventListener('click', function(){
//     num += 1;
//     const productName = document.getElementById("second-name").innerText;
//     const productPrice = document.getElementById("second-price").innerText;
//     const productQuantity = document.getElementById("second-quantity").innerText;
//     const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
