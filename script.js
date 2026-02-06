// ==================== ДАННЫЕ О ТОВАРАХ ====================

const products = [
    {
        id: 1,
        name: "Беспроводные наушники Pro",
        category: "headphones",
        price: 4999,
        rating: 4.8,
        reviews: 234,
        emoji: "🎧",
        description: "Премиум беспроводные наушники с активным подавлением шума и 30-часовой батареей.",
        specs: [
            { label: "Время работы", value: "30 часов" },
            { label: "Подключение", value: "Bluetooth 5.0" },
            { label: "Шумоподавление", value: "Активное (ANC)" },
            { label: "Гарантия", value: "2 года" }
        ],
        discount: 15
    },
    {
        id: 2,
        name: "Смартфон Ultra Max",
        category: "phones",
        price: 89999,
        rating: 4.9,
        reviews: 512,
        emoji: "📱",
        description: "Флагманский смартфон с потрясающей камерой и мощным процессором.",
        specs: [
            { label: "Экран", value: "6.8 дюйма OLED" },
            { label: "Процессор", value: "Snapdragon 8 Gen 2" },
            { label: "Память", value: "256GB" },
            { label: "Камера", value: "108MP основная" }
        ],
        discount: 0
    },
    {
        id: 3,
        name: "Планшет Premium 12",
        category: "tablets",
        price: 34999,
        rating: 4.7,
        reviews: 189,
        emoji: "📱",
        description: "Портативный планшет с большим экраном для работы и развлечений.",
        specs: [
            { label: "Экран", value: "12.9 дюйма LCD" },
            { label: "ОЗУ", value: "8GB" },
            { label: "Накопитель", value: "256GB" },
            { label: "Батарея", value: "10000 мАч" }
        ],
        discount: 10
    },
    {
        id: 4,
        name: "Кабель USB Type-C",
        category: "accessories",
        price: 299,
        rating: 4.6,
        reviews: 78,
        emoji: "🔌",
        description: "Быстрый кабель для передачи данных и зарядки устройств.",
        specs: [
            { label: "Длина", value: "2 метра" },
            { label: "Макс. ток", value: "5A" },
            { label: "Скорость", value: "480 Мбит/с" },
            { label: "Материал", value: "Нейлон" }
        ],
        discount: 20
    },
    {
        id: 5,
        name: "Зарядное устройство 65W",
        category: "accessories",
        price: 1499,
        rating: 4.8,
        reviews: 145,
        emoji: "⚡",
        description: "Мощное зарядное устройство для быстрой зарядки всех устройств.",
        specs: [
            { label: "Мощность", value: "65W" },
            { label: "Портов", value: "2 USB-C + 1 USB-A" },
            { label: "Скорость зарядки", value: "Быстрая" },
            { label: "Безопасность", value: "Сертифицировано" }
        ],
        discount: 0
    },
    {
        id: 6,
        name: "Чехол для смартфона",
        category: "accessories",
        price: 699,
        rating: 4.5,
        reviews: 234,
        emoji: "📦",
        description: "Прочный защитный чехол с красивым дизайном.",
        specs: [
            { label: "Материал", value: "Силикон" },
            { label: "Защита", value: "MIL-SPEC" },
            { label: "Цвета", value: "5 вариантов" },
            { label: "Совместимость", value: "iPhone 14 Pro" }
        ],
        discount: 25
    },
    {
        id: 7,
        name: "Портативная колонка Mini",
        category: "accessories",
        price: 2499,
        rating: 4.7,
        reviews: 312,
        emoji: "🔊",
        description: "Компактная Bluetooth колонка с мощным звуком.",
        specs: [
            { label: "Мощность", value: "20W" },
            { label: "Батарея", value: "12 часов" },
            { label: "Водозащита", value: "IPX7" },
            { label: "Диапазон", value: "50м" }
        ],
        discount: 0
    },
    {
        id: 8,
        name: "Смартфон Pro 13",
        category: "phones",
        price: 54999,
        rating: 4.8,
        reviews: 428,
        emoji: "📱",
        description: "Отличный смартфон с идеальным соотношением цены и качества.",
        specs: [
            { label: "Экран", value: "6.1 дюйма" },
            { label: "Процессор", value: "A17 Pro" },
            { label: "Память", value: "128GB" },
            { label: "Камера", value: "48MP основная" }
        ],
        discount: 5
    },
    {
        id: 9,
        name: "Планшет Budget",
        category: "tablets",
        price: 14999,
        rating: 4.4,
        reviews: 156,
        emoji: "📱",
        description: "Доступный планшет для учёбы и развлечений.",
        specs: [
            { label: "Экран", value: "10.1 дюйма" },
            { label: "ОЗУ", value: "4GB" },
            { label: "Накопитель", value: "64GB" },
            { label: "Батарея", value: "7000 мАч" }
        ],
        discount: 30
    },
    {
        id: 10,
        name: "Наушники вкладыши",
        category: "headphones",
        price: 1999,
        rating: 4.6,
        reviews: 287,
        emoji: "🎧",
        description: "Компактные наушники-вкладыши с хорошим звуком.",
        specs: [
            { label: "Тип", value: "TWS" },
            { label: "Батарея", value: "6 часов" },
            { label: "Кейс", value: "30 часов" },
            { label: "Водозащита", value: "IPX4" }
        ],
        discount: 12
    },
    {
        id: 11,
        name: "Смартфон Max 2",
        category: "phones",
        price: 44999,
        rating: 4.7,
        reviews: 356,
        emoji: "📱",
        description: "Мощный смартфон с большим экраном.",
        specs: [
            { label: "Экран", value: "6.7 дюйма" },
            { label: "Процессор", value: "Snapdragon 8" },
            { label: "Память", value: "256GB" },
            { label: "Батарея", value: "5000 мАч" }
        ],
        discount: 0
    },
    {
        id: 12,
        name: "Защитное стекло",
        category: "accessories",
        price: 399,
        rating: 4.5,
        reviews: 98,
        emoji: "🛡️",
        description: "Закалённое защитное стекло для экрана смартфона.",
        specs: [
            { label: "Прочность", value: "9H" },
            { label: "Совместимость", value: "iPhone 14/15" },
            { label: "В комплекте", value: "2 штуки" },
            { label: "Установка", value: "Без пузырей" }
        ],
        discount: 15
    }
];

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================

