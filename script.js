let count = 0;
const cartCount = document.getElementById('cart-count');
const modalCartCount = document.getElementById('modal-cart-count');
const checkoutModal = document.getElementById('checkout-modal');

// Cart Interaction
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
    });
});

// Checkout Display
document.getElementById('cart-btn').addEventListener('click', () => {
    modalCartCount.innerText = count;
    checkoutModal.classList.add('active');
});
document.getElementById('close-modal').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Chatbot Display
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
});
document.getElementById('close-chat').addEventListener('click', () => {
    chatContainer.classList.remove('active');
});
