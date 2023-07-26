var product = {
  data: [
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92a3e04a-9e67-462e-966c-1a49dfbe63b2/air-force-1-07-shoe-NMmm1B.png",
      name: "Nike Air Force 1'07",
      price: 124,
      type: "Women",
    },
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7a77943-19e1-4172-8a8a-d517c0931444/revolution-6-older-road-running-shoes-RmdT3m.png",
      name: "Nike Revolution 6",
      price: 63,
      type: "Kids",
    },
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85431ec9-40ad-41d1-b0c4-fb004fb8fa00/air-max-270-shoes-V4DfZQ.png",
      name: "Nike Air Max 270",
      price: 186,
      type: "Women",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef53d314449c45abb07ba9fac0033052_9366/ultraboost-light.jpg",
      name: "Adidas ULTRABOOST LIGHT",
      price: 190,
      type: "Men",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f925d83b3ea43c0bdc84d7b1900ea03_9366/pureboost-23.jpg",
      name: "Adidas PUREBOOST 23",
      price: 140,
      type: "Men",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/74d2fe54050b4093b2faafc6013747a7_9366/forum-low-shoes.jpg",
      name: "Adidas Forum Low Shoes",
      price: 80,
      type: "Kids",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/353572/17/sv01/fnd/PNA/fmt/png/Roma-Basic-Sneakers",
      name: "PUMA Roma Basic Sneakers",
      price: 70.0,
      type: "Men",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/28ed0cc702d8446ab441f364b642da78_9366/gazelle-shoes.jpg",
      name: "Adidas Gazelle Shoes",
      price: 120.0,
      type: "Women",
    },
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f52549ad-24d9-4c23-98fa-7052c11e47bc/pegasus-40-road-running-shoes-50CtF7.png",
      name: "Nike Pegasus 40 Premium",
      price: 173.78,
      type: "Men",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/381983/01/sv01/fnd/PNA/fmt/png/Mayze-Women's-Sneakers",
      name: "PUMA Mayze Women's Sneakers",
      price: 90.0,
      type: "Women",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/344765/74/sv01/fnd/PNA/fmt/png/GV-Special-Sneakers-Big-Kids",
      name: "PUMA GV Special Sneakers Big Kids",
      price: 55.0,
      type: "Kids",
    },
    {
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/107510/01/sv01/fnd/PNA/fmt/png/ULTRA-PRO-FG/AG-Big-Kids'-Soccer-Cleats",
      name: "PUMA ULTRA PRO FG/AG Big Kids' Soccer Cleats",
      price: 110.0,
      type: "Kids",
    },
  ],
};

function render() {
  for (let i in product.data) {
    document.getElementById("products").insertAdjacentHTML(
      "beforeend",
      `
        <a id="buy-btn${i}" onclick="productDetail(${i})" href="productmain.html">
            <div class="card">
              <img id="img${i}"
                class="card_img"
                src="${product.data[i].image}"
                alt=""
              />
              <h5 id="name${i}" class="card_name">${product.data[i].name}</h5>
              <h6 id="price${i}" class="card_details">${product.data[i].type}</h6>
              <h6 id="type${i}"  class="card_price">$${product.data[i].price}</h6>
            </div>
          </a>
        `
    );
  }
}
render();

function renderWomen() {
  document.getElementById("products").innerHTML = "";
  for (let i in product.data) {
    if (product.data[i].type == "Women") {
      document.getElementById("products").insertAdjacentHTML(
        "beforeend",
        `
          <a id="buy-btn${i}" onclick="productDetail(${i})" href="product.html">
              <div class="card">
                <img id="img${i}"
                  class="card_img"
                  src="${product.data[i].image}"
                  alt=""
                />
                <h5 id="name${i}" class="card_name">${product.data[i].name}</h5>
                <h6 id="price${i}" class="card_details">${product.data[i].type}</h6>
                <h6 id="type${i}"  class="card_price">$${product.data[i].price}</h6>
              </div>
            </a>
          `
      );
    }
  }
}

function renderMen() {
  document.getElementById("products").innerHTML = "";
  for (let i in product.data) {
    if (product.data[i].type == "Men") {
      document.getElementById("products").insertAdjacentHTML(
        "beforeend",
        `
          <a id="buy-btn${i}" onclick="productDetail(${i})" href="product.html">
              <div class="card">
                <img id="img${i}"
                  class="card_img"
                  src="${product.data[i].image}"
                  alt=""
                />
                <h5 id="name${i}" class="card_name">${product.data[i].name}</h5>
                <h6 id="price${i}" class="card_details">${product.data[i].type}</h6>
                <h6 id="type${i}"  class="card_price">${product.data[i].price}</h6>
              </div>
            </a>
          `
      );
    }
  }
}

function renderKid() {
  document.getElementById("products").innerHTML = "";
  for (let i in product.data) {
    if (product.data[i].type == "Kids") {
      document.getElementById("products").insertAdjacentHTML(
        "beforeend",
        `
          <a id="buy-btn${i}" onclick="productDetail(${i})" href="product.html">
              <div class="card">
                <img id="img${i}"
                  class="card_img"
                  src="${product.data[i].image}"
                  alt=""
                />
                <h5 id="name${i}" class="card_name">${product.data[i].name}</h5>
                <h6 id="price${i}" class="card_details">${product.data[i].type}</h6>
                <h6 id="type${i}"  class="card_price">${product.data[i].price}</h6>
              </div>
            </a>
          `
      );
    }
  }
}

const searchInput = document.getElementById("searchInput");
const elementContainer = document.getElementById("products");
const searchButton = document.getElementById("searchbutton");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const elements = elementContainer.getElementsByClassName("card_name");
  const cards = elementContainer.getElementsByClassName("card");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i].innerHTML;
    const name = element.toLowerCase();
    const hasNameMatch = name.includes(searchTerm);
    console.log(hasNameMatch);
    if (hasNameMatch) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
});

searchInput.addEventListener("keydown", function (event) {
  if (event.keyCode == 13) {
    const searchTerm = searchInput.value.toLowerCase();
    const elements = elementContainer.getElementsByClassName("card_name");
    const cards = elementContainer.getElementsByClassName("card");

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i].innerHTML;
      const name = element.toLowerCase();
      const hasNameMatch = name.includes(searchTerm);
      console.log(hasNameMatch);
      if (hasNameMatch) {
        cards[i].style.display = "block";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
});

const productToShow = [];
function productDetail(index) {
  for (let i in product.data) {
    console.log(i);
    if (i == index) {
      productToShow.push({
        image: product.data[i].image,
        name: product.data[i].name,
        type: product.data[i].type,
        price: product.data[i].price,
        index: i,
      });
      localStorage.setItem("productToShow", JSON.stringify(productToShow));
    }
  }
}
