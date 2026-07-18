let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const totalEl = document.getElementById('total');
  
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} <span>₹${item.price}</span> <button onclick="removeItem(${index})">❌</button>`;
    cartItems.appendChild(li);
  });
  
  cartCount.innerText = cart.length;
  totalEl.innerText = total;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function toggleCart() {
  document.getElementById('cart').classList.toggle('active');
}

function placeOrder() {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  let orderSummary = "Your Order:\n";
  cart.forEach(item => {
    orderSummary += `${item.name} - ₹${item.price}\n`;
  });
  orderSummary += `\nTotal: ₹${total}\n\nThank you for ordering from Madisar Tales!`;
  alert(orderSummary);
  cart = [];
  total = 0;
  updateCart();
}
