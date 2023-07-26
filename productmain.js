var product = {
  data: [
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92a3e04a-9e67-462e-966c-1a49dfbe63b2/air-force-1-07-shoe-NMmm1B.png",
      name: "Nike Air Force 1'07",
      price: 123.87,
      type: "Women",
    },
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7a77943-19e1-4172-8a8a-d517c0931444/revolution-6-older-road-running-shoes-RmdT3m.png",
      name: "Nike Revolution 6",
      price: 62.55,
      type: "Kids",
    },
    {
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/85431ec9-40ad-41d1-b0c4-fb004fb8fa00/air-max-270-shoes-V4DfZQ.png",
      name: "Nike Air Max 270",
      price: 186.47,
      type: "Women",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ef53d314449c45abb07ba9fac0033052_9366/ultraboost-light.jpg",
      name: "Adidas ULTRABOOST LIGHT",
      price: 190.0,
      type: "Men",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5f925d83b3ea43c0bdc84d7b1900ea03_9366/pureboost-23.jpg",
      name: "Adidas PUREBOOST 23",
      price: 140.0,
      type: "Men",
    },
    {
      image:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/74d2fe54050b4093b2faafc6013747a7_9366/forum-low-shoes.jpg",
      name: "Adidas Forum Low Shoes",
      price: 80.0,
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
renderProduct();

function renderProduct() {
  const product = JSON.parse(localStorage.getItem("productToShow"));
  console.log(product);
  document.getElementById("product-info").insertAdjacentHTML(
    "beforeend",
    `
      <div class="product-img">
              <img
                id="imgDetail"
                src="${product[0].image}"
                alt=""
              />
            </div>
            <div class="product-info">
              <h3 id="nameDetail">${product[0].name}</h3>
              <h5 id="typeDetail">${product[0].type}</h5>
              <h5 id="priceDetail">$${product[0].price}</h5>
              <h5>Select Size</h5>
              <select class="product_size" name="size">
                <option value="" selected disabled hidden>Size</option>
                <option value="size">EU 39</option>
                <option value="size">EU 40</option>
                <option value="size">EU 40.5</option>
                <option value="size">EU 41</option>
                <option value="size">EU 42</option>
              </select>
              <button id="add-btn" class="btn btn-primary btn-add" type="button" onclick="addTocart(${product[0].index})">Add to Bag</button>
            </div>  
      `
  );
}

var productList = [];
function addTocart(index) {
  const list = JSON.parse(localStorage.getItem("cart"));
  for (let i in product.data) {
    if (i == index) {
      if (list.length == 0) {
        productList.push({
          productImage: product.data[i].image,
          productName: product.data[i].name,
          productType: product.data[i].type,
          productPrice: product.data[i].price,
        });
        localStorage.setItem("cart", JSON.stringify(productList));
      } else {
        list.push({
          productImage: product.data[i].image,
          productName: product.data[i].name,
          productType: product.data[i].type,
          productPrice: product.data[i].price,
        });
        localStorage.setItem("cart", JSON.stringify(list));
      }
    }
  }
}
