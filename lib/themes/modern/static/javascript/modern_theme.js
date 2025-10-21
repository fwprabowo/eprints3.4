/**
 * Modern EPrints Theme JavaScript
 * Handles interactive elements and enhancements
 */

(function() {
  'use strict';

  /**
   * Initialize theme when DOM is ready
   */
  function initModernTheme() {
    initDropdownMenus();
    initMobileMenu();
    initSearchEnhancements();
  }

  /**
   * Initialize dropdown menus
   */
  function initDropdownMenus() {
    const menuItems = document.querySelectorAll('.ep_tm_menu > li > a[menu]');

    menuItems.forEach(function(menuLink) {
      const submenuId = menuLink.getAttribute('menu');
      const submenu = document.getElementById(submenuId);

      if (submenu) {
        // Show submenu on hover
        menuLink.parentElement.addEventListener('mouseenter', function() {
          submenu.style.display = 'block';
        });

        // Hide submenu on mouse leave
        menuLink.parentElement.addEventListener('mouseleave', function() {
          submenu.style.display = 'none';
        });

        // Toggle on click for mobile
        menuLink.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            const isVisible = submenu.style.display === 'block';
            submenu.style.display = isVisible ? 'none' : 'block';
          }
        });
      }
    });
  }

  /**
   * Initialize mobile menu toggle
   */
  function initMobileMenu() {
    // Check if mobile menu button exists, if not create one
    const header = document.querySelector('.ep_tm_header');
    if (!header) return;

    // Mobile menu toggle functionality can be added here
    // This is a placeholder for future mobile menu enhancements
  }

  /**
   * Search enhancements
   */
  function initSearchEnhancements() {
    const searchBox = document.querySelector('.ep_tm_searchbarbox');

    if (searchBox) {
      // Add focus styling
      searchBox.addEventListener('focus', function() {
        this.parentElement.classList.add('search-focused');
      });

      searchBox.addEventListener('blur', function() {
        this.parentElement.classList.remove('search-focused');
      });
    }
  }

  /**
   * Smooth scroll to anchor links
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModernTheme);
  } else {
    initModernTheme();
  }

})();
