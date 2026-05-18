// ----- Product Catalog -----
const products = [
  {
    id: 1,
    name: "Robe Élara",
    price: 320,
    icon: "fa-dress",
    colors: ["#f28482", "#d4af37", "#b799b6"],
    description: "Soie fluide"
  },
  {
    id: 2,
    name: "Blouse Céleste",
    price: 195,
    icon: "fa-vest",
    colors: ["#84a59d", "#f6bd60", "#f7d1cd"],
    description: "Mousseline"
  },
  {
    id: 3,
    name: "Jupe Pastel",
    price: 240,
    icon: "fa-skirt",
    colors: ["#e6a8a8", "#d4af37", "#f28482"],
    description: "Crêpe"
  },
  {
    id: 4,
    name: "Manteau Doré",
    price: 590,
    icon: "fa-coat",
    colors: ["#d4af37", "#2c1e3f", "#b799b6"],
    description: "Laine & soie"
  },
  {
    id: 5,
    name: "Foulard Rêve",
    price: 130,
    icon: "fa-scarf",
    colors: ["#f6bd60", "#f28482", "#b799b6"],
    description: "Cachemire"
  },
  {
    id: 6,
    name: "Sac Mini Élara",
    price: 410,
    icon: "fa-bag-shopping",
    colors: ["#d4af37", "#f7d1cd", "#84a59d"],
    description: "Cuir velours"
  }
];

// ----- Cart State -----
let cart = [];

// ----- DOM Elements -----
const productGrid = document.getElementById('productGrid');
const cartCountSpan = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalSpan = document.getElementById('cartTotal');
const cartToggle = document.getElementById('cart-toggle');
const cartPanel = document.getElementById('cartPanel');
const checkoutButton = document.getElementById('checkoutButton');

// ----- Render Products -----
function renderProducts() {
  if (!productGrid) return;
  
  productGrid.innerHTML = products.map(product => {
    const colorCircles = product.colors.map(color => 
      `<span class="color-dot" style="background: ${color};"></span>`
    ).join('');
    
    return `
      <div class="product-card">
        <div class="product-icon">
          <i class="fas ${product.icon}"></i>
        </div>
        <h3>${product.name}</h3>
        <p style="color:#5e4b6b;">${product.description}</p>
        <div class="colors">${colorCircles}</div>
        <div class="price">${product.price} €</div>
        <button class="add-to-cart" data-id="${product.id}">
          <i class="fas fa-cart-plus"></i> Ajouter
        </button>
      </div>
    `;
  }).join('');

  // Attach event listeners to all "add to cart" buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const id = parseInt(button.getAttribute('data-id'), 10);
      addToCart(id);
    });
  });
}

// ----- Cart Functions -----
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      icon: product.icon,
      quantity: 1
    });
  }
  updateCartUI();
  animateCartIcon();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountSpan) cartCountSpan.textContent = totalItems;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="padding:15px; color:#5e4b6b;"><i class="far fa-heart"></i> Votre panier est vide, ajoutez de la couleur!</p>';
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <span style="display:flex; align-items:center; gap:12px;">
          <i class="fas ${item.icon}" style="font-size:1.8rem; color:#d4af37;"></i>
          <strong>${item.name}</strong> 
          <span style="background:#f7d1cd; padding:4px 12px; border-radius:20px;">x${item.quantity}</span>
        </span>
        <span style="display:flex; align-items:center; gap:18px;">
          <span style="font-weight:bold;">${(item.price * item.quantity)} €</span>
          <button class="remove-btn" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
        </span>
      </div>
    `).join('');

    // Attach remove events
    document.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        removeFromCart(id);
      });
    });
  }

  // Calculate total
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  if (cartTotalSpan) cartTotalSpan.textContent = `${total} €`;
}

function animateCartIcon() {
  const cartIconElement = document.querySelector('.cart-icon');
  if (cartIconElement) {
    cartIconElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
      cartIconElement.style.transform = 'scale(1)';
    }, 180);
  }
}

// ----- Event Listeners -----
if (cartToggle && cartPanel) {
  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (cartPanel.style.display === 'none') {
      cartPanel.style.display = 'block';
      cartPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
      cartPanel.style.display = 'none';
    }
  });
}

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('🌸 Votre panier est vide. Ajoutez des merveilles !');
      return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`✨ Merci pour votre commande chez Maison Élara ! Total : ${total} €. Nous préparons vos articles colorés avec soin.`);
    // Clear cart after checkout
    cart = [];
    updateCartUI();
    // Ensure cart panel visible
    if (cartPanel) cartPanel.style.display = 'block';
  });
}

// ----- Initialize Application -----
function init() {
  renderProducts();
  updateCartUI();
  
  // Ensure cart panel is visible by default
  if (cartPanel) {
    cartPanel.style.display = 'block';
  }
}

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add keyboard accessibility for cart toggle
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartPanel && cartPanel.style.display === 'block') {
    cartPanel.style.display = 'none';
  }
});

// Handle window resize for responsive cart display
window.addEventListener('resize', () => {
  if (window.innerWidth <= 480 && cartPanel && cartPanel.style.display === 'block') {
    cartPanel.scrollIntoView({ behavior: 'smooth' });
  }
});
