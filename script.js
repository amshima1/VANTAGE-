// ----- Product Catalog -----
const products = [
  {
    id: 1,
    name: "Élara Dress",
    price: 320,
    icon: "fa-dress",
    colors: ["#f28482", "#d4af37", "#b799b6"],
    description: "Flowing silk"
  },
  {
    id: 2,
    name: "Celestial Blouse",
    price: 195,
    icon: "fa-vest",
    colors: ["#84a59d", "#f6bd60", "#f7d1cd"],
    description: "Chiffon"
  },
  {
    id: 3,
    name: "Pastel Skirt",
    price: 240,
    icon: "fa-skirt",
    colors: ["#e6a8a8", "#d4af37", "#f28482"],
    description: "Crepe fabric"
  },
  {
    id: 4,
    name: "Golden Coat",
    price: 590,
    icon: "fa-coat",
    colors: ["#d4af37", "#2c1e3f", "#b799b6"],
    description: "Wool & silk"
  },
  {
    id: 5,
    name: "Dream Scarf",
    price: 130,
    icon: "fa-scarf",
    colors: ["#f6bd60", "#f28482", "#b799b6"],
    description: "Cashmere"
  },
  {
    id: 6,
    name: "Mini Élara Bag",
    price: 410,
    icon: "fa-bag-shopping",
    colors: ["#d4af37", "#f7d1cd", "#84a59d"],
    description: "Velvet leather"
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
        <div class="price">$${product.price}</div>
        <button class="add-to-cart" data-id="${product.id}">
          <i class="fas fa-cart-plus"></i> Add to Cart
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
  
  // Show notification
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  const itemToRemove = cart.find(item => item.id === productId);
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
  
  if (itemToRemove) {
    showNotification(`${itemToRemove.name} removed from cart`);
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountSpan) cartCountSpan.textContent = totalItems;

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="padding:15px; color:#5e4b6b;"><i class="far fa-heart"></i> Your cart is empty. Add some colorful items!</p>';
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <span style="display:flex; align-items:center; gap:12px;">
          <i class="fas ${item.icon}" style="font-size:1.8rem; color:#d4af37;"></i>
          <strong>${item.name}</strong> 
          <span style="background:#f7d1cd; padding:4px 12px; border-radius:20px;">x${item.quantity}</span>
        </span>
        <span style="display:flex; align-items:center; gap:18px;">
          <span style="font-weight:bold;">$${(item.price * item.quantity)}</span>
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
  if (cartTotalSpan) cartTotalSpan.textContent = `$${total}`;
}

function animateCartIcon() {
  const cartIconElement = document.querySelector('.cart-icon');
  if (cartIconElement) {
    cartIconElement.style.transform = 'scale(1.15)';
    cartIconElement.style.transition = 'transform 0.2s ease';
    setTimeout(() => {
      cartIconElement.style.transform = 'scale(1)';
    }, 200);
  }
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #d4af37, #f6bd60);
    color: white;
    padding: 15px 25px;
    border-radius: 30px;
    font-weight: 600;
    z-index: 1000;
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
    animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.5s forwards;
  `;
  notification.textContent = message;
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
    if (style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, 3000);
}

// ----- Event Listeners -----
if (cartToggle && cartPanel) {
  cartToggle.addEventListener('click', (e) => {
    e.preventDefault();
    if (cartPanel.style.display === 'none') {
      cartPanel.style.display = 'block';
      setTimeout(() => {
        cartPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } else {
      cartPanel.style.display = 'none';
    }
  });
}

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
      alert('🌸 Your cart is empty. Add some beautiful items first!');
      return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    alert(`✨ Thank you for your order at Maison Élara!\n\nTotal: $${total}\nItems: ${itemCount}\n\nWe're preparing your colorful pieces with care.`);
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
  
  // Add smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// Start the application when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Add keyboard accessibility for cart toggle
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && cartPanel && cartPanel.style.display === 'block') {
    cartPanel.style.display = 'none';
    showNotification('Cart closed');
  }
  
  // Press 'C' to toggle cart
  if (e.key === 'c' || e.key === 'C') {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (cartToggle) cartToggle.click();
    }
  }
});

// Handle window resize for responsive cart display
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (window.innerWidth <= 480 && cartPanel && cartPanel.style.display === 'block') {
      // Don't auto-scroll on every resize, only if cart was just opened
    }
  }, 250);
});

// Add quantity controls to cart items
function updateItemQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartUI();
    }
  }
}
