// Shop Page JavaScript
// Shop Page JavaScript

// Shop Notice Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    const shopNoticeOverlay = document.getElementById('shopNoticeOverlay');
    const shopNoticeClose = document.getElementById('shopNoticeClose');
    const shopNoticeUnderstood = document.getElementById('shopNoticeUnderstood');
    
    // Show popup after a slight delay
    setTimeout(() => {
        if (shopNoticeOverlay) {
            shopNoticeOverlay.classList.add('show');
        }
    }, 1500); // 1.5 second delay
    
    // Close popup functions
    function closeShopNotice() {
        if (shopNoticeOverlay) {
            shopNoticeOverlay.classList.remove('show');
        }
    }
    
    // Close button event listener
    if (shopNoticeClose) {
        shopNoticeClose.addEventListener('click', closeShopNotice);
    }
    
    // Understood button event listener
    if (shopNoticeUnderstood) {
        shopNoticeUnderstood.addEventListener('click', closeShopNotice);
    }
    
    // Close popup when clicking on overlay background (outside popup)
    if (shopNoticeOverlay) {
        shopNoticeOverlay.addEventListener('click', function(event) {
            if (event.target === shopNoticeOverlay) {
                closeShopNotice();
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeShopNotice();
        }
    });
});

// Donate Notice Popup functionality
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('donate.html')) {
        const donateNoticeOverlay = document.getElementById('donateNoticeOverlay');
        const donateNoticeClose = document.getElementById('donateNoticeClose');
        const donateNoticeUnderstood = document.getElementById('donateNoticeUnderstood');
        
        // Show popup after a slight delay
        setTimeout(() => {
            if (donateNoticeOverlay) {
                donateNoticeOverlay.classList.add('show');
            }
        }, 1500); // 1.5 second delay
        
        // Close popup functions
        function closeDonateNotice() {
            if (donateNoticeOverlay) {
                donateNoticeOverlay.classList.remove('show');
            }
        }
        
        // Close button event listener
        if (donateNoticeClose) {
            donateNoticeClose.addEventListener('click', closeDonateNotice);
        }
        
        // Understood button event listener
        if (donateNoticeUnderstood) {
            donateNoticeUnderstood.addEventListener('click', closeDonateNotice);
        }
        
        // Close popup when clicking on overlay background (outside popup)
        if (donateNoticeOverlay) {
            donateNoticeOverlay.addEventListener('click', function(event) {
                if (event.target === donateNoticeOverlay) {
                    closeDonateNotice();
                }
            });
        }
        
        // Close popup with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeDonateNotice();
            }
        });
    }
});

