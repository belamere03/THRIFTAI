// Mock data for the application
const mockData = {
    featuredItems: [
        {
            id: 1,
            title: "Magnetic Wooden Chess Set",
            shortDescription: "Compact magnetic chess set with wooden pieces, ideal for travel and quick strategic games.",
            description: "Experience the timeless game of chess anywhere you go with this portable magnetic chess set. Crafted with smooth, hand-polished wooden pieces, each fitted with a discreet magnetic base to keep them securely in place—even during bumpy journeys or windy days outdoors. The foldable wooden board doubles as a storage box, neatly housing all pieces when not in use, making it easy to slip into a backpack or carry-on. Ideal for quick matches, practice sessions, or sharpening your strategy on the go, this set combines classic elegance with modern portability. Whether you're a beginner or a seasoned player, it's your perfect companion for travel, picnics, coffee breaks, or rainy afternoons indoors.",
            price: 250,
            condition: "Excellent",
            category: "Games",
            image: "/img/chess.jpg",
            contributor: "Student Workshop Team",
            dateAdded: "2024-01-15"
        },
        {
            id: 2,
            title: "Upcycled Fabric Bangles",
            shortDescription: "Colorful bangles made from upcycled fabric, promoting sustainable fashion.",
            description: "Add a splash of sustainable style to your look with these colorful bangles, beautifully handcrafted from upcycled fabric. Each piece is made using carefully selected textile remnants, giving new life to materials that would otherwise go to waste. The result is a collection of one-of-a-kind accessories, each with its own unique blend of colors, textures, and patterns. Lightweight and comfortable to wear, these bangles slip on effortlessly, making them perfect for everyday outfits or special occasions. Whether you stack them for a bold, eclectic vibe or wear just one for a subtle pop of charm, they're a statement in both fashion and eco-conscious living. Ideal for those who value creativity, sustainability, and individuality, these bangles prove that style can be both beautiful and kind to the planet.",
            price: 50,
            condition: "Like New",
            category: "Accessories",
            image: "/img/bangles.jpg",
            contributor: "Craft Club Students",
            dateAdded: "2024-01-20"
        },
        {
            id: 3,
            title: "Tie-Dye Fabric Pouches",
            shortDescription: "Colorful pouches made from tie-dye fabric, perfect for storing small items.",
            description: "Brighten up your everyday essentials with these colorful pouches, lovingly crafted from vibrant tie-dye fabric. Each pouch boasts a unique swirl of colors, ensuring no two are exactly alike. Compact yet spacious, they're perfect for storing coins, keys, cosmetics, stationery, or other small treasures you want to keep organized. The soft fabric is both lightweight and durable, making them easy to slip into a handbag, backpack, or travel case. A sturdy zipper closure keeps your items secure, while the lively tie-dye design adds a fun, artistic touch to your day. Ideal for gifting or personal use, these pouches bring together functionality, style, and a pop of bohemian charm.",
            price: 100,
            condition: "New",
            category: "Storage",
            image: "/img/pouches.jpg",
            contributor: "Art Department",
            dateAdded: "2024-01-25"
        },
        {
            id: 4,
            title: "Handcrafted Envelopes",
            shortDescription: "Artistic paper envelopes made with hand-painted and printed designs, perfect for gifting or festive occasions.",
            description: "Elevate your gifting experience with these artistic paper envelopes, each adorned with unique hand-painted and printed designs. Crafted with care and creativity, every envelope is a small work of art, blending vibrant colors, intricate patterns, and thoughtful detailing. Perfect for weddings, festivals, birthdays, or heartfelt notes, they add a personal, artisanal touch to any occasion. Made from high-quality paper, they are both sturdy and elegant, ensuring your gift or message is beautifully presented. Whether used to hold cash, gift cards, or handwritten letters, these envelopes turn even the simplest gesture into a memorable keepsake.",
            price: 50,
            condition: "Very Good",
            category: "Stationery",
            image: "/img/envelope.jpg",
            contributor: "Design Team",
            dateAdded: "2024-01-30"
        },
        {
            id: 5,
            title: "Assorted Neckties",
            shortDescription: "A collection of elegant printed neckties in various colors and patterns for formal and semi-formal wear.",
            description: "Make a lasting impression with this collection of elegant printed neckties, available in a variety of colors and patterns to suit any style. Crafted from smooth, high-quality fabric, each tie drapes beautifully and features crisp, vibrant prints that add character without compromising sophistication. Perfect for both formal and semi-formal occasions, they pair effortlessly with dress shirts and suits, elevating your look for business meetings, weddings, parties, or special events. Whether you prefer classic stripes, subtle geometrics, or bold statement prints, this collection offers a tie for every mood and moment, ensuring you step out with confidence and refined style.",
            price: 100,
            condition: "New",
            category: "Accessories",
            image: "/img/tie.jpg",
            contributor: "Fashion Club",
            dateAdded: "2024-02-05"
        },
        {
            id: 6,
            title: "Block-Printed Jute Pouches",
            shortDescription: "Eco-friendly jute pouches featuring traditional block-printed designs, perfect for gifting or storage.",
            description: "Celebrate sustainability and tradition with these eco-friendly jute pouches, adorned with beautiful hand block-printed designs. Crafted from sturdy, biodegradable jute, each pouch combines rustic charm with cultural artistry, making it both practical and stylish. Perfect for storing jewelry, small accessories, stationery, or cosmetics, they're also an elegant choice for eco-conscious gift wrapping. The breathable, durable material ensures long-lasting use, while the intricate prints bring a touch of heritage to your everyday essentials. Whether for personal use, festive gifting, or event favors, these pouches offer a perfect blend of functionality, craftsmanship, and environmental care.",
            price: 100,
            condition: "Excellent",
            category: "Storage",
            image: "/img/puches.jpg",
            contributor: "Heritage Crafts Team",
            dateAdded: "2024-02-10"
        }
    ],
    contributors: [
        {
            id: 1,
            name: "Sarah Johnson",
            rank: 1,
            totalDonations: 47,
            totalValue: 2340,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            joinDate: "2023-06-15",
            specialty: "Furniture Restoration"
        },
        {
            id: 2,
            name: "Mike Chen",
            rank: 2,
            totalDonations: 32,
            totalValue: 1890,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            joinDate: "2023-08-20",
            specialty: "Electronics Refurbishment"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            rank: 3,
            totalDonations: 28,
            totalValue: 1560,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            joinDate: "2023-09-10",
            specialty: "Handmade Crafts"
        },
        {
            id: 4,
            name: "David Kim",
            rank: 4,
            totalDonations: 25,
            totalValue: 1320,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            joinDate: "2023-11-05",
            specialty: "Book Collections"
        },
        {
            id: 5,
            name: "Anna Thompson",
            rank: 5,
            totalDonations: 22,
            totalValue: 980,
            avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            joinDate: "2023-12-01",
            specialty: "Vintage Clothing"
        },
        {
            id: 6,
            name: "James Wilson",
            rank: 6,
            totalDonations: 19,
            totalValue: 750,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
            joinDate: "2024-01-15",
            specialty: "Garden Tools"
        }
    ]
};

