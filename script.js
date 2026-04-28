// Side Menu Logic
const mobileMenu = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

mobileMenu.addEventListener('click', () => sideMenu.classList.add('active'));
closeMenu.addEventListener('click', () => sideMenu.classList.remove('active'));

// Cart Counter Logic
let count = 0;
const cartCountDisplay = document.getElementById('cart-count');
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        cartCountDisplay.innerText = count;
    });
});

// Chat Logic
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-container');
chatToggle.addEventListener('click', () => chatBox.classList.toggle('active'));
document.getElementById('close-chat').addEventListener('click', () => chatBox.classList.remove('active'));
