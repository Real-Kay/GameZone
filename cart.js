javascript
// Function to add product to cart
function addToCart(productName, productPrice) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        // If product exists, increment quantity
        existingItem.quantity += 1;
    } else {
        // If product does not exist, add it to cart
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    // Update cart display
    updateCartDisplay();
    updateCartCount();
    updateOrderSummary();
}

// Function to update the order summary
function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    if (orderSummary) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const taxRate = 0.08;
        const tax = subtotal * taxRate;
        const total = subtotal + tax;
        orderSummary.innerHTML = `
            <h2>Order Summary</h2>
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <p>Tax (${taxRate*100}%): $${tax.toFixed(2)}</p>
            <p>Total: $${total.toFixed(2)}</p>
        `;
    }
}