// Extended product data for the shop
// Updated product data for the shop based on Excel spreadsheet
const shopProducts = [
    {
        id: 1,
        title: "Upcycled Fabric Bangles",
        description: "Colorful bangles made from upcycled fabric, promoting sustainable fashion..",
        price: 50.00,
        condition: "New",
        category: "accessories",
        material: "fabric",
        image: "img/bangles.jpg",
        contributor: "Local Artisan",
        dateAdded: "2025-01-15",
        featured: true,
        rating: 4.7,
        impact: "Sustainable materials • Handcrafted • Supports local artisan",
        quantity: 16
    },
    {
        id: 2,
        title: "Cloth Keychain",
        description: "Eco-friendly cloth keychains with unique patterns and sustainable design.",
        price: 50.00,
        condition: "New",
        category: "souvenirs",
        material: "fabric",
        image: "img/keychain.jpg",
        contributor: "Green Crafts",
        dateAdded: "2025-01-20",
        featured: false,
        rating: 4.5,
        impact: "Recycled materials • Lightweight • Durable design",
        quantity: 16
    },
    {
        id: 3,
        title: "Dream Catcher",
        description: "Traditional dream catchers with modern twist, available in combo and individual pieces.",
        price: 150.00, // combo price
        condition: "New",
        category: "home-decor",
        material: "mixed",
        image: "img/dreamcatcher.jpg",
        contributor: "Dream Weavers",
        dateAdded: "2025-01-25",
        featured: true,
        rating: 4.8,
        impact: "Handcrafted • Traditional art • Cultural preservation",
        quantity: 2,
        priceOptions: {
            combo: 150,
            individual: 100
        }
    },
    {
        id: 4,
        title: "Earring Set",
        description: "Beautiful handmade earring sets with sustainable materials and artistic design.",
        price: 30.00, // base price
        condition: "New",
        category: "jewelry",
        material: "mixed",
        image: "img/earring.jpg",
        contributor: "Jewelry Artisans",
        dateAdded: "2025-01-30",
        featured: true,
        rating: 4.6,
        impact: "Handmade • Sustainable materials • Local craftsmanship",
        quantity: 6,
        priceOptions: {
            option1: 30,
            option2: 20
        }
    },
    {
        id: 5,
        title: "Block-Printed Jute Pouches",
        description: "Eco-friendly jute pouches featuring traditional block-printed designs, perfect for gifting or storage..",
        price: 50.00,
        condition: "New",
        category: "bags",
        material: "jute",
        image: "img/puches.jpg",
        contributor: "Natural Fibers Co.",
        dateAdded: "2025-02-05",
        featured: false,
        rating: 4.4,
        impact: "Natural jute • Biodegradable • Sustainable farming",
        quantity: 8
    },
    {
        id: 6,
        title: "Tie-Dye Fabric Pouches",
        description: "Colorful pouches made from tie-dye fabric, perfect for storing small items..",
        price: 100.00,
        condition: "New",
        category: "bags",
        material: "fabric",
        image: "img/pouches.jpg",
        contributor: "Upcycle Studios",
        dateAdded: "2025-02-10",
        featured: false,
        rating: 4.5,
        impact: "Upcycled fabric • Waste reduction • Artistic design",
        quantity: 5
    },
    {
        id: 7,
        title: "Handcrafted Envelopes",
        description: "Artistic paper envelopes made with hand-painted and printed designs, perfect for gifting or festive occasions..",
        price: 50.00,
        condition: "New",
        category: "stationery",
        material: "paper",
        image: "img/envelope.jpg",
        contributor: "Paper Artists",
        dateAdded: "2025-02-12",
        featured: false,
        rating: 4.7,
        impact: "Handmade paper • Artistic design • Eco-friendly inks",
        quantity: 8
    },
    {
        id: 8,
        title: "Ceramic Mug Set",
        description: "Beautiful ceramic mug set with unique glazing and sustainable production methods.",
        price: 150.00,
        condition: "New",
        category: "home-utility",
        material: "ceramic",
        image: "img/mugs.jpg",
        contributor: "Ceramic Studio",
        dateAdded: "2025-02-15",
        featured: true,
        rating: 4.8,
        impact: "Handmade ceramics • Local clay • Traditional techniques",
        quantity: 2
    },
    {
        id: 9,
        title: "Magnetic Wooden Chess Set",
        description: "Compact magnetic chess set with wooden pieces, ideal for travel and quick strategic games..",
        price: 300.00,
        condition: "New",
        category: "games",
        material: "mixed",
        image: "img/chess.jpg",
        contributor: "Game Crafters",
        dateAdded: "2025-02-18",
        featured: true,
        rating: 4.9,
        impact: "Sustainable wood • Magnetic pieces • Educational value",
        quantity: 1
    },
    {
        id: 10,
        title: "Assorted Neckties",
        description: "A collection of elegant printed neckties in various colors and patterns for formal and semi-formal wear..",
        price: 100.00,
        condition: "New",
        category: "apparel",
        material: "fabric",
        image: "img/tie.jpg",
        contributor: "Fashion Forward",
        dateAdded: "2025-02-20",
        featured: false,
        rating: 4.3,
        impact: "Sustainable textiles • Unique designs • Quality craftsmanship",
        quantity: 5
    }
];
// Shop state management
let currentProducts = [...shopProducts];
let displayedProducts = [];
let productsPerPage = 10;
let currentPage = 0;
let currentSort = 'newest';
let currentView = 'grid';

