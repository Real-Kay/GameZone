// Initialize the cart as an empty array
let cart = [];

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
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const checkoutBtn = document.getElementById('checkout-btn');
    const cartCountElement = document.getElementById('cart-count');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty!</p>';
        checkoutBtn.disabled = true;
        cartCountElement.textContent = '0'; // Reset cart count to 0
    } else {
        cartItems.innerHTML = '';
        cart.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)} (Quantity: ${item.quantity})</p>
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            `;
            cartItems.appendChild(cartItem);
        });
        checkoutBtn.disabled = false;
        updateCartCount(); // Update cart count
    }
}

// Function to update the cart count
function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0); // Calculate total quantity
    document.getElementById('cart-count').textContent = totalCount; // Update cart count display
}

// Function to remove product from cart
function removeFromCart(productName) {
    // Find the item in the cart
    const itemIndex = cart.findIndex(item => item.name === productName);
    if (itemIndex > -1) {
        // Decrease quantity or remove item if quantity is 1
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1; // Decrease quantity
        } else {
            cart.splice(itemIndex, 1); // Remove item from cart
        }
    }
    // Update cart display
    updateCart();
}

// Function to checkout
function checkout() {
    // Check if cart is not empty
    if (cart.length > 0) {
        // Display thank you message
        alert('Thank you for your purchase!');
        // Clear cart
        cart = [];
        // Update cart display
        updateCart();
    } else {
        // Display cart empty message
        alert('Your cart is empty!');
    }
}

// Event listener for "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = parseFloat(button.getAttribute('data-price'));
            addToCart(productName, productPrice); // Call the addToCart function
        });
    });
});