// Cart and Checkout Logic
let count = 0;
const cartCount = document.getElementById('cart-count');
const modalCartCount = document.getElementById('modal-cart-count');
const checkoutModal = document.getElementById('checkout-modal');

document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        btn.innerText = "Added";
        setTimeout(() => btn.innerText = "Add to Cart", 1000);
    });
});

document.getElementById('cart-btn').addEventListener('click', () => {
    modalCartCount.innerText = count;
    checkoutModal.classList.add('active');
});

document.getElementById('close-modal').addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Aura AI Bot Logic
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

chatToggle.addEventListener('click', () => chatContainer.classList.toggle('active'));
document.getElementById('close-chat').addEventListener('click', () => chatContainer.classList.remove('active'));

document.getElementById('send-btn').addEventListener('click', () => {
    const text = userInput.value;
    if (!text) return;
    
    const userMsg = document.createElement('div');
    userMsg.className = "user-msg";
    userMsg.innerText = text;
    chatBox.appendChild(userMsg);
    userInput.value = "";

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = "bot-msg";
        botMsg.innerText = "I'm Aura. You can pay for your items by clicking the bag icon!";
        chatBox.appendChild(botMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
});
