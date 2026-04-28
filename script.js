const menuBtn = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const overlay = document.querySelector('#overlay');
const cartCount = document.getElementById('cart-count');
let count = 0;

function toggleMenu() {
    navList.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Handle Cart Updates
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        button.innerText = "Added";
        button.style.background = "#c5a059";
        setTimeout(() => {
            button.innerText = "Add to Cart";
            button.style.background = "#121212";
        }, 1200);
    });
});
