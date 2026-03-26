// WinX MZ — Script v2

document.addEventListener('DOMContentLoaded', function () {

    // --- WhatsApp tracking ---
    document.querySelectorAll('#btn-whatsapp, .cta-main, .floating-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            if (typeof fbq !== 'undefined') fbq('track', 'Contact');
        });
    });

    // --- Particles de fundo ---
    var container = document.getElementById('particles');
    if (container) {
        for (var i = 0; i < 18; i++) {
            var p = document.createElement('div');
            p.className = 'particle';
            var size = Math.random() * 5 + 2;
            p.style.cssText = [
                'width:' + size + 'px',
                'height:' + size + 'px',
                'left:' + Math.random() * 100 + '%',
                'animation-duration:' + (Math.random() * 12 + 8) + 's',
                'animation-delay:' + (Math.random() * 10) + 's',
            ].join(';');
            container.appendChild(p);
        }
    }

    // --- Scroll fade-in ---
    var fadeEls = document.querySelectorAll('.benefit-item, .product-card, .urgency-inner, .video-wrapper');
    fadeEls.forEach(function (el) { el.classList.add('fade-in'); });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) { observer.observe(el); });

});