let cart = [];
let favorites = [];
let currentProducts = [...products];
let currentSlideIndex = 0;
let autoSlideInterval = null;

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadCart();
    loadFavorites();
    renderProducts();
    renderFeaturedSlider();
    setupEventListeners();
});

// ==================== ОТРИСОВКА ТОВАРОВ ====================

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';

    if (currentProducts.length === 0) {
        productsGrid.innerHTML = '<p class="empty-search">Товаров не найдено</p>';
        return;
    }

    currentProducts.forEach(product => {
        const finalPrice = Math.round(product.price * (1 - product.discount / 100));
        const card = document.createElement('div');
        card.className = 'product-card';

        const isFavorite = favorites.some(fav => fav.id === product.id);

        card.innerHTML = `
            <div class="product-image">
                <span>${product.emoji}</span>
                ${product.discount > 0 ? `<div class="product-badge">-${product.discount}%</div>` : ''}
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <span class="stars">${getStars(product.rating)}</span>
                    <span>${product.rating}</span>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                ${product.discount > 0 ? `
                    <div style="font-size: 12px; color: #999; text-decoration: line-through;">
                        ${product.price} ₽
                    </div>
                ` : ''}
                <div class="product-price">${finalPrice} ₽</div>
                <div class="product-footer">
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="btn-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

        card.addEventListener('click', (e) => {
            if (!e.target.closest('button')) {
                showProductModal(product);
            }
        });

        productsGrid.appendChild(card);
    });
}

// ==================== СЛАЙДЕРЫ ====================

function renderSliders() {
    renderSlider('hotDealsSlider', products.filter(p => p.discount > 0));
    renderSlider('popularSlider', products.sort((a, b) => b.rating - a.rating).slice(0, 8));
}

function renderSlider(sliderId, items) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    slider.innerHTML = items.map(product => {
        const finalPrice = Math.round(product.price * (1 - product.discount / 100));
        return `
            <div class="slider-item" onclick="showProductModal(products.find(p => p.id === ${product.id}))">
                <div class="slider-item-image">${product.emoji}</div>
                <div class="slider-item-name">${product.name}</div>
                ${product.discount > 0 ? `
                    <div style="font-size: 11px; color: #999; text-decoration: line-through;">
                        ${product.price} ₽
                    </div>
                ` : ''}
                <div class="slider-item-price">${finalPrice} ₽</div>
                <div class="slider-item-rating">⭐ ${product.rating} (${product.reviews})</div>
                <button class="slider-item-button" onclick="addToCart(${product.id}); event.stopPropagation();">
                    <i class="fas fa-shopping-cart"></i> В корзину
                </button>
            </div>
        `;
    }).join('');
}

function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const items = slider.querySelectorAll('.slider-item');
    const itemWidth = items[0].offsetWidth + 20; // width + gap
    
    sliderPositions[sliderId] = Math.min(
        sliderPositions[sliderId] + itemWidth,
        slider.scrollWidth - slider.parentElement.offsetWidth
    );
    
    slider.style.transform = `translateX(-${sliderPositions[sliderId]}px)`;
}

function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const items = slider.querySelectorAll('.slider-item');
    const itemWidth = items[0].offsetWidth + 20; // width + gap
    
    sliderPositions[sliderId] = Math.max(0, sliderPositions[sliderId] - itemWidth);
    
    slider.style.transform = `translateX(-${sliderPositions[sliderId]}px)`;
}

// Новый слайдер с автопереключением
function renderFeaturedSlider() {
    const featuredSlider = document.getElementById('featuredSlider');
    const sliderDots = document.getElementById('sliderDots');
    
    if (!featuredSlider) return;

    // Сортируем товары по рейтингу для рекомендаций
    const featuredProducts = products
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    featuredSlider.innerHTML = featuredProducts.map(product => {
        const finalPrice = Math.round(product.price * (1 - product.discount / 100));
        return `
            <div class="featured-slider-item">
                <div class="featured-item-image">${product.emoji}</div>
                <div class="featured-item-content">
                    <span class="featured-item-category">${getCategoryName(product.category)}</span>
                    <h3>${product.name}</h3>
                    <div class="featured-item-rating">
                        <span>${getStars(product.rating)}</span>
                        <span>${product.rating}</span>
                        <span>(${product.reviews} отзывов)</span>
                    </div>
                    ${product.discount > 0 ? `
                        <div style="font-size: 14px; color: #999; text-decoration: line-through; margin-bottom: 5px;">
                            ${product.price} ₽
                        </div>
                    ` : ''}
                    <div class="featured-item-price">${finalPrice} ₽</div>
                    <p class="featured-item-description">${product.description}</p>
                    <div class="featured-item-specs">
                        ${product.specs.slice(0, 2).map(spec => `
                            <div class="featured-spec">
                                <span>${spec.label}</span>
                                <strong>${spec.value}</strong>
                            </div>
                        `).join('')}
                    </div>
                    <div class="featured-item-buttons">
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> В корзину
                        </button>
                        <button class="btn btn-secondary" onclick="toggleFavorite(${product.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Создаём точки навигации
    if (sliderDots) {
        sliderDots.innerHTML = featuredProducts.map((_, index) => `
            <div class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>
        `).join('');
    }

    // Запускаем автопереключение
    startAutoSlide();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateFeaturedSlider();
    // Перезапускаем таймер при клике на точку
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function nextFeaturedSlide() {
    const featuredSlider = document.getElementById('featuredSlider');
    const items = featuredSlider.querySelectorAll('.featured-slider-item');
    currentSlideIndex = (currentSlideIndex + 1) % items.length;
    updateFeaturedSlider();
    // Перезапускаем таймер
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function prevFeaturedSlide() {
    const featuredSlider = document.getElementById('featuredSlider');
    const items = featuredSlider.querySelectorAll('.featured-slider-item');
    currentSlideIndex = (currentSlideIndex - 1 + items.length) % items.length;
    updateFeaturedSlider();
    // Перезапускаем таймер
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function updateFeaturedSlider() {
    const featuredSlider = document.getElementById('featuredSlider');
    if (!featuredSlider) return;

    const translateValue = -currentSlideIndex * 100;
    featuredSlider.style.transform = `translateX(${translateValue}%)`;

    // Обновляем активную точку
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextFeaturedSlide();
    }, 5000); // Переключение каждые 5 секунд
}

// ==================== ФИЛЬТРАЦИЯ ====================

function setupEventListeners() {
    // Тёмная тема
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Коллапс групп фильтров
    document.querySelectorAll('.filter-group h3').forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.tagName !== 'INPUT') {
                toggleFilterGroup(header);
            }
        });
    });

    // Категории
    document.querySelectorAll('.category-filter').forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // Цена
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('input', (e) => {
            const value = parseInt(e.target.value).toLocaleString('ru-RU');
            document.getElementById('priceValue').textContent = value;
            applyFilters();
        });
    }

    // Рейтинг
    document.querySelectorAll('.rating-filter').forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // Поиск
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            document.getElementById('searchContainer').classList.toggle('active');
        });
    }

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }

    // Гамбургер меню
    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            document.querySelector('.filters-sidebar').classList.toggle('active');
        });
    }

    // Корзина
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }

    document.addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            closeCart();
        }
    });

    // Форма контакта
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо за сообщение! Мы свяжемся с вами в ближайшее время.');
            e.target.reset();
        });
    }
}