// Application state
let currentTheme = localStorage.getItem('theme') || 'light';
let currentItemsPage = 0;
const itemsPerPage = 6;
let allItems = [...mockData.featuredItems];


// Theme Management
function initializeTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeToggle();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeToggle();
}

function updateThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (currentTheme === 'dark') {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        }
    }
}

// Event Listeners Setup
function setupEventListeners() {
    try {
        console.log('Setting up event listeners...');
        
        // Theme toggle
        try {
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle && themeToggle.addEventListener && typeof themeToggle.addEventListener === 'function') {
                themeToggle.addEventListener('click', toggleTheme);
                console.log('Theme toggle listener added');
            }
        } catch (error) {
            console.warn('Error setting up theme toggle:', error);
        }

        // Mobile menu toggle
        try {
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            if (mobileMenuToggle && mobileMenuToggle.addEventListener && typeof mobileMenuToggle.addEventListener === 'function') {
                mobileMenuToggle.addEventListener('click', toggleMobileMenu);
                console.log('Mobile menu toggle listener added');
            }
        } catch (error) {
            console.warn('Error setting up mobile menu toggle:', error);
        }

        // Search functionality (only if element exists)
        try {
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.addEventListener && typeof searchInput.addEventListener === 'function') {
                searchInput.addEventListener('input', handleSearch);
                console.log('Search input listener added');
            } else {
                console.log('Search input not found - skipping (this is normal for pages without search)');
            }
        } catch (error) {
            console.warn('Error setting up search functionality:', error);
        }

        // Donation form
        try {
            const donationForm = document.getElementById('donationForm');
            if (donationForm && typeof donationForm.addEventListener === 'function') {
                donationForm.addEventListener('submit', handleDonationSubmit);
                console.log('Donation form listener added');
            }
        } catch (error) {
            console.warn('Error setting up donation form:', error);
        }

        // Newsletter form
        try {
            const newsletterForm = document.getElementById('newsletterForm');
            if (newsletterForm && typeof newsletterForm.addEventListener === 'function') {
                newsletterForm.addEventListener('submit', handleNewsletterSubmit);
                console.log('Newsletter form listener added');
            }
        } catch (error) {
            console.warn('Error setting up newsletter form:', error);
        }

        // Modal
        try {
            const modal = document.getElementById('modal');
            if (modal && modal.addEventListener && typeof modal.addEventListener === 'function') {
                modal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        closeModal();
                    }
                });
                console.log('Modal listener added');
            }
        } catch (error) {
            console.warn('Error setting up modal:', error);
        }
        
        console.log('Event listeners setup completed');
    } catch (error) {
        console.error('Critical error in setupEventListeners:', error);
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Search Functionality
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = allItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.shortDescription.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    
    displayItems(filteredItems);
}

