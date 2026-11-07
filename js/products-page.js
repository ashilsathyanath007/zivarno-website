// Products Page Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('products-grid');
  const searchInput = document.getElementById('product-search');
  const categoryFilters = document.querySelectorAll('.cat-filter-btn');
  const productCountSpan = document.getElementById('product-count');

  let currentCategory = 'all';
  let searchQuery = '';

  // Render products
  function renderProducts() {
    if (!gridContainer || typeof PRODUCTS_DATA === 'undefined') return;

    const filtered = PRODUCTS_DATA.filter(item => {
      const matchCat = currentCategory === 'all' || item.category.toLowerCase() === currentCategory.toLowerCase();
      const matchSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (productCountSpan) {
      productCountSpan.textContent = `${filtered.length} creation${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f0ebe1] flex items-center justify-center text-[#b0a171] text-2xl">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <h3 class="text-xl font-serif text-[#1a1715] mb-2">No matching handcrafted pieces found</h3>
          <p class="text-sm text-[#736d67] max-w-md mx-auto mb-6">Try clearing your search filters or browse all our available collections.</p>
          <button id="reset-filters-btn" class="gold-outline-btn px-6 py-2 rounded text-xs font-semibold tracking-wider">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          categoryFilters.forEach(b => {
            if (b.dataset.category === 'all') {
              b.classList.add('bg-[#1a1715]', 'text-[#b0a171]', 'border-[#b0a171]');
              b.classList.remove('bg-white', 'text-[#544e47]');
            } else {
              b.classList.remove('bg-[#1a1715]', 'text-[#b0a171]', 'border-[#b0a171]');
              b.classList.add('bg-white', 'text-[#544e47]');
            }
          });
          renderProducts();
        });
      }
      return;
    }

    gridContainer.innerHTML = filtered.map(item => {
      const secondaryImg = item.images && item.images.length > 1 ? item.images[1] : item.mainImage;
      
      const whatsappText = encodeURIComponent(`Hello Zivarno, I am interested in inquiring about "${item.title}". Please provide pricing, availability, and export shipping details.`);

      return `
        <div class="luxury-card group bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between" data-id="${item.id}">
          <div>
            <!-- Image Frame -->
            <div class="relative aspect-[4/5] overflow-hidden bg-[#f0ebe1]/40 cursor-pointer view-details-trigger" data-id="${item.id}">
              <img src="${item.mainImage}" alt="${item.title}" class="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 product-img-zoom">
              <img src="${secondaryImg}" alt="${item.title} angle" class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 product-img-zoom">
              
              <!-- Badges -->
              <div class="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
                <span class="bg-[#1a1715]/85 backdrop-blur-md text-[#c8b98b] text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded border border-[#b0a171]/30">
                  ${item.category}
                </span>
              </div>

              <!-- Quick View Overlay -->
              <div class="absolute inset-0 bg-[#1a1715]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span class="bg-white text-[#1a1715] text-xs font-semibold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <i class="fa-solid fa-eye text-[#b0a171]"></i> View Details
                </span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6">
              <h3 class="font-serif text-lg text-[#1a1715] font-semibold mb-2 group-hover:text-[#8c7f53] transition-colors line-clamp-2 leading-snug cursor-pointer view-details-trigger" data-id="${item.id}">
                ${item.title}
              </h3>
              
              <p class="text-xs text-[#736d67] line-clamp-3 mb-4 leading-relaxed font-light">
                ${item.description.replace(/✨/g, '')}
              </p>

              ${item.dimensions ? `
                <div class="flex items-center gap-2 text-[11px] text-[#8c7f53] font-medium bg-[#fbf9f2] px-3 py-1.5 rounded border border-[#b0a171]/20 mb-4">
                  <i class="fa-solid fa-ruler-combined text-[#b0a171]"></i>
                  <span class="truncate">${item.dimensions}</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="px-6 pb-6 pt-0 border-t border-[#f0ebe1] mt-auto flex items-center gap-2">
            <button class="flex-1 gold-btn text-[11px] py-2.5 rounded font-semibold tracking-wider view-details-trigger" data-id="${item.id}">
              Details
            </button>
            <a href="https://wa.me/917907265546?text=${whatsappText}" target="_blank" rel="noopener noreferrer" class="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-2.5 rounded text-sm flex items-center justify-center transition-colors" title="Inquire on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:zivarnoexports@gmail.com?subject=Inquiry:%20${encodeURIComponent(item.title)}" class="bg-[#1a1715] hover:bg-[#b0a171] text-white px-3 py-2.5 rounded text-sm flex items-center justify-center transition-colors" title="Email Inquiry">
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');

    // Attach click triggers for modal
    document.querySelectorAll('.view-details-trigger').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = parseInt(el.dataset.id || el.closest('[data-id]').dataset.id, 10);
        openProductModal(id);
      });
    });
  }

  // Filter Categories
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => {
        b.classList.remove('bg-[#1a1715]', 'text-[#b0a171]', 'border-[#b0a171]');
        b.classList.add('bg-white', 'text-[#544e47]');
      });
      btn.classList.add('bg-[#1a1715]', 'text-[#b0a171]', 'border-[#b0a171]');
      btn.classList.remove('bg-white', 'text-[#544e47]');
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Search input with debounce
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Initial render
  renderProducts();

  // Modal handler
  window.openProductModal = function(id) {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    if (!modal) return;

    // Populate modal content
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-category').textContent = product.category;
    document.getElementById('modal-desc').innerHTML = product.description.replace(/\n/g, '<br><br>');
    
    // Dimensions & Weight
    const specContainer = document.getElementById('modal-specs');
    if (specContainer) {
      let specs = `
        <div class="grid grid-cols-2 gap-3 text-xs bg-[#fbf9f2] p-4 rounded-xl border border-[#b0a171]/20 my-4">
          <div>
            <span class="text-[#8c7f53] uppercase font-semibold text-[10px] block">Provenance</span>
            <span class="text-[#1a1715] font-medium">Kerala, India</span>
          </div>
          <div>
            <span class="text-[#8c7f53] uppercase font-semibold text-[10px] block">Artisan Lineage</span>
            <span class="text-[#1a1715] font-medium">Hereditary Master Craftsmen</span>
          </div>
          ${product.dimensions ? `
            <div class="col-span-2 sm:col-span-1">
              <span class="text-[#8c7f53] uppercase font-semibold text-[10px] block">Dimensions</span>
              <span class="text-[#1a1715] font-medium">${product.dimensions}</span>
            </div>
          ` : ''}
          ${product.weight ? `
            <div class="col-span-2 sm:col-span-1">
              <span class="text-[#8c7f53] uppercase font-semibold text-[10px] block">Weight</span>
              <span class="text-[#1a1715] font-medium">${product.weight}</span>
            </div>
          ` : ''}
        </div>
      `;
      specContainer.innerHTML = specs;
    }

    // Gallery images
    const mainImgEl = document.getElementById('modal-main-img');
    const thumbsContainer = document.getElementById('modal-thumbs');
    
    if (mainImgEl) mainImgEl.src = product.mainImage;

    if (thumbsContainer) {
      if (product.images && product.images.length > 1) {
        thumbsContainer.innerHTML = product.images.map((img, idx) => `
          <button class="w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${idx === 0 ? 'border-[#b0a171]' : 'border-transparent opacity-70 hover:opacity-100'} modal-thumb-btn" data-src="${img}">
            <img src="${img}" alt="Thumbnail ${idx+1}" class="w-full h-full object-cover">
          </button>
        `).join('');

        // Thumbnail switcher
        document.querySelectorAll('.modal-thumb-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.modal-thumb-btn').forEach(b => {
              b.classList.remove('border-[#b0a171]');
              b.classList.add('border-transparent', 'opacity-70');
            });
            btn.classList.add('border-[#b0a171]');
            btn.classList.remove('border-transparent', 'opacity-70');
            mainImgEl.src = btn.dataset.src;
          });
        });
      } else {
        thumbsContainer.innerHTML = '';
      }
    }

    // WhatsApp and Email Inquiry buttons
    const waText = encodeURIComponent(`Hello Zivarno, I am interested in inquiring about your piece "${product.title}". Please provide pricing, export delivery timeframe, and certificate details.`);
    const waBtn = document.getElementById('modal-wa-btn');
    if (waBtn) waBtn.href = `https://wa.me/917907265546?text=${waText}`;

    const mailBtn = document.getElementById('modal-mail-btn');
    if (mailBtn) mailBtn.href = `mailto:zivarnoexports@gmail.com?subject=Artwork%20Inquiry:%20${encodeURIComponent(product.title)}&body=${waText}`;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modal = document.getElementById('product-modal');
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // Handle ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });

  // Check URL hash for direct product slug
  if (window.location.hash) {
    const slug = window.location.hash.replace('#', '');
    const found = PRODUCTS_DATA.find(p => p.slug === slug);
    if (found) {
      setTimeout(() => openProductModal(found.id), 300);
    }
  }
});

