let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name, price});
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name}: $${item.price}`;  // Corrected string interpolation
        cartItems.appendChild(li);
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0); // Calculate the total
    document.getElementById('total').textContent = total.toFixed(2);
}