// Load Featured Items
function loadFeaturedItems() {
    try {
        const itemsToShow = allItems.slice(0, (currentItemsPage + 1) * itemsPerPage);
        displayItems(itemsToShow);
    } catch (error) {
        console.error('Error loading featured items:', error);
    }
}

function displayItems(items) {
    try {
        const itemsGrid = document.getElementById('itemsGrid');
        
        if (!itemsGrid) {
            console.log('Items grid not found - skipping display (normal for pages without item grid)');
            return;
        }
        
        itemsGrid.innerHTML = items.map(item => `
            <div class="item-card fade-in-up">
                <img src="${item.image}" alt="${item.title}" class="item-image">
                <div class="item-info">
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-description">${item.shortDescription}</p>
                    <div class="item-meta">
                        <span class="item-price">₹${item.price}</span>
                        <span class="item-condition">${item.condition}</span>
                    </div>
                    <button class="btn btn-primary" onclick="viewItem(${item.id})">
                        <i class="fas fa-eye"></i>
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
        
        console.log(`Displayed ${items.length} items`);
    } catch (error) {
        console.error('Error displaying items:', error);
    }
}

function loadMoreItems() {
    currentItemsPage++;
    loadFeaturedItems();
}

function showAllItems() {
    displayItems(allItems);
    showToast('Showing all available items', 'success');
}

// Load Contributors
function loadContributors() {
    try {
        const contributorsTimeline = document.getElementById('contributorsTimeline');
        
        if (!contributorsTimeline) {
            console.log('Contributors timeline not found - skipping (normal for pages without contributors section)');
            return;
        }
        
        contributorsTimeline.innerHTML = mockData.contributors.map(contributor => `
            <div class="contributor-card fade-in-up">
                <div class="contributor-rank">#${contributor.rank}</div>
                <div class="contributor-header">
                    <img src="${contributor.avatar}" alt="${contributor.name}" class="contributor-avatar">
                    <div class="contributor-info">
                        <h4>${contributor.name}</h4>
                        <div class="contributor-stats">
                            ${contributor.specialty} • Since ${formatDate(contributor.joinDate)}
                        </div>
                    </div>
                </div>
                <div class="contributor-contributions">
                    <div>
                        <div class="contribution-count">${contributor.totalDonations}</div>
                        <div class="contribution-label">Donations</div>
                    </div>
                    <div>
                        <div class="contribution-count">₹${contributor.totalValue}</div>
                        <div class="contribution-label">Total Value</div>
                    </div>
                </div>
            </div>
        `).join('');
        
        console.log('Contributors loaded successfully');
    } catch (error) {
        console.error('Error loading contributors:', error);
    }
}

// Utility Functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
    });
}

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form Handlers
function handleDonationSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const donationData = {
        donorName: formData.get('donorName'),
        donorEmail: formData.get('donorEmail'),
        itemCategory: formData.get('itemCategory'),
        itemDescription: formData.get('itemDescription'),
        timestamp: new Date().toISOString()
    };
    
    // Store in localStorage (mock backend)
    const donations = JSON.parse(localStorage.getItem('donations') || '[]');
    donations.push(donationData);
    localStorage.setItem('donations', JSON.stringify(donations));
    
    showToast('Thank you for your donation! We will contact you soon.', 'success');
    e.target.reset();
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Store in localStorage (mock backend)
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem('subscribers', JSON.stringify(subscribers));
        showToast('Successfully subscribed to our newsletter!', 'success');
    } else {
        showToast('You are already subscribed!', 'info');
    }
    
    e.target.reset();
}

// Interactive Functions
function viewItem(itemId) {
    const item = allItems.find(i => i.id === itemId);
    if (item) {
        const modalContent = `
            <h2>${item.title}</h2>
            <img src="${item.image}" alt="${item.title}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 8px; margin: 1rem 0;">
            <div style="margin: 1rem 0;">
                <p><strong>Price:</strong> ₹${item.price}</p>
                <p><strong>Condition:</strong> ${item.condition}</p>
                <p><strong>Category:</strong> ${item.category}</p>
                <p><strong>Contributor:</strong> ${item.contributor}</p>
            </div>
            <div style="margin: 1.5rem 0;">
                <h3>Product Description</h3>
                <p style="line-height: 1.6; color: var(--text-secondary);">${item.description}</p>
            </div>
            <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="addToCart(${itemId})">
                    <i class="fas fa-cart-plus"></i>
                    Add to Cart
                </button>
                <button class="btn btn-outline" onclick="contactContributor('${item.contributor}')">
                    <i class="fas fa-envelope"></i>
                    Contact Contributor
                </button>
            </div>
        `;
        showModal(modalContent);
    }
}

function addToCart(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (!cart.includes(itemId)) {
        cart.push(itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast('Item added to cart!', 'success');
    } else {
        showToast('Item already in cart!', 'info');
    }
    closeModal();
}

function contactContributor(contributorName) {
    showToast(`Contacting ${contributorName}...`, 'info');
    closeModal();
}

function showFullLeaderboard() {
    const leaderboardContent = `
        <h2>Contributor Leaderboard</h2>
        <div style="max-height: 400px; overflow-y: auto;">
            ${mockData.contributors.map(contributor => `
                <div style="display: flex; align-items: center; padding: 1rem; border-bottom: 1px solid var(--border);">
                    <div style="margin-right: 1rem; font-weight: bold; color: var(--accent-primary);">#${contributor.rank}</div>
                    <img src="${contributor.avatar}" alt="${contributor.name}" style="width: 40px; height: 40px; border-radius: 50%; margin-right: 1rem;">
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">${contributor.name}</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">${contributor.specialty}</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-weight: 600;">${contributor.totalDonations} donations</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">$${contributor.totalValue}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    showModal(leaderboardContent);
}

function becomeContributor() {
    const contributorForm = `
        <h2>Become a Contributor</h2>
        <form id="contributorForm">
            <div class="form-group">
                <label for="contributorName">Full Name</label>
                <input type="text" id="contributorName" name="contributorName" required>
            </div>
            <div class="form-group">
                <label for="contributorEmail">Email Address</label>
                <input type="email" id="contributorEmail" name="contributorEmail" required>
            </div>
            <div class="form-group">
                <label for="contributorSpecialty">Specialty</label>
                <select id="contributorSpecialty" name="contributorSpecialty" required>
                    <option value="">Select your specialty...</option>
                    <option value="furniture">Furniture Restoration</option>
                    <option value="electronics">Electronics Refurbishment</option>
                    <option value="crafts">Handmade Crafts</option>
                    <option value="clothing">Vintage Clothing</option>
                    <option value="books">Book Collections</option>
                    <option value="garden">Garden Tools</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label for="contributorExperience">Experience Level</label>
                <select id="contributorExperience" name="contributorExperience" required>
                    <option value="">Select experience level...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">
                <i class="fas fa-user-plus"></i>
                Join as Contributor
            </button>
        </form>
    `;
    showModal(contributorForm);
    
    // Add event listener for the form
    setTimeout(() => {
        const contributorForm = document.getElementById('contributorForm');
        if (contributorForm) {
            contributorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const contributorData = {
                name: formData.get('contributorName'),
                email: formData.get('contributorEmail'),
                specialty: formData.get('contributorSpecialty'),
                experience: formData.get('contributorExperience'),
                joinDate: new Date().toISOString()
            };
            
            // Store in localStorage (mock backend)
            const contributors = JSON.parse(localStorage.getItem('newContributors') || '[]');
            contributors.push(contributorData);
            localStorage.setItem('newContributors', JSON.stringify(contributors));
            
            showToast('Welcome to our contributor community!', 'success');
            closeModal();
            });
        }
    }, 100);
}

// Modal Functions
function showModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    if (typeof content === 'string') {
        modalBody.innerHTML = content;
    } else {
        modalBody.innerHTML = getModalContent(content);
    }
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function getModalContent(type) {
    switch (type) {
        case 'privacy':
            return `
                <h2>Privacy Policy</h2>
                <p>We are committed to protecting your privacy and personal information. This policy explains how we collect, use, and protect your data.</p>
                <h3>Information We Collect</h3>
                <ul>
                    <li>Personal information you provide when registering or making donations</li>
                    <li>Usage data to improve our platform</li>
                    <li>Communication preferences</li>
                </ul>
                <h3>How We Use Your Information</h3>
                <ul>
                    <li>To process donations and transactions</li>
                    <li>To improve our services</li>
                    <li>To communicate with you about our platform</li>
                </ul>
                <p>We never sell your personal information to third parties.</p>
            `;
        case 'terms':
            return `
                <h2>Terms & Conditions</h2>
                <p>By using EcoMarket, you agree to these terms and conditions.</p>
                <h3>Platform Usage</h3>
                <ul>
                    <li>Users must be 18 years or older</li>
                    <li>All donations must be in good condition</li>
                    <li>Users are responsible for accurate item descriptions</li>
                </ul>
                <h3>Prohibited Activities</h3>
                <ul>
                    <li>Selling counterfeit or stolen items</li>
                    <li>Misrepresenting item condition or value</li>
                    <li>Harassment of other users</li>
                </ul>
                <p>We reserve the right to terminate accounts that violate these terms.</p>
            `;
        case 'refund':
            return `
                <h2>Refund Policy</h2>
                <p>We want you to be satisfied with your EcoMarket experience.</p>
                <h3>Refund Eligibility</h3>
                <ul>
                    <li>Items not as described</li>
                    <li>Damaged items not disclosed</li>
                    <li>Return within 7 days of purchase</li>
                </ul>
                <h3>Refund Process</h3>
                <ul>
                    <li>Contact our support team</li>
                    <li>Provide order details and photos</li>
                    <li>Return item in original condition</li>
                </ul>
                <p>Refunds are processed within 5-7 business days.</p>
            `;
        default:
            return content;
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toast Notifications
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

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Additional Interactive Features
function addToWishlist(itemId) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if (!wishlist.includes(itemId)) {
        wishlist.push(itemId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showToast('Added to wishlist!', 'success');
    } else {
        showToast('Already in wishlist!', 'info');
    }
}

function shareItem(itemId) {
    const item = allItems.find(i => i.id === itemId);
    if (item && navigator.share) {
        navigator.share({
            title: item.title,
            text: item.shortDescription,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = `${window.location.origin}?item=${itemId}`;
        navigator.clipboard.writeText(shareUrl);
        showToast('Link copied to clipboard!', 'success');
    }
}

// Initialize cart badge
function updateCartBadge() {
    try {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const badge = document.querySelector('.cart-badge');
        if (badge) {
            badge.textContent = cart.length;
            badge.style.display = cart.length > 0 ? 'block' : 'none';
            console.log('Cart badge updated');
        } else {
            // Try alternative selector
            const cartCount = document.getElementById('cartCount');
            if (cartCount) {
                cartCount.textContent = cart.length;
                cartCount.style.display = cart.length > 0 ? 'block' : 'none';
                console.log('Cart count updated');
            }
        }
    } catch (error) {
        console.error('Error updating cart badge:', error);
    }
}

// Enhanced JavaScript for Donate Page Animations and Interactions

// Donation-specific functionality
const donationFeatures = {
    // Counter animations for statistics
    animateCounters: function() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target') || +counter.innerText.replace(/[^0-9]/g, '');
                const count = +counter.innerText.replace(/[^0-9]/g, '');
                const inc = target / speed;

                if(count < target) {
                    counter.innerText = Math.ceil(count + inc).toLocaleString();
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target.toLocaleString();
                }
            };
            updateCount();
        });
    },

    // Animate elements on scroll
    setupScrollAnimations: function() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Trigger counter animation for stats
                    if (entry.target.classList.contains('header-stats')) {
                        setTimeout(() => this.animateCounters(), 500);
                    }
                    
                    // Add staggered animation for material categories
                    if (entry.target.classList.contains('materials-grid')) {
                        const categories = entry.target.querySelectorAll('.material-category');
                        categories.forEach((category, index) => {
                            setTimeout(() => {
                                category.style.animation = `bounceIn 0.8s ease-out both`;
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe key elements
        const elementsToObserve = [
            '.donate-header',
            '.header-stats',
            '.materials-grid',
            '.donation-guidelines',
            '.process-timeline',
            '.locations-container'
        ];

        elementsToObserve.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => observer.observe(el));
        });
    },

    // Enhanced material category interactions
    setupMaterialInteractions: function() {
        const materialCategories = document.querySelectorAll('.material-category');
        
        materialCategories.forEach(category => {
            const categoryIcon = category.querySelector('.category-icon');
            const materialItems = category.querySelectorAll('.material-item');
            
            // Add hover effects
            category.addEventListener('mouseenter', () => {
                categoryIcon.style.animation = 'pulse 0.5s ease-in-out';
                materialItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.transform = 'translateX(5px)';
                    }, index * 50);
                });
            });
            
            category.addEventListener('mouseleave', () => {
                categoryIcon.style.animation = 'pulse 2s ease-in-out infinite';
                materialItems.forEach(item => {
                    item.style.transform = 'translateX(0)';
                });
            });
        });
    },

    // Interactive statistics with hover effects
    setupStatisticsInteractions: function() {
        const statHighlights = document.querySelectorAll('.stat-highlight');
        
        statHighlights.forEach(stat => {
            const statNumber = stat.querySelector('.stat-number');
            const originalNumber = statNumber.textContent;
            
            stat.addEventListener('mouseenter', () => {
                stat.style.animation = 'none';
                stat.style.transform = 'translateY(-10px) scale(1.05)';
                
                // Add sparkle effect
                this.addSparkleEffect(stat);
            });
            
            stat.addEventListener('mouseleave', () => {
                stat.style.transform = 'translateY(0) scale(1)';
                this.removeSparkleEffect(stat);
            });
        });
    },

    // Add sparkle animation effect
    addSparkleEffect: function(element) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle-effect';
        sparkle.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, #22c55e, transparent);
            border-radius: 50%;
            opacity: 0;
            animation: sparkle 1s ease-in-out infinite;
            pointer-events: none;
        `;
        
        element.appendChild(sparkle);
    },

    // Remove sparkle effect
    removeSparkleEffect: function(element) {
        const sparkle = element.querySelector('.sparkle-effect');
        if (sparkle) {
            sparkle.remove();
        }
    },

    // Enhanced button interactions
    setupButtonInteractions: function() {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translateY(0) scale(1)';
            });
            
            button.addEventListener('click', (e) => {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                button.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    },

    // Initialize all donation page features
    init: function() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupScrollAnimations();
                this.setupMaterialInteractions();
                this.setupStatisticsInteractions();
                this.setupButtonInteractions();
            });
        } else {
            this.setupScrollAnimations();
            this.setupMaterialInteractions();
            this.setupStatisticsInteractions();
            this.setupButtonInteractions();
        }
    }
};

