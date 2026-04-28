// Floating Chatbot Aura Logic
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const closeChat = document.getElementById('close-chat');

chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
});

closeChat.addEventListener('click', () => {
    chatContainer.classList.remove('active');
});

// Cart and Checkout Modal Logic
let count = 0;
const cartCount = document.getElementById('cart-count');
const checkoutModal = document.getElementById('checkout-modal');

document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
    });
});

document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('modal-cart-count').innerText = count;
    checkoutModal.classList.add('active');
});

document.getElementById('close-modal').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});