// ==================== ФУНКЦИИ ФИЛЬТРОВ ====================

function toggleFilterGroup(header) {
    const group = header.closest('.filter-group');
    group.classList.toggle('collapsed');
}

function applyFilters() {
    const categories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(c => c.value);
    const maxPrice = parseInt(document.getElementById('priceFilter').value);
    const ratings = Array.from(document.querySelectorAll('.rating-filter:checked'))
        .map(r => parseInt(r.value));
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    currentProducts = products.filter(product => {
        // Фильтр по категориям
        if (categories.includes('all')) {
            // Все товары
        } else if (categories.length > 0 && !categories.includes(product.category)) {
            return false;
        }

        // Фильтр по цене
        const finalPrice = product.price * (1 - product.discount / 100);
        if (finalPrice > maxPrice) {
            return false;
        }

        // Фильтр по рейтингу
        if (ratings.length > 0) {
            const minRating = Math.min(...ratings);
            if (product.rating < minRating) {
                return false;
            }
        }

        // Фильтр по поиску
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm)) {
            return false;
        }

        return true;
    });

    renderProducts();
}

function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('priceFilter').value = 100000;
    document.getElementById('priceValue').textContent = '100000';
    document.querySelectorAll('.category-filter').forEach(f => {
        f.checked = f.value === 'all';
    });
    document.querySelectorAll('.rating-filter').forEach(f => {
        f.checked = false;
    });
    currentProducts = [...products];
    renderProducts();
}

