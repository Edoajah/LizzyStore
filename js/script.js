// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// Products Data
const products = [
    //mythical fruits
    {
        id: 1,
        name: "Dough Fruit",
        type: "Mythical",
        image: "images/dough.png",
        price: 15000,
        stock: 1    
    },
    {
        id: 2,
        name: "Shadow Fruit",
        type: "Mythical",
        image: "images/shadow.png",
        price: 3000,
        stock: 1
    },
    {
        id: 3,
        name: "Venom Fruit",
        type: "Mythical",
        image: "images/venom.png",
        price: 5000,
        stock: 1
    },
    {
        id: 4,
        name: "Control Fruit",
        type: "Mythical",
        image: "images/control.png",
        price: 9000,
        stock: 1
    },
    {
        id: 5,
        name: "Leopard Fruit",
        type: "Mythical",
        image: "images/leopard.png",
        price: 17000,
        stock: 1
    },
    {
        id: 6,
        name: "Kitsune Fruit",
        type: "Mythical",
        image: "images/kitsune.png",
        price: 55000,
        stock: 1
    },
    {
        id: 7,
        name: "Gas Fruit",
        type: "Mythical",
        image: "images/gas.png",
        price: 20000,
        stock: 1
    },
    {
        id: 8,
        name: "T-rex Fruit",
        type: "Mythical",
        image: "images/t-rex.png",
        price: 10000,
        stock: 1
    },
    {
        id: 9,
        name: "Mammoth Fruit",
        type: "Mythical",
        image: "images/mammoth.png",
        price: 10000,
        stock: 1
    },
    {
        id: 10,
        name: "Spirit Fruit",
        type: "Mythical",
        image: "images/spirit.png",
        price: 9000,
        stock: 1
    },
    {
        id: 11,
        name: "Yeti Fruit",
        type: "Mythical",
        image: "images/yeti.png",
        price: 30000,
        stock: 1
    },
    //legendary fruits
    {
        id: 12,
        name: "Portal Fruit",
        type: "Legendary",
        image: "images/portal.png",
        price: 6000,
        stock: 1
    },
    {
        id: 13,
        name: "Pain Fruit",
        type: "Legendary",
        image: "images/pain.png",
        price: 10000,
        stock: 1
    },
    {
        id: 14,
        name: "Buddha Fruit",
        type: "Legendary",
        image: "images/budha.png",
        price: 3000,
        stock: 1
    },
    {
        id: 15,
        name: "Phoenix Fruit",
        type: "Legendary",
        image: "images/phoenix.png",
        price: 3000,
        stock: 1
    },
    {
        id: 16,
        name: "Quake Fruit",
        type: "Legendary",
        image: "images/quake.png",
        price: 2000,
        stock: 1
    },
    {
        id: 17,
        name: "Lightning Fruit",
        type: "Legendary",
        image: "images/lightning.png",
        price: 12000,
        stock: 1
    },
    {
        id: 18,
        name: "Blizzard Fruit",
        type: "Legendary",
        image: "images/blizzard.png",
        price: 3000,
        stock: 1
    },
    {
        id: 19,
        name: "Love Fruit",
        type: "Legendary",
        image: "images/Love.png",
        price: 3000,
        stock: 1
    },
    {
        id: 20,
        name: "Spider Fruit",
        type: "Legendary",
        image: "images/spider.png",
        price: 3000,
        stock: 1
    },
    {
        id: 21,
        name: "Sound Fruit",
        type: "Legendary",
        image: "images/sound.png",
        price: 5000,
        stock: 1
    },
    //rare fruits
    {
        id: 22,
        name: "Ice Fruit",
        type: "Rare",
        image: "images/ice.png",
        price: 1000,
        stock: 34
    },
    {
        id: 23,
        name: "Light Fruit",
        type: "Rare",
        image: "images/light.png",
        price: 1000,
        stock: 35
    },
    {
        id: 24,
        name: "Dark Fruit",
        type: "Rare",
        image: "images/dark.png",
        price: 1000,
        stock: 28
    },
    {
        id: 25,
        name: "Magma Fruit",
        type: "Rare",
        image: "images/magma.png",
        price: 1000,
        stock: 0
    }
];

// Cart Array
let cart = [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
});

// Get Stock Status
function getStockStatus(stock) {
    if (stock === 0) {
        return { text: 'Sold Out', class: 'sold-out' };
    } else if (stock <= 5) {
        return { text: `Limited (${stock} left)`, class: 'limited' };
    } else {
        return { text: 'In Stock', class: 'in-stock' };
    }
}

// Render Products
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const stockStatus = getStockStatus(product.stock);
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.stock === 0 ? 'out-of-stock' : ''}`;
        productCard.innerHTML = `
            <div class="product-image ${product.type}">
                <img src="${product.image}" alt="${product.name}" style="width: 120px; height: 120px; object-fit: contain;">
                <span class="product-badge">${product.type}</span>
                <span class="stock-badge ${stockStatus.class}">${stockStatus.text}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-footer">
                    <span class="product-price">Rp ${product.price.toLocaleString('id-ID')}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                        ${product.stock === 0 ? 'Sold Out' : 'Add'}
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter Products
function setupEventListeners() {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            if (filter === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.type === filter);
                renderProducts(filtered);
            }
        });
    });

    // TAMBAH INI - Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Load saved theme
    themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});

    // Cart toggle
    document.getElementById('cartIcon').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.add('active');
    });

    document.getElementById('closeCart').addEventListener('click', () => {
        document.getElementById('cartSidebar').classList.remove('active');
    });

    // Checkout
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (product.stock === 0) {
        alert('Maaf, produk ini habis!');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity >= product.stock) {
            alert(`Stok hanya tersedia ${product.stock} pcs!`);
            return;
        }
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    
    // Animation feedback
    const cartIcon = document.getElementById('cartIcon');
    cartIcon.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// Update Cart
function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = 'Rp 0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image ${item.type}">
                <img src="${item.image}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: contain;">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})">−</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="qty-btn" onclick="increaseQuantity(${item.id})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Increase Quantity
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (item && product) {
        if (item.quantity >= product.stock) {
            alert(`Stok hanya tersedia ${product.stock} pcs!`);
            return;
        }
        item.quantity += 1;
        updateCart();
    }
}

// Decrease Quantity
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(productId);
            return;
        }
        updateCart();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang masih kosong!');
        return;
    }

    let message = '🛒 *ORDER BARU - LizzyStore*\n\n';
    let total = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `- ${item.name}\n`;
        message += `  ${item.quantity}x @ Rp ${item.price.toLocaleString('id-ID')} = Rp ${subtotal.toLocaleString('id-ID')}\n\n`;
    });
    
    message += `💰 *Total: Rp ${total.toLocaleString('id-ID')}*\n\nSilakan konfirmasi pesanan ini!`;
    
    // Your WhatsApp number
    const phoneNumber = '6289522718453';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappURL, '_blank');
    
    // Clear cart after checkout
    cart = [];
    updateCart();
    document.getElementById('cartSidebar').classList.remove('active');
}