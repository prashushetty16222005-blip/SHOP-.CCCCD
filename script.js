const INITIAL_ITEMS = [
    // --- Groceries & Staples ---
    { sku: "201", nameEn: "Sona Masuri Rice (5kg)", nameKannada: "ಸೋನಾ ಮಸೂರಿ ಅಕ್ಕಿ (೫ಕೆಜಿ)", category: "Groceries & Staples", price: 320, halfPrice: 160, stock: 40 },
    { sku: "202", nameEn: "Toor Dal (1kg)", nameKannada: "ತುಗರಿ ಬೇಳೆ (೧ಕೆಜಿ)", category: "Groceries & Staples", price: 145, halfPrice: 75, stock: 50 },
    { sku: "203", nameEn: "Moong Dal (1kg)", nameKannada: "ಹೆಸರು ಬೇಳೆ (೧ಕೆಜಿ)", category: "Groceries & Staples", price: 130, halfPrice: 65, stock: 35 },
    { sku: "204", nameEn: "Aashirvaad Atta (5kg)", nameKannada: "ಗೋಧಿ ಹಿಟ್ಟು (೫ಕೆಜಿ)", category: "Groceries & Staples", price: 240, halfPrice: 125, stock: 45 },
    { sku: "205", nameEn: "Sugar (1kg)", nameKannada: "ಸಕ್ಕರೆ (೧ಕೆಜಿ)", category: "Groceries & Staples", price: 44, halfPrice: null, stock: 90 },
    { sku: "206", nameEn: "Tata Salt (1kg)", nameKannada: "ಉಪ್ಪು (೧ಕೆಜಿ)", category: "Groceries & Staples", price: 28, halfPrice: null, stock: 100 },
    { sku: "207", nameEn: "Sunflower Cooking Oil (1L)", nameKannada: "ಅಡುಗೆ ಎಣ್ಣೆ (೧ಲೀ)", category: "Groceries & Staples", price: 140, halfPrice: null, stock: 60 },
    { sku: "208", nameEn: "Ragi Malt / Flour (1kg)", nameKannada: "ರಾಗಿ ಹಿಟ್ಟು (೧ಕೆಜಿ)", category: "Groceries & Staples", price: 65, halfPrice: null, stock: 30 },

    // --- Tobacco & Smoking ---
    { sku: "101", nameEn: "Ganesh", nameKannada: "ಗಣೇಶ್", category: "Tobacco & Smoking", price: 480, halfPrice: 240, stock: 40 },
    { sku: "102", nameEn: "9 No", nameKannada: "೯ ನಂ", category: "Tobacco & Smoking", price: 410, halfPrice: 205, stock: 35 },
    { sku: "103", nameEn: "9 No Small", nameKannada: "೯ ನಂ ಸಣ್ಣ", category: "Tobacco & Smoking", price: 215, halfPrice: 110, stock: 0 },
    { sku: "104", nameEn: "Bigg Bieddi", nameKannada: "ಬಿಗ್ ಬೀಡಿ", category: "Tobacco & Smoking", price: 265, halfPrice: 135, stock: 60 },
    { sku: "105", nameEn: "Player's", nameKannada: "ಪ್ಲೇಯರ್ಸ್", category: "Tobacco & Smoking", price: 107, halfPrice: null, stock: 45 },
    { sku: "106", nameEn: "Birstal", nameKannada: "ಬರ್ಸ್ಟಲ್", category: "Tobacco & Smoking", price: 82, halfPrice: null, stock: 30 },
    { sku: "107", nameEn: "Kashaish(5)", nameKannada: "ಕಶಾಯಿಶ್ (೫)", category: "Tobacco & Smoking", price: 85, halfPrice: null, stock: 5 },
    { sku: "108", nameEn: "Anni", nameKannada: "ಅನ್ನಿ", category: "Tobacco & Smoking", price: 50, halfPrice: null, stock: 25 },
    { sku: "109", nameEn: "Google", nameKannada: "ಗೂಗಲ್", category: "Tobacco & Smoking", price: 35, halfPrice: null, stock: 80 },
    { sku: "110", nameEn: "Sope", nameKannada: "ಸೋಪ್", category: "Tobacco & Smoking", price: 27, halfPrice: null, stock: 0 },
    { sku: "111", nameEn: "Indment", nameKannada: "ಇಂಡ್‌ಮೆಂಟ್", category: "Tobacco & Smoking", price: 114, halfPrice: null, stock: 20 },
    { sku: "112", nameEn: "Black", nameKannada: "ಬ್ಲಾಕ್", category: "Tobacco & Smoking", price: 100, halfPrice: null, stock: 50 },
    { sku: "113", nameEn: "Chinikan", nameKannada: "ಚಿನಿಕಾನ್", category: "Tobacco & Smoking", price: 350, halfPrice: null, stock: 15 },
    { sku: "114", nameEn: "Bira", nameKannada: "ಬೀರಾ", category: "Tobacco & Smoking", price: 50, halfPrice: null, stock: 40 },
    { sku: "115", nameEn: "Crane(2)", nameKannada: "ಕ್ರೇನ್ (೨)", category: "Tobacco & Smoking", price: 105, halfPrice: null, stock: 30 },
    { sku: "116", nameEn: "Crane(5)", nameKannada: "ಕ್ರೇನ್ (೫)", category: "Tobacco & Smoking", price: 130, halfPrice: null, stock: 25 },
    { sku: "117", nameEn: "Crane(10)", nameKannada: "ಕ್ರೇನ್ (೧೦)", category: "Tobacco & Smoking", price: 175, halfPrice: null, stock: 20 },
    { sku: "118", nameEn: "Chinikan(small)", nameKannada: "ಚಿನಿಕಾನ್ (ಸಣ್ಣ)", category: "Tobacco & Smoking", price: 135, halfPrice: null, stock: 35 },
    { sku: "119", nameEn: "Anurag", nameKannada: "ಅನುರಾಗ್", category: "Tobacco & Smoking", price: 42, halfPrice: null, stock: 40 },
    { sku: "120", nameEn: "Nelu Gold", nameKannada: "ನೆಲು ಗೋಲ್ಡ್", category: "Tobacco & Smoking", price: 50, halfPrice: null, stock: 50 },
    { sku: "121", nameEn: "Vimal(big)", nameKannada: "ವಿಮಲ್ (ದೊಡ್ಡ)", category: "Tobacco & Smoking", price: 180, halfPrice: null, stock: 15 },
    { sku: "124", nameEn: "Edition", nameKannada: "ಎಡಿಷನ್", category: "Tobacco & Smoking", price: 260, halfPrice: null, stock: 25 },
    { sku: "125", nameEn: "Total", nameKannada: "ಟೋಟಲ್", category: "Tobacco & Smoking", price: 60, halfPrice: null, stock: 30 },
    { sku: "127", nameEn: "Rmd Small", nameKannada: "ಆರ್‌ಎಂಡಿ ಸಣ್ಣ", category: "Tobacco & Smoking", price: 985, halfPrice: 495, stock: 12 },
    { sku: "128", nameEn: "Rmd Big", nameKannada: "ಆರ್‌ಎಂಡಿ ದೊಡ್ಡ", category: "Tobacco & Smoking", price: 1225, halfPrice: 615, stock: 10 },
    { sku: "137", nameEn: "786", nameKannada: "೭೮೬", category: "Tobacco & Smoking", price: 320, halfPrice: null, stock: 20 },
    { sku: "138", nameEn: "Kashaish(2)", nameKannada: "ಕಶಾಯಿಶ್ (೨)", category: "Tobacco & Smoking", price: 50, halfPrice: null, stock: 40 },
    { sku: "139", nameEn: "Kashaish(1)", nameKannada: "ಕಶಾಯಿಶ್ (೧)", category: "Tobacco & Smoking", price: 50, halfPrice: null, stock: 40 },
    { sku: "140", nameEn: "Light King", nameKannada: "ಲೈಟ್ ಕಿಂಗ್", category: "Tobacco & Smoking", price: 223, halfPrice: null, stock: 25 },
    { sku: "141", nameEn: "King", nameKannada: "ಕಿಂಗ್", category: "Tobacco & Smoking", price: 223, halfPrice: null, stock: 25 },
    { sku: "142", nameEn: "Gold", nameKannada: "ಗೋಲ್ಡ್", category: "Tobacco & Smoking", price: 118, halfPrice: null, stock: 30 },
    { sku: "143", nameEn: "Vimal(small)", nameKannada: "ವಿಮಲ್ (ಸಣ್ಣ)", category: "Tobacco & Smoking", price: 123, halfPrice: null, stock: 25 },
    { sku: "144", nameEn: "Super", nameKannada: "ಸೂಪರ್", category: "Tobacco & Smoking", price: 122, halfPrice: null, stock: 30 },

    // --- Snacks & Biscuits ---
    { sku: "301", nameEn: "Parle-g", nameKannada: "ಪಾರ್ಲೆ-ಜಿ", category: "Snacks & Biscuits", price: 108, halfPrice: null, stock: 80 },
    { sku: "302", nameEn: "Happy", nameKannada: "ಹ್ಯಾಪಿ", category: "Snacks & Biscuits", price: 108, halfPrice: null, stock: 70 },
    { sku: "303", nameEn: "Milk Biscuits", nameKannada: "ಮಿಲ್ಕ್ ಬಿಸ್ಕತ್ತು", category: "Snacks & Biscuits", price: 108, halfPrice: null, stock: 50 },
    { sku: "304", nameEn: "Mari Gold", nameKannada: "ಮಾರಿ ಗೋಲ್ಡ್", category: "Snacks & Biscuits", price: 55, halfPrice: null, stock: 45 },
    { sku: "305", nameEn: "Mom's Magic", nameKannada: "ಮಾಮ್ಸ್ ಮ್ಯಾಜಿಕ್", category: "Snacks & Biscuits", price: 54, halfPrice: null, stock: 40 },
    { sku: "306", nameEn: "Gooday", nameKannada: "ಗುಡ್ ಡೇ", category: "Snacks & Biscuits", price: 54, halfPrice: null, stock: 55 },
    { sku: "307", nameEn: "Bounce", nameKannada: "ಬೌನ್ಸ್", category: "Snacks & Biscuits", price: 54, halfPrice: null, stock: 35 },
    { sku: "308", nameEn: "Tiger", nameKannada: "ಟೈಗರ್", category: "Snacks & Biscuits", price: 108, halfPrice: null, stock: 50 },

    // --- Beverages & Dairy ---
    { sku: "401", nameEn: "Red Label Tea Powder (250g)", nameKannada: "ಚಹಾ ಪುಡಿ (೨೫೦ಗ್ರಾಂ)", category: "Beverages & Dairy", price: 145, halfPrice: null, stock: 40 },
    { sku: "402", nameEn: "Bru Instant Coffee (50g)", nameKannada: "ಕಾಫಿ ಪೌಡರ್", category: "Beverages & Dairy", price: 90, halfPrice: null, stock: 30 },
    { sku: "403", nameEn: "Tata Tea Gold (250g)", nameKannada: "ಟಾಟಾ ಟೀ ಗೋಲ್ಡ್", category: "Beverages & Dairy", price: 165, halfPrice: null, stock: 25 },

    // --- Household & Personal Care ---
    { sku: "501", nameEn: "Matchboxes", nameKannada: "ಅಂಗೊತ್ತಿ ಪೆಟ್ಟಿಗೆ", category: "Household & Personal", price: 75, halfPrice: null, stock: 100 },
    { sku: "502", nameEn: "Shanka Matchbox", nameKannada: "ಶಂಖ ಪೆಟ್ಟಿಗೆ", category: "Household & Personal", price: 158, halfPrice: null, stock: 40 },
    { sku: "503", nameEn: "Good Knight", nameKannada: "ಗುಡ್ ನೈಟ್", category: "Household & Personal", price: 40, halfPrice: null, stock: 60 },
    { sku: "504", nameEn: "Surf Excel Detergent (1kg)", nameKannada: "ಸರ್ಫ್ ಎಕ್ಸೆಲ್ (೧ಕೆಜಿ)", category: "Household & Personal", price: 130, halfPrice: null, stock: 35 },
    { sku: "505", nameEn: "Lifebuoy Soap", nameKannada: "ಲೈಫ್‌ಬಾಯ್ ಸೋಪ್", category: "Household & Personal", price: 34, halfPrice: null, stock: 50 }
];

