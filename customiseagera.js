// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const carImage = document.getElementById('carImage');

    // Add event listeners for each button
    document.getElementById('whiteButton').addEventListener('click', function() {
        // Change this to the path of your red car image
        carImage.src = 'images/agera_red.png';
    });
    document.getElementById('grayButton').addEventListener('click', function() {
        // Change this to the path of your red car image
        carImage.src = 'images/agera_gray.png';
    });
    document.getElementById('brownButton').addEventListener('click', function() {
        // Change this to the path of your red car image
        carImage.src = 'images/agera_brown.png';
    });

});

let itemCount = 0;
let totalPrice = 0.00;
let cartItems = new Set();

function toggleCartItem(productId, price) {
    if (cartItems.has(productId)) {
        // Remove item from cart
        cartItems.delete(productId);
        itemCount--;
        totalPrice -= price;
        alert('Item removed from cart');
    } else {
        // Add item to cart
        cartItems.add(productId);
        itemCount++;
        totalPrice += price;
        alert('Item added to cart');
    }

    // Update cart counter
    document.getElementById('itemCount').textContent = itemCount;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}
function clearCart() {
    cartItems.clear();
    itemCount = 0;
    totalPrice = 0.00;

    alert('Cart cleared');

    // Update cart counter
    document.getElementById('itemCount').textContent = itemCount;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);}

function checkout(){
    alert("Items added to cart. Make sure to enter this amount during bidding checkout :)");

    clearCart();
}