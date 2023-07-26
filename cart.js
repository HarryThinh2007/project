var cartList = JSON.parse(localStorage.getItem("cart"));

function renderCart() {
  var total = 0;
  for (i in cartList) {
    document.getElementById("product").insertAdjacentHTML(
      "beforeend",
      `
      <div class="card">
            <img id="img${i}"
              class="card_img"
              src="${cartList[i].productImage}"
              alt=""   
            />
            <h5 id="name${i}" class="card_name">${cartList[i].productName}</h5>
            <h6 id="price${i}" class="card_details">${cartList[i].productType}</h6>
            <h6 id="type${i}"  class="card_price">$${cartList[i].productPrice}</h6>
            <button type="button" class="btn btn-danger" onclick = "deleteProduct(${i})"><i class="fa-solid fa-trash-can"></i></button>
          </div>
      `
    );
    total += cartList[i].productPrice;
  }
  document.getElementById("total-price").innerHTML =
    "TOTAL: $" + total.toFixed(2);
}

renderCart();

function deleteProduct(index) {
  for (i in cartList) {
    if (i == index) {
      cartList.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  }
  document.getElementById("product").innerHTML = "";
  renderCart();
}

function success() {
  alert("Purchase SUCCESS!");
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", function () {
  clearList();
});

function clearList() {
  cartList = [];
  localStorage.setItem("cart", JSON.stringify(cartList));
  document.getElementById("product").innerHTML = "";
  renderCart();
}