let currentLanguage = 'en';
let inventory = JSON.parse(localStorage.getItem('dads_groceries_inventory')) || INITIAL_ITEMS;
let categories = JSON.parse(localStorage.getItem('dads_groceries_categories')) || [
    "Groceries & Staples",
    "Tobacco & Smoking",
    "Snacks & Biscuits",
    "Beverages & Dairy",
    "Household & Personal"
];

let cart = [];
let transactions = JSON.parse(localStorage.getItem('dads_groceries_transactions')) || [];
let expenses = JSON.parse(localStorage.getItem('dads_groceries_expenses')) || [
    { id: 'EXP-101', time: new Date().toLocaleDateString(), title: 'Shop Electricity Bill', amount: 450 },
    { id: 'EXP-102', time: new Date().toLocaleDateString(), title: 'Morning Tea & Snacks', amount: 120 }
];

let activeCategory = 'All';
let selectedPaymentMode = 'Cash';
let currentSkuInput = '';
let pendingTransaction = null;

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryTabs();
    renderCategoryDropdowns();
    renderCategoriesTable();
    renderPOSCatalog();
    renderAdminInventory();
    renderSoldOutList();
    renderExpensesTable();
    updateAnalyticsKPIs();
    renderTransactionsTable();
    checkLowStockAlerts();
});

