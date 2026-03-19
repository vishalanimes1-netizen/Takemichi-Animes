// Google AdSense Implementation
(function() {
    // Load AdSense script
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_CLIENT_ID';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    
    // Initialize ads after script loads
    script.onload = function() {
        // Leaderboard ad
        const adSlot1 = document.createElement('ins');
        adSlot1.className = 'adsbygoogle';
        adSlot1.style.display = 'block';
        adSlot1.setAttribute('data-ad-client', 'ca-pub-YOUR_CLIENT_ID');
        adSlot1.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_1');
        adSlot1.setAttribute('data-ad-format', 'auto');
        adSlot1.setAttribute('data-full-width-responsive', 'true');
        document.getElementById('ad-space-1').appendChild(adSlot1);
        
        // Rectangle ad
        const adSlot2 = document.createElement('ins');
        adSlot2.className = 'adsbygoogle';
        adSlot2.style.display = 'block';
        adSlot2.setAttribute('data-ad-client', 'ca-pub-YOUR_CLIENT_ID');
        adSlot2.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_2');
        adSlot2.setAttribute('data-ad-format', 'rectangle');
        document.getElementById('ad-space-2').appendChild(adSlot2);
        
        // Rectangle ad
        const adSlot3 = document.createElement('ins');
        adSlot3.className = 'adsbygoogle';
        adSlot3.style.display = 'block';
        adSlot3.setAttribute('data-ad-client', 'ca-pub-YOUR_CLIENT_ID');
        adSlot3.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_3');
        adSlot3.setAttribute('data-ad-format', 'rectangle');
        document.getElementById('ad-space-3').appendChild(adSlot2);
        
        // Rectangle ad
        const adSlot4 = document.createElement('ins');
        adSlot4.className = 'adsbygoogle';
        adSlot4.style.display = 'block';
        adSlot4.setAttribute('data-ad-client', 'ca-pub-YOUR_CLIENT_ID');
        adSlot4.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_4');
        adSlot4.setAttribute('data-ad-format', 'rectangle');
        document.getElementById('ad-space-4').appendChild(adSlot2);
        
        
        // Push ads
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
        (adsbygoogle = window.adsbygoogle || []).push({});
    };
})();