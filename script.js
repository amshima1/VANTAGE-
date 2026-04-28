// Sidebar Elements
const menuToggle = document.getElementById('mobile-menu');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

// Sidebar Logic
menuToggle.addEventListener('click', () => sideMenu.classList.add('active'));
closeMenu.addEventListener('click', () => sideMenu.classList.remove('active'));

// Chatbot Logic
const chatToggle = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-container');
chatToggle.addEventListener('click', () => chatBox.classList.toggle('active'));
document.getElementById('close-chat').addEventListener('click', () => chatBox.classList.remove('active'));

// Cart Counter Logic
let count = 0;
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        count++;
        document.getElementById('cart-count').innerText = count;
    });
});