function switchPortal(portal) {
    document.querySelectorAll('.portal-view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    if (portal === 'pos') {
        document.getElementById('portal-pos').classList.add('active');
        document.getElementById('btn-pos-portal').classList.add('active');
    } else {
        document.getElementById('portal-admin').classList.add('active');
        document.getElementById('btn-admin-portal').classList.add('active');
        renderAdminInventory();
        renderSoldOutList();
        renderExpensesTable();
        renderCategoriesTable();
        updateAnalyticsKPIs();
    }
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.admin-tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(`admin-tab-${tabName}`).classList.add('active');
    event.currentTarget.classList.add('active');

    if (tabName === 'sold-out') renderSoldOutList();
    if (tabName === 'expenses') renderExpensesTable();
    if (tabName === 'categories') renderCategoriesTable();
    if (tabName === 'analytics') updateAnalyticsKPIs();
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');

    document.querySelectorAll('[data-en]').forEach(el => {
        if (lang === 'kn' && el.getAttribute('data-kn')) {
            el.innerText = el.getAttribute('data-kn');
        } else if (lang === 'en' && el.getAttribute('data-en')) {
            el.innerText = el.getAttribute('data-en');
        }
    });

    renderPOSCatalog();
}

// Category Management Functions
function renderCategoryTabs() {
    const tabsContainer = document.getElementById('pos-category-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = `
        <button class="cat-tab ${activeCategory === 'All' ? 'active' : ''}" onclick="filterCategory('All', event)" data-en="All Items" data-kn="ಎಲ್ಲಾ ವಸ್ತುಗಳು">All Items</button>
    `;
    categories.forEach(cat => {
        tabsContainer.innerHTML += `
            <button class="cat-tab ${activeCategory === cat ? 'active' : ''}" onclick="filterCategory('${cat}', event)">${cat}</button>
        `;
    });
}

function renderCategoryDropdowns() {
    const newSelect = document.getElementById('new-item-category');
    const editSelect = document.getElementById('edit-category');

    if (newSelect) {
        newSelect.innerHTML = '';
        categories.forEach(cat => {
            newSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }

    if (editSelect) {
        editSelect.innerHTML = '';
        categories.forEach(cat => {
            editSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        });
    }
}

function renderCategoriesTable() {
    const tbody = document.getElementById('admin-categories-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    categories.forEach(cat => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${cat}</strong></td>
                <td>
                    <button onclick="deleteCategory('${cat}')" class="btn-clear-cart" style="padding:4px 8px;"><i class="fa-solid fa-trash"></i> Delete</button>
                </td>
            </tr>
        `;
    });
}