// Filter state
let activeFilters = {
    categories: [],
    materials: [],
    minPrice: 0,
    maxPrice: 1000,
    sortBy: 'newest'
};

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('shop.html')) {
        initializeShop();
        setupShopEventListeners();
        loadProducts(); // Load and display products
        updateCartCount();
    }
});

function initializeShop() {
    // Initialize price slider
    const priceSlider = document.getElementById('priceSlider');
    const sliderValue = document.getElementById('sliderValue');
    
    if (priceSlider) {
        priceSlider.addEventListener('input', function() {
            sliderValue.textContent = this.value;
            activeFilters.maxPrice = parseInt(this.value);
            applyFilters(); // Auto-apply filters
        });
    }
    
    // Initialize sort dropdown
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            activeFilters.sortBy = this.value;
            currentSort = this.value;
            applyFilters();
        });
    }
    
    // Update results count
    updateResultsCount();
}

function setupShopEventListeners() {
    // Category filters
    const categoryFilters = document.querySelectorAll('.category-filter');
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                activeFilters.categories.push(this.value);
            } else {
                activeFilters.categories = activeFilters.categories.filter(cat => cat !== this.value);
            }
            applyFilters(); // Auto-apply filters
        });
    });
    
    // Material filters
    const materialFilters = document.querySelectorAll('.material-filter');
    materialFilters.forEach(filter => {
        filter.addEventListener('change', function() {
            if (this.checked) {
                activeFilters.materials.push(this.value);
            } else {
                activeFilters.materials = activeFilters.materials.filter(mat => mat !== this.value);
            }
            applyFilters(); // Auto-apply filters
        });
    });
    
    // Category All toggle
    const categoryAll = document.getElementById('categoryAll');
    if (categoryAll) {
        categoryAll.addEventListener('change', function() {
            const categoryFilters = document.querySelectorAll('.category-filter');
            categoryFilters.forEach(filter => {
                filter.checked = this.checked;
            });
            
            if (this.checked) {
                activeFilters.categories = [];
            }
            applyFilters(); // Auto-apply filters
        });
    }
    
    // Price inputs
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    
    if (minPriceInput) {
        minPriceInput.addEventListener('input', function() {
            activeFilters.minPrice = parseInt(this.value) || 0;
            applyFilters(); // Auto-apply filters
        });
    }
    
    if (maxPriceInput) {
        maxPriceInput.addEventListener('input', function() {
            activeFilters.maxPrice = parseInt(this.value) || 1000;
            applyFilters(); // Auto-apply filters
        });
    }
    
    // Clear filters button (removed apply button since filters auto-apply now)
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
    
    // View toggles
    const viewToggles = document.querySelectorAll('.view-toggle');
    viewToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            viewToggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentView = this.dataset.view;
            displayProducts();
        });
    });
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreProducts');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }
}

