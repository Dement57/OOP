class Product {
  // title = "DEFAULT";
  // imageUrl;
  // price;
  // description;

  constructor(title, img, desc, price) {
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId, shouldRender = true) {
    this.hookId = renderHookId;
    if (shouldRender) {
      this.render();
    }
  }

  rende() {}

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      attributes.forEach((attr) => {
        rootElement.setAttribute(attr.name, attr.value);
      });
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  constructor(renderHookId) {
    super(renderHookId, false);
    this.orderProducts = () => {
      console.log('Ordering...');
      console.log(this.items)
    }
    this.render();
  }

  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2 class=>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((first, current) => first + current.price, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
    <h2 class='cart h2'>Total: \$${0}</h2>
    <button>Order Now!</button>`;
    const orderButton = cartEl.querySelector('button');
    // orderButton.addEventListener('click', () => this.orderProduct())
    orderButton.addEventListener('click', this.orderProducts)
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductItem extends Component {
  constructor(product, renderHookId) {
    super(renderHookId,false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
          <div class = 'product-item'> 
              <img src= '${this.product.imageUrl}' alt = '${this.product.title} 'class='product-item img'>
              <div class='product-item__content'>
                  <h2 class = 'product-item h2'>${this.product.title}</h2>
                  <h3 class = 'product-item h3'>\$${this.product.price}</h3>
                  <p>${this.product.description}</p>
                  <button class='button'>Add to Cart</button>
              </div>
          </div>
          `;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
  }
}

class ProductList extends Component {
  #products = [];
  
  constructor(renderHookId) {
    super(renderHookId, false);
    this.render();
    this.fetchProducst();
  }

  fetchProducst() {
    this.#products = [
      new Product(
        "A Pillow",
        "http://t2.gstatic.com/images?q=tbn:ANd9GcQMzTULEOb2Wc86Vg3Mgw5n-jVgmOfMvjlj94w4VM9fOhh3vSYijDOzZ0KOv1Fh0vc5ePw3hE8rxkSRsSPXJZg",
        "A soft pillow",
        19.99
      ),
      new Product(
        "A Carpet",
        "https://images-na.ssl-images-amazon.com/images/I/81-K80Pt7PL._AC_SL1185_.jpg",
        "A carpet which you might like - or not",
        89.99
      ),
    ];
    this.renderProducts();
  }

  renderProducts() {
    for (const prod of this.#products) {
      new ProductItem(prod, "prod-list");
    }
  }

  render() {
    this.createRootElement("ul", "product-list", [
      new ElementAttribute("id", "prod-list"),
    ]);
    if (this.#products && this.#products > 0) {
      this.renderProducts();
    }
  }
}

class Shop{
  constructor() {
    this.render();
  }
  render() {
    this.cart = new ShoppingCart("app");
    new ProductList("app");
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