// ==================== КОРЗИНА ====================

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} добавлено в корзину!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            updateCartCount();
            renderCart();
        }
    }
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function openCart() {
    document.getElementById('cartModal').classList.add('active');
    renderCart();
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
        cartSummary.style.display = 'none';
        return;
    }

    cartItems.innerHTML = cart.map(item => {
        const finalPrice = Math.round(item.price * (1 - item.discount / 100));
        return `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${finalPrice} ₽</p>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <button class="cart-remove" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    }).join('');

    const subtotal = cart.reduce((sum, item) => {
        const finalPrice = Math.round(item.price * (1 - item.discount / 100));
        return sum + finalPrice * item.quantity;
    }, 0);

    const total = subtotal + 350;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('subtotal').textContent = subtotal + ' ₽';
    document.getElementById('total').textContent = total + ' ₽';
    cartSummary.style.display = 'block';
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    const total = cart.reduce((sum, item) => {
        const finalPrice = Math.round(item.price * (1 - item.discount / 100));
        return sum + finalPrice * item.quantity;
    }, 0) + 350;

    alert(`Заказ на сумму ${total} ₽ оформлен!\n\nСпасибо за покупку!`);
    cart = [];
    saveCart();
    updateCartCount();
    closeCart();
}

// ==================== ИЗБРАННЫЕ ====================

function toggleFavorite(productId) {
    const index = favorites.findIndex(fav => fav.id === productId);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        const product = products.find(p => p.id === productId);
        favorites.push(product);
    }

    saveFavorites();
    renderProducts();
}

// ==================== МОДАЛЬНОЕ ОКНО ТОВАРА ====================

function showProductModal(product) {
    const finalPrice = Math.round(product.price * (1 - product.discount / 100));
    const isFavorite = favorites.some(fav => fav.id === product.id);

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="modal-image">${product.emoji}</div>
        <div class="modal-details">
            <span class="modal-category">${getCategoryName(product.category)}</span>
            <h2>${product.name}</h2>
            <div class="modal-rating">
                <span class="stars">${getStars(product.rating)}</span>
                <span>${product.rating} (${product.reviews} отзывов)</span>
            </div>
            ${product.discount > 0 ? `
                <div style="font-size: 14px; color: #999; text-decoration: line-through;">
                    ${product.price} ₽
                </div>
            ` : ''}
            <div class="modal-price">${finalPrice} ₽</div>
            <p class="modal-description">${product.description}</p>
            <div class="modal-specs">
                ${product.specs.map(spec => `
                    <div class="spec-row">
                        <span class="spec-label">${spec.label}</span>
                        <span>${spec.value}</span>
                    </div>
                `).join('')}
            </div>
            <div class="modal-actions">
                <button class="btn btn-primary" onclick="addToCart(${product.id}); closeProductModal()">
                    <i class="fas fa-shopping-cart"></i> В корзину
                </button>
                <button class="btn btn-secondary ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${product.id}); showProductModal(products.find(p => p.id === ${product.id}))">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;

    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') {
        closeProductModal();
    }
});

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================

function getCategoryName(category) {
    const names = {
        headphones: 'Наушники',
        phones: 'Смартфоны',
        tablets: 'Планшеты',
        accessories: 'Аксессуары'
    };
    return names[category] || category;
}

function getStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 > 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalf) stars += '✨';
    stars += '☆'.repeat(5 - Math.ceil(rating));
    return stars;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== ЛОКАЛЬНОЕ ХРАНИЛИЩЕ ====================

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function loadFavorites() {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
    }
}

// ==================== ТЁМНАЯ ТЕМА ====================

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    if (themeToggle) {
        themeToggle.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    } else {
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

// Добавляем CSS для уведомления
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
    .empty-search {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        color: #999;
        font-size: 18px;
    }
`;
document.head.appendChild(style);