function handleAddCategory(event) {
    event.preventDefault();
    const name = document.getElementById('new-category-name').value.trim();
    if (!name) return;

    if (categories.includes(name)) {
        alert("Category already exists!");
        return;
    }

    categories.push(name);
    localStorage.setItem('dads_groceries_categories', JSON.stringify(categories));
    renderCategoryTabs();
    renderCategoryDropdowns();
    renderCategoriesTable();
    document.getElementById('category-form').reset();
    alert("Category successfully added!");
}

function deleteCategory(catName) {
    if (confirm(`Are you sure you want to delete category "${catName}"?`)) {
        categories = categories.filter(c => c !== catName);
        localStorage.setItem('dads_groceries_categories', JSON.stringify(categories));
        renderCategoryTabs();
        renderCategoryDropdowns();
        renderCategoriesTable();
    }
}

function renderPOSCatalog() {
    const grid = document.getElementById('pos-items-grid');
    const searchTerm = document.getElementById('pos-search').value.toLowerCase();
    grid.innerHTML = '';

    const filtered = inventory.filter(item => {
        const matchesCategory = (activeCategory === 'All' || item.category === activeCategory);
        const matchesSearch = item.nameEn.toLowerCase().includes(searchTerm) || 
                              item.nameKannada.toLowerCase().includes(searchTerm) || 
                              item.sku.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    document.getElementById('catalog-count-badge').innerText = `${filtered.length} items`;

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">No items found.</div>`;
        return;
    }

    filtered.forEach(item => {
        const displayName = currentLanguage === 'kn' ? item.nameKannada : item.nameEn;
        const card = document.createElement('div');
        card.className = 'pos-item-card';
        card.innerHTML = `
            <div>
                <div class="pos-item-header-row">
                    <span class="sku-tag">SKU: ${item.sku}</span>
                    <span class="stock-tag ${item.stock === 0 ? 'low' : item.stock < 15 ? 'low' : ''}">${item.stock === 0 ? 'Out of Stock' : 'Stock: ' + item.stock}</span>
                </div>
                <div class="pos-item-title">${displayName}</div>
                <div class="pos-item-prices">
                    <div class="price-badge" onclick="addToCart('${item.sku}', 'full', event)">
                        <span>Full</span> <strong>₹${item.price}</strong>
                    </div>
                    ${item.halfPrice ? `
                    <div class="price-badge half" onclick="addToCart('${item.sku}', 'half', event)">
                        <span>Half</span> <strong>₹${item.halfPrice}</strong>
                    </div>` : ''}
                </div>
            </div>
        `;
        card.onclick = () => addToCart(item.sku, 'full');
        grid.appendChild(card);
    });
}

function filterCategory(cat, event) {
    activeCategory = cat;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    event.currentTarget.classList.add('active');
    renderPOSCatalog();
}

function filterPOSCatalog() {
    renderPOSCatalog();
}

function addToCart(sku, type = 'full', event = null) {
    if (event) event.stopPropagation();
    const item = inventory.find(i => i.sku === sku);
    if (!item) return;

    if (item.stock <= 0) {
        alert("Warning: This item is currently out of stock!");
    }

    const price = type === 'half' ? item.halfPrice : item.price;
    const cartKey = `${sku}-${type}`;
    const existing = cart.find(c => c.cartKey === cartKey);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            cartKey,
            sku: item.sku,
            name: currentLanguage === 'kn' ? item.nameKannada : item.nameEn,
            price,
            type,
            qty: 1
        });
    }
    renderCart();
}