// Additional CSS animations via JavaScript
const additionalStyles = `
    @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
    }
    
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize donation page features
donationFeatures.init();

document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('DOM Content Loaded - Initializing EcoMarket...');
        
        // Initialize theme first
        try {
            initializeTheme();
            console.log('Theme initialized');
        } catch (error) {
            console.error('Error initializing theme:', error);
        }
        
        // Setup event listeners
        try {
            setupEventListeners();
        } catch (error) {
            console.error('Error setting up event listeners:', error);
        }
        
        // Load page content
        try {
            loadFeaturedItems();
        } catch (error) {
            console.warn('Error loading featured items:', error);
        }
        
        try {
            loadContributors();
        } catch (error) {
            console.warn('Error loading contributors:', error);
        }
        
        // Setup smooth scrolling
        try {
            setupSmoothScrolling();
        } catch (error) {
            console.warn('Error setting up smooth scrolling:', error);
        }
        
        // Setup scroll animations
        try {
            setupScrollAnimations();
        } catch (error) {
            console.warn('Error setting up scroll animations:', error);
        }
        
        // Setup mission animations
        try {
            setupMissionAnimations();
        } catch (error) {
            console.warn('Error setting up mission animations:', error);
        }
        
        // Update cart badge
        try {
            updateCartBadge();
        } catch (error) {
            console.warn('Error updating cart badge:', error);
        }
        
        console.log('EcoMarket initialization completed successfully');
        
    } catch (error) {
        console.error('Critical error during initialization:', error);
    }
});

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Mission Section Animations
function setupMissionAnimations() {
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class to mission section
                entry.target.classList.add('mission-animate');
                
                // Trigger counter animations for mission stats
                if (entry.target.classList.contains('mission')) {
                    setTimeout(() => {
                        animateMissionCounters();
                    }, 500);
                }
            }
        });
    }, observerOptions);
    
    // Observe mission section
    const missionSection = document.querySelector('.mission');
    if (missionSection) {
        observer.observe(missionSection);
    }
}

// Animate Mission Counter Numbers
function animateMissionCounters() {
    const counters = document.querySelectorAll('.mission-stats-block .stat-number');
    const speed = 200;

    counters.forEach((counter, index) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace(/[^0-9]/g, '');
            const inc = target / speed;

            if (count < target) {
                const newCount = Math.ceil(count + inc);
                
                // Format the number based on the target value
                if (target >= 100000) {
                    counter.innerText = (newCount / 1000).toFixed(0) + 'K';
                } else if (target >= 1000) {
                    counter.innerText = (newCount / 1000).toFixed(1) + 'K';
                } else {
                    counter.innerText = newCount.toLocaleString();
                }
                
                setTimeout(updateCount, 1);
            } else {
                // Final formatting
                if (target >= 100000) {
                    counter.innerText = (target / 1000).toFixed(0) + 'K';
                } else if (target >= 1000) {
                    counter.innerText = (target / 1000).toFixed(1) + 'K';
                } else {
                    counter.innerText = target.toLocaleString();
                }
                
                // Add completion animation
                counter.parentElement.classList.add('counter-complete');
            }
        };
        
        // Start animation with a stagger effect
        setTimeout(() => {
            updateCount();
        }, index * 100);
    });
}