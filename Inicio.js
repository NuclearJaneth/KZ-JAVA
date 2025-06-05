// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Shoelace components are web components and don't need additional JS initialization
    
    // You can add any custom interactivity here if needed
    console.log('Kickzone site loaded');
    
    // Example: Add click handler for promo banner close
    const promoBanner = document.querySelector('sl-alert.promo-banner');
    if (promoBanner) {
        promoBanner.addEventListener('sl-after-hide', () => {
            console.log('Promo banner closed');
        });
    }
});