function updateCartQty(cartKey, change) {
    const item = cart.find(c => c.cartKey === cartKey);
    if (!item) return;
    item.qty += change;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.cartKey !== cartKey);
    }
    renderCart();
}

function setCustomCartQty(cartKey, value) {
    const item = cart.find(c => c.cartKey === cartKey);
    if (!item) return;
    let newQty = parseInt(value);
    if (isNaN(newQty) || newQty <= 0) {
        newQty = 1;
    }
    item.qty = newQty;
    calculateCartTotals();
}

function clearCart() {
    cart = [];
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cart-items-list');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = `<div class="empty-cart-msg">No items added yet. Click items from catalog.</div>`;
        calculateCartTotals();
        return;
    }

    cart.forEach(item => {
        const row = document.createElement('div');
        row.className = 'cart-item-row';
        row.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name} ${item.type === 'half' ? '(Half)' : ''}</h4>
                <span>₹${item.price} × ${item.qty} = <strong>₹${item.price * item.qty}</strong></span>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateCartQty('${item.cartKey}', -1)">-</button>
                <input type="number" class="cart-qty-input" value="${item.qty}" min="1" onchange="setCustomCartQty('${item.cartKey}', this.value)" onclick="this.select()">
                <button class="qty-btn" onclick="updateCartQty('${item.cartKey}', 1)">+</button>
            </div>
        `;
        list.appendChild(row);
    });

    calculateCartTotals();
}

function calculateCartTotals() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discountPercent = parseFloat(document.getElementById('cart-discount-input').value) || 0;
    let grandTotal = subtotal - ((subtotal * discountPercent) / 100);

    document.getElementById('cart-subtotal').innerText = `₹${subtotal.toFixed(2)}`;
    document.getElementById('cart-grand-total').innerText = `₹${grandTotal.toFixed(2)}`;
}

function setPaymentMode(mode) {
    selectedPaymentMode = mode;
    document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.pay-btn[data-mode="${mode}"]`).classList.add('active');
}

