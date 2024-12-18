



const buttonShowCart = document.querySelector('#cart-btn');
const btnClear = document.querySelector('#clear-cart-btn');

const cartContainer = document.querySelector('#cart-container');

const totalSpan = document.querySelector('#total-items');
const sbtotalSpan = document.querySelector('#subtotal');
const taxesSpan = document.querySelector('#taxes');
const totalPrice = document.querySelector('#total');
const dessertCardContainer = document.querySelector('#dessert-card-container');
const productContainer = document.querySelector('#products-container');

class ShoppingCart{
    constructor(){
        this.taxRate = 8.5;
        this.total = 0;
        this.items = [];
    }

    addItem(e){
        const id = Number(e.target.id);
        const product = products.find(product => product.id === id);
        
        if(!product){
            return;
        }

        const {name,price} = product;

        const isExist = Boolean(this.items.find(product => product.id === id));
        
        
        if(!isExist){
            this.items.push(product);
            this.total = Number(price) * (Number(this.taxRate) / 100) + Number(price);
            totalSpan.textContent = this.items.length;
            sbtotalSpan.textContent = price.toFixed(2);
            taxesSpan.textContent = this.taxRate.toFixed(2);
            totalPrice.textContent = this.total.toFixed(2);
            productContainer.innerHTML += `
            <div id="dessert${id}" class="product">
              <p>
                <span class="product-count" id="product-count-for-id${id}"></span>${name}
              </p>
              <p>${price.toFixed(2)}</p>
            </div>
            `;
        }
        
       
    }

    clearCart(){
        this.items = [];
        this.total = 0
        totalSpan.textContent = this.items.length;
        sbtotalSpan.textContent = 0;
        taxesSpan.textContent = 0;
        totalPrice.textContent = 0;
        productContainer.innerHTML = '';
    }
}

const cart = new ShoppingCart();

buttonShowCart.addEventListener('click',showCart);
btnClear.addEventListener('click',(e) => cart.clearCart());
const products = [
    {
      id: 1,
      name: "Vanilla Cupcakes (6 Pack)",
      price: 12.99,
      category: "Cupcake",
    },
    {
      id: 2,
      name: "French Macaron",
      price: 3.99,
      category: "Macaron",
    },
    {
      id: 3,
      name: "Pumpkin Cupcake",
      price: 3.99,
      category: "Cupcake",
    },
    {
      id: 4,
      name: "Chocolate Cupcake",
      price: 5.99,
      category: "Cupcake",
    },
    {
      id: 5,
      name: "Chocolate Pretzels (4 Pack)",
      price: 10.99,
      category: "Pretzel",
    },
    {
      id: 6,
      name: "Strawberry Ice Cream",
      price: 2.99,
      category: "Ice Cream",
    },
    {
      id: 7,
      name: "Chocolate Macarons (4 Pack)",
      price: 9.99,
      category: "Macaron",
    },
    {
      id: 8,
      name: "Strawberry Pretzel",
      price: 4.99,
      category: "Pretzel",
    },
    {
      id: 9,
      name: "Butter Pecan Ice Cream",
      price: 2.99,
      category: "Ice Cream",
    },
    {
      id: 10,
      name: "Rocky Road Ice Cream",
      price: 2.99,
      category: "Ice Cream",
    },
    {
      id: 11,
      name: "Vanilla Macarons (5 Pack)",
      price: 11.99,
      category: "Macaron",
    },
    {
      id: 12,
      name: "Lemon Cupcakes (4 Pack)",
      price: 12.99,
      category: "Cupcake",
    },
  ];

  products.forEach(({id,name,price,category}) => {
    dessertCardContainer.innerHTML += `
      <div class="dessert-card">
        <h2>${name}</h2>
        <p class="dessert-price">$${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `
  })


  const addToCardButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCardButtons.forEach(button => {
    button.addEventListener('click',(e) => cart.addItem(e))
  })




function showCart(){
   
    
    cartContainer.style.display = cart.items.length > 0 
    ? 
    "block":
    alert('Dont have items in cart');

}

