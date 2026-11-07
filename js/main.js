// Main UI Script for Zivarno Website
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuBtn = document.getElementById('close-menu-btn');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  if (closeMenuBtn && mobileMenu) {
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  // Navbar background change on scroll
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('shadow-lg', 'py-3');
        navbar.classList.remove('py-5');
      } else {
        navbar.classList.remove('shadow-lg', 'py-3');
        navbar.classList.add('py-5');
      }
    });
  }

  // Set current year in footers
  const yearSpans = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearSpans.forEach(span => span.textContent = currentYear);
});

// Toast notification helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('zivarno-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'zivarno-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-2xl text-white transform transition-all duration-300 translate-y-10 opacity-0 pointer-events-none';
    document.body.appendChild(toast);
  }

  if (type === 'success') {
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-lg shadow-2xl bg-[#1a1715] border border-[#b0a171] text-white transform transition-all duration-300 translate-y-0 opacity-100 pointer-events-auto';
    toast.innerHTML = `
      <svg class="w-6 h-6 text-[#b0a171]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <div>
        <p class="font-medium text-sm text-[#e5dec9]">${message}</p>
      </div>
    `;
  }

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
  }, 4000);
}