function toggleQuickPad() {
    document.getElementById('sku-quick-pad').classList.toggle('hidden');
}

function appendSku(num) {
    currentSkuInput += num;
    document.getElementById('sku-display').innerText = currentSkuInput;
}

function clearSku() {
    currentSkuInput = '';
    document.getElementById('sku-display').innerText = '0';
}

function searchSku() {
    const item = inventory.find(i => i.sku === currentSkuInput);
    if (item) {
        addToCart(item.sku, 'full');
        toggleQuickPad();
        clearSku();
    } else {
        alert("Item SKU not found!");
    }
}

function checkoutOrder() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let discountPercent = parseFloat(document.getElementById('cart-discount-input').value) || 0;
    let grandTotal = subtotal - ((subtotal * discountPercent) / 100);

    pendingTransaction = {
        orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
        rawTime: new Date().toISOString(),
        time: new Date().toLocaleString(),
        items: [...cart],
        mode: selectedPaymentMode,
        total: grandTotal.toFixed(2)
    };

    if (selectedPaymentMode === 'UPI') {
        document.getElementById('upi-qr-amount').innerText = `₹${pendingTransaction.total}`;
        document.getElementById('upi-qr-modal').classList.remove('hidden');
    } else {
        finalizeCheckout(pendingTransaction);
    }
}

function confirmUpiPayment() {
    document.getElementById('upi-qr-modal').classList.add('hidden');
    if (pendingTransaction) {
        finalizeCheckout(pendingTransaction);
    }
}

function closeUpiModal() {
    document.getElementById('upi-qr-modal').classList.add('hidden');
    pendingTransaction = null;
}

function finalizeCheckout(tx) {
    tx.items.forEach(cartItem => {
        let invItem = inventory.find(i => i.sku === cartItem.sku);
        if (invItem) {
            invItem.stock = Math.max(0, invItem.stock - cartItem.qty);
        }
    });
    saveInventory();
    renderPOSCatalog();
    checkLowStockAlerts();

    transactions.unshift(tx);
    localStorage.setItem('dads_groceries_transactions', JSON.stringify(transactions));
    renderTransactionsTable();
    updateAnalyticsKPIs();

    showReceiptModal(tx);
    cart = [];
    renderCart();
    pendingTransaction = null;
}

function showReceiptModal(tx) {
    document.getElementById('receipt-meta-info').innerHTML = `
        <p>Order ID: ${tx.orderId}</p>
        <p>Date: ${tx.time}</p>
        <p>Payment: ${tx.mode}</p>
    `;

    const tbody = document.getElementById('receipt-items-tbody');
    tbody.innerHTML = '';
    tx.items.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.qty}</td>
                <td>${item.price}</td>
                <td>${item.price * item.qty}</td>
            </tr>
        `;
    });

    document.getElementById('receipt-totals-section').innerHTML = `
        <strong>Grand Total: ₹${tx.total}</strong>
    `;

    document.getElementById('receipt-modal').classList.remove('hidden');
}

function closeReceiptModal() {
    document.getElementById('receipt-modal').classList.add('hidden');
}

// ================= ADMIN FUNCTIONS =================
function renderAdminInventory() {
    const tbody = document.getElementById('admin-inventory-tbody');
    const searchTerm = document.getElementById('admin-search-input').value.toLowerCase();
    tbody.innerHTML = '';

    const filtered = inventory.filter(i => i.nameEn.toLowerCase().includes(searchTerm) || i.sku.includes(searchTerm));

    filtered.forEach(item => {
        tbody.innerHTML += `
            <tr>
                <td>${item.sku}</td>
                <td><strong>${item.nameEn}</strong><br><small>${item.nameKannada}</small></td>
                <td>${item.category}</td>
                <td>₹${item.price}</td>
                <td>${item.halfPrice ? '₹' + item.halfPrice : '-'}</td>
                <td><span style="color: ${item.stock === 0 ? 'red' : item.stock < 15 ? 'orange' : 'green'}; font-weight: bold;">${item.stock}</span></td>
                <td>
                    <button onclick="openEditModal('${item.sku}')" class="btn-export" style="padding:4px 8px; font-size:12px; display:inline-flex; align-items:center; gap:4px; margin-right:4px;" title="Edit Product">
                        <i class="fa-solid fa-pen"></i> Edit
                    </button>
                    <button onclick="adjustStock('${item.sku}', 10)" class="qty-btn" title="Restock +10" style="display:inline-flex; align-items:center; justify-content:center;">+</button>
                    <button onclick="deleteItem('${item.sku}')" class="btn-clear-cart" style="padding:4px 8px; margin-left:4px;"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    });
}

