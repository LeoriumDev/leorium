// Simple analytics for bloat-free.com
// Basic Google Analytics setup

// Only load analytics on production
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Load Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KJKP2VRTEK';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-KJKP2VRTEK');
}