function loadFeaturedProducts() {
    const featuredProducts = shopProducts.filter(product => product.featured);
    const featuredGrid = document.getElementById('featuredGrid');
    
    if (featuredGrid) {
        featuredGrid.innerHTML = featuredProducts.map(product => `
            <div class="product-card featured-product">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="quick-view-btn" onclick="openQuickView(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-meta">
                        <span class="product-price">₹${product.price}</span>
                        <span class="product-condition">${product.condition}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i>
                            Add to Cart
                        </button>
                        <button class="btn btn-rent btn-small" onclick="rentProduct(${product.id})">
                            <i class="fas fa-clock"></i>
                            Rent Now
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function loadProducts() {
    // Since products are now hardcoded in HTML, we just need to show/hide them
    displayProducts();
}

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsGrid) {
        const gridClass = currentView === 'list' ? 'products-list' : 'products-grid';
        productsGrid.className = gridClass;
        
        // Get all product cards from HTML
        const allProductCards = productsGrid.querySelectorAll('.product-card');
        
        // Show/hide products based on filters and current view
        allProductCards.forEach(card => {
            if (currentView === 'list') {
                card.classList.add('list-view');
            } else {
                card.classList.remove('list-view');
            }
        });
        
        // Update the visibility based on active filters
        filterProductCards();
    }
    
    updateResultsCount();
}

function filterProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const allProductCards = productsGrid.querySelectorAll('.product-card');
    let visibleCount = 0;
    
    allProductCards.forEach(card => {
        const category = card.dataset.category;
        const material = card.dataset.material;
        const price = parseFloat(card.dataset.price);
        
        let shouldShow = true;
        
        // Apply category filter
        if (activeFilters.categories.length > 0) {
            shouldShow = shouldShow && activeFilters.categories.includes(category);
        }
        
        // Apply material filter
        if (activeFilters.materials.length > 0) {
            shouldShow = shouldShow && activeFilters.materials.includes(material);
        }
        
        // Apply price filter
        shouldShow = shouldShow && price >= activeFilters.minPrice && price <= activeFilters.maxPrice;
        
        if (shouldShow) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Apply sorting to visible cards
    sortProductCards();
    
    return visibleCount;
}

function sortProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const visibleCards = Array.from(productsGrid.querySelectorAll('.product-card[style*="block"], .product-card:not([style*="none"])'));
    
    visibleCards.sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        const ratingA = parseFloat(a.dataset.rating);
        const ratingB = parseFloat(b.dataset.rating);
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        
        switch (activeFilters.sortBy) {
            case 'newest':
                return dateB - dateA;
            case 'popular':
            case 'rating':
                return ratingB - ratingA;
            case 'price-low':
                return priceA - priceB;
            case 'price-high':
                return priceB - priceA;
            default:
                return dateB - dateA;
        }
    });
    
    // Reorder the cards in the DOM
    visibleCards.forEach(card => {
        productsGrid.appendChild(card);
    });
}
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function applyFilters() {
    // Since products are now hardcoded in HTML, we just need to filter the cards
    displayProducts();
    
    showToast('Filters applied successfully!', 'success');
}

function sortProducts(products, sortBy) {
    switch (sortBy) {
        case 'newest':
            return products.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        case 'popular':
            return products.sort((a, b) => b.rating - a.rating);
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'rating':
            return products.sort((a, b) => b.rating - a.rating);
        default:
            return products;
    }
}

function clearAllFilters() {
    // Reset filter state
    activeFilters = {
        categories: [],
        materials: [],
        minPrice: 0,
        maxPrice: 1000,
        sortBy: 'newest'
    };
    
    // Reset UI
    document.querySelectorAll('.category-filter, .material-filter').forEach(filter => {
        filter.checked = false;
    });
    
    document.getElementById('categoryAll').checked = true;
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const priceSlider = document.getElementById('priceSlider');
    const sliderValue = document.getElementById('sliderValue');
    const sortSelect = document.getElementById('sortBy');
    
    if (minPriceInput) minPriceInput.value = '';
    if (maxPriceInput) maxPriceInput.value = '';
    if (priceSlider) priceSlider.value = 500;
    if (sliderValue) sliderValue.textContent = '500';
    if (sortSelect) sortSelect.value = 'newest';
    
    // Reset products display
    loadProducts();
    
    showToast('All filters cleared!', 'success');
}

function loadMoreProducts() {
    const nextPageProducts = currentProducts.slice(
        displayedProducts.length,
        displayedProducts.length + productsPerPage
    );
    
    displayedProducts = [...displayedProducts, ...nextPageProducts];
    displayProducts();
    
    // Hide load more button if no more products
    if (displayedProducts.length >= currentProducts.length) {
        document.getElementById('loadMoreProducts').style.display = 'none';
    }
}

function updateResultsCount() {
    const resultsCount = document.getElementById('resultsCount');
    const productsGrid = document.getElementById('productsGrid');
    
    if (resultsCount && productsGrid) {
        // Count visible product cards
        const visibleCards = productsGrid.querySelectorAll('.product-card:not([style*="none"])');
        resultsCount.textContent = visibleCards.length;
    }
    
    // Hide load more button since all products are now hardcoded
    const loadMoreBtn = document.getElementById('loadMoreProducts');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = 'none';
    }
}

function openQuickView(productId) {
    const product = shopProducts.find(p => p.id === productId);
    if (!product) return;
    
    const quickViewBody = document.getElementById('quickViewBody');
    
    quickViewBody.innerHTML = `
        <div class="quick-view-content">
            <div class="quick-view-image-container">
                <img src="${product.image}" alt="${product.title}" class="quick-view-image">
            </div>
            <div class="quick-view-info">
                <h2>${product.title}</h2>
                <div class="quick-view-rating">
                    ${generateStars(product.rating)}
                    <span class="rating-value">${product.rating}</span>
                </div>
                <div class="quick-view-price">₹${product.price}</div>
                <p class="quick-view-description">${product.description}</p>
                
                <div class="impact-info">
                    <div class="impact-title">Environmental Impact</div>
                    <div class="impact-description">${product.impact}</div>
                </div>
                
                <div class="quick-view-details">
                    <div class="quick-view-detail">
                        <span>Condition:</span>
                        <span>${product.condition}</span>
                    </div>
                    <div class="quick-view-detail">
                        <span>Category:</span>
                        <span>${product.category}</span>
                    </div>
                    <div class="quick-view-detail">
                        <span>Material:</span>
                        <span>${product.material}</span>
                    </div>
                    <div class="quick-view-detail">
                        <span>Contributor:</span>
                        <span>${product.contributor}</span>
                    </div>
                </div>
                
                <div class="quick-view-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView();">
                        <i class="fas fa-cart-plus"></i>
                        Add to Cart
                    </button>
                    <button class="btn btn-rent" onclick="rentProduct(${product.id}); closeQuickView();">
                        <i class="fas fa-clock"></i>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('quickViewModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    document.getElementById('quickViewModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const product = shopProducts.find(p => p.id === productId);
    
    if (!cart.find(item => item.id === productId)) {
        cart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast(`${product.title} added to cart!`, 'success');
        updateCartCount();
    } else {
        showToast(`${product.title} is already in cart!`, 'info');
    }
}

function rentProduct(productId) {
    const product = shopProducts.find(p => p.id === productId);
    const rentalPrice = (product.price * 0.15).toFixed(2); // 15% of purchase price for rental
    
    showToast(`${product.title} available for rent at ₹ ${rentalPrice}/week`, 'info');
    
    // Here you would typically open a rental modal or redirect to rental page
    setTimeout(() => {
        showToast('Rental feature coming soon!', 'info');
    }, 1500);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Modal functions for footer links
function showModal(type) {
    const modal = document.getElementById('modal') || document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';
    
    let content = '';
    switch (type) {
        case 'faq':
            content = `
                <h2>Frequently Asked Questions</h2>
                <div class="faq-item">
                    <h3>How do I return an item?</h3>
                    <p>You can return items within 7 days of purchase. Contact our support team for return instructions.</p>
                </div>
                <div class="faq-item">
                    <h3>Are the products guaranteed authentic?</h3>
                    <p>Yes, all products are verified by our team and contributors before listing.</p>
                </div>
                <div class="faq-item">
                    <h3>How does the rental system work?</h3>
                    <p>You can rent items for a weekly fee. The rental period can be extended based on availability.</p>
                </div>
            `;
            break;
        case 'shipping':
            content = `
                <h2>Shipping & Returns</h2>
                <h3>Shipping Information</h3>
                <ul>
                    <li>Free shipping on orders over $50</li>
                    <li>Standard shipping: 3-5 business days</li>
                    <li>Express shipping: 1-2 business days</li>
                    <li>Local pickup available in select areas</li>
                </ul>
                <h3>Return Policy</h3>
                <ul>
                    <li>7-day return window from purchase date</li>
                    <li>Items must be in original condition</li>
                    <li>Return shipping costs covered by seller</li>
                    <li>Refunds processed within 5-7 business days</li>
                </ul>
            `;
            break;
        default:
            content = `<h2>Information</h2><p>Content coming soon...</p>`;
    }
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal()">&times;</span>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Toast notification function (borrowed from main script)
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-primary);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        border-left: 4px solid var(--accent-primary);
        z-index: 2001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    toast.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