function openEditModal(sku) {
    const item = inventory.find(i => i.sku === sku);
    if (!item) return;

    document.getElementById('edit-sku').value = item.sku;
    document.getElementById('edit-name-en').value = item.nameEn;
    document.getElementById('edit-name-kn').value = item.nameKannada || item.nameEn;
    document.getElementById('edit-category').value = item.category || categories[0];
    document.getElementById('edit-price').value = item.price;
    document.getElementById('edit-half-price').value = item.halfPrice !== null ? item.halfPrice : '';
    document.getElementById('edit-stock').value = item.stock;

    document.getElementById('edit-item-modal').classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('edit-item-modal').classList.add('hidden');
}

function saveEditedItem(event) {
    event.preventDefault();
    const sku = document.getElementById('edit-sku').value;
    const item = inventory.find(i => i.sku === sku);

    if (item) {
        item.nameEn = document.getElementById('edit-name-en').value;
        item.nameKannada = document.getElementById('edit-name-kn').value;
        item.category = document.getElementById('edit-category').value;
        item.price = parseFloat(document.getElementById('edit-price').value);
        
        const halfInput = document.getElementById('edit-half-price').value;
        item.halfPrice = halfInput !== '' ? parseFloat(halfInput) : null;
        item.stock = parseInt(document.getElementById('edit-stock').value);

        saveInventory();
        renderAdminInventory();
        renderPOSCatalog();
        closeEditModal();
        alert("Item successfully updated!");
    }
}

function renderSoldOutList() {
    const tbody = document.getElementById('admin-sold-out-tbody');
    tbody.innerHTML = '';

    const criticalItems = inventory.filter(i => i.stock < 15);

    if (criticalItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--success); padding: 30px;">All items are fully in stock!</td></tr>`;
        return;
    }

    criticalItems.forEach(item => {
        const isOut = item.stock === 0;
        tbody.innerHTML += `
            <tr>
                <td>${item.sku}</td>
                <td><strong>${item.nameEn}</strong><br><small>${item.nameKannada}</small></td>
                <td>${item.category}</td>
                <td><span style="color: ${isOut ? 'red' : 'orange'}; font-weight: bold;">${item.stock}</span></td>
                <td><span class="stock-tag ${isOut ? 'low' : ''}">${isOut ? 'Sold Out / Out of Stock' : 'Low Stock'}</span></td>
                <td>
                    <button onclick="adjustStock('${item.sku}', 20)" class="btn-export" style="padding: 6px 12px; font-size: 12px; background: #fef3c7; color: #b45309;">
                        <i class="fa-solid fa-plus"></i> Restock +20
                    </button>
                </td>
            </tr>
        `;
    });
}

function handleAddExpense(event) {
    event.preventDefault();
    const title = document.getElementById('expense-title').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    const newExpense = {
        id: 'EXP-' + Math.floor(1000 + Math.random() * 9000),
        time: new Date().toLocaleString(),
        title,
        amount
    };

    expenses.unshift(newExpense);
    localStorage.setItem('dads_groceries_expenses', JSON.stringify(expenses));
    renderExpensesTable();
    document.getElementById('expense-form').reset();
}

function renderExpensesTable() {
    const tbody = document.getElementById('admin-expenses-tbody');
    tbody.innerHTML = '';

    let totalExp = 0;
    expenses.forEach(exp => {
        totalExp += exp.amount;
        tbody.innerHTML += `
            <tr>
                <td>${exp.time}</td>
                <td><strong>${exp.title}</strong></td>
                <td>₹${exp.amount.toFixed(2)}</td>
                <td>
                    <button onclick="deleteExpense('${exp.id}')" class="btn-clear-cart" style="padding:4px 8px;"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    });

    document.getElementById('kpi-total-expenses').innerText = `₹${totalExp.toFixed(2)}`;
}

function deleteExpense(id) {
    expenses = expenses.filter(e => e.id !== id);
    localStorage.setItem('dads_groceries_expenses', JSON.stringify(expenses));
    renderExpensesTable();
}

function handleAddNewItem(event) {
    event.preventDefault();
    const nameEn = document.getElementById('new-item-name').value;
    const category = document.getElementById('new-item-category').value;
    const price = parseFloat(document.getElementById('new-item-price').value);
    const halfPriceInput = document.getElementById('new-item-half-price').value;
    const halfPrice = halfPriceInput ? parseFloat(halfPriceInput) : null;
    const stock = parseInt(document.getElementById('new-item-stock').value);
    let sku = document.getElementById('new-item-sku').value;

    if (!sku) {
        sku = '' + Math.floor(200 + Math.random() * 800);
    }

    inventory.push({ sku, nameEn, nameKannada: nameEn, category, price, halfPrice, stock });
    saveInventory();
    renderPOSCatalog();
    renderAdminInventory();
    alert("New item successfully added to inventory!");
    document.getElementById('add-item-form').reset();
    switchAdminTab('inventory');
}

function adjustStock(sku, amount) {
    const item = inventory.find(i => i.sku === sku);
    if (item) {
        item.stock += amount;
        saveInventory();
        renderAdminInventory();
        renderSoldOutList();
        renderPOSCatalog();
        checkLowStockAlerts();
    }
}

function deleteItem(sku) {
    if (confirm("Are you sure you want to delete this item?")) {
        inventory = inventory.filter(i => i.sku !== sku);
        saveInventory();
        renderAdminInventory();
        renderSoldOutList();
        renderPOSCatalog();
    }
}

function saveInventory() {
    localStorage.setItem('dads_groceries_inventory', JSON.stringify(inventory));
}

function checkLowStockAlerts() {
    const lowStockItems = inventory.filter(i => i.stock < 15);
    const banner = document.getElementById('low-stock-banner');
    if (lowStockItems.length > 0) {
        banner.classList.remove('hidden');
        document.getElementById('low-stock-text').innerText = `Stock Warning: ${lowStockItems.length} items are running low or out of stock (< 15 units)!`;
    } else {
        banner.classList.add('hidden');
    }
}

function exportInventoryCSV() {
    let csv = 'SKU,Item Name (EN),Category,Full Price,Half Price,Stock\n';
    inventory.forEach(i => {
        csv += `${i.sku},"${i.nameEn}",${i.category},${i.price},${i.halfPrice || ''},${i.stock}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'dads_groceries_inventory.csv');
    a.click();
}

function renderTransactionsTable() {
    const tbody = document.getElementById('admin-transactions-tbody');
    tbody.innerHTML = '';
    transactions.slice(0, 20).forEach(tx => {
        let summaryText = tx.items.map(i => `${i.name} (${i.qty})`).join(', ');
        tbody.innerHTML += `
            <tr>
                <td>${tx.orderId}</td>
                <td>${tx.time}</td>
                <td><small>${summaryText}</small></td>
                <td><span class="sku-tag">${tx.mode}</span></td>
                <td><strong>₹${tx.total}</strong></td>
            </tr>
        `;
    });
}

function clearTransactions() {
    if (confirm("Clear all transaction history?")) {
        transactions = [];
        localStorage.removeItem('dads_groceries_transactions');
        renderTransactionsTable();
        updateAnalyticsKPIs();
    }
}

function updateAnalyticsKPIs() {
    const totalRev = transactions.reduce((sum, tx) => sum + parseFloat(tx.total), 0);
    document.getElementById('kpi-revenue').innerText = `₹${totalRev.toFixed(2)}`;
    document.getElementById('kpi-orders').innerText = transactions.length;

    const todayStr = new Date().toDateString();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    let dailyRev = 0;
    let monthlyRev = 0;

    transactions.forEach(tx => {
        const txDate = tx.rawTime ? new Date(tx.rawTime) : new Date();
        const txTotal = parseFloat(tx.total) || 0;

        if (txDate.toDateString() === todayStr) {
            dailyRev += txTotal;
        }

        if (txDate.getMonth() === currentMonth && txDate.getFullYear() === currentYear) {
            monthlyRev += txTotal;
        }
    });

    document.getElementById('kpi-daily-revenue').innerText = `₹${dailyRev.toFixed(2)}`;
    document.getElementById('kpi-monthly-revenue').innerText = `₹${monthlyRev.toFixed(2)}`;
}