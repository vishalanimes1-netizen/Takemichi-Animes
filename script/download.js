// Get download info
const downloadUrl = 'https://www.google.com';

// Ad timer configuration
const AD_WAIT_TIME = 15; // seconds
let timeLeft = AD_WAIT_TIME;
let adShown = false;
let downloadTriggered = false;

// Elements
const timerDisplay = document.getElementById('timer');
const skipBtn = document.getElementById('skipBtn');
const manualDownloadLink = document.getElementById('manualDownloadLink');
const progressFill = document.getElementById('progressFill');

// Set manual download link
if (manualDownloadLink) {
    manualDownloadLink.href = downloadUrl;
}

// Countdown timer
const timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        enableDownload();
    }
}, 1000);

// Enable download after timer
function enableDownload() {
    timerDisplay.textContent = '0';
    skipBtn.disabled = false;
    skipBtn.textContent = '⏭️ Skip Ad & Download Now';
    
    // Show manual download section

    
    // Auto download after ad (optional)
    //if (!downloadTriggered) {
    //    setTimeout(() => {
    //        startDownload();
    //    }, 2000);
    // }
}

// Start download function
function startDownload() {
    if (!downloadTriggered) {
        downloadTriggered = true;
        
        // Track ad view in Firebase (optional)
        if (typeof trackAdView === 'function') {
            trackAdView();
        }
        
        // Redirect to download
        window.location.href = downloadUrl;
    }
}

// Skip button click handler
skipBtn.addEventListener('click', () => {
    if (!skipBtn.disabled) {
        startDownload();
    }
});

// Optional: Track if user saw the ad
function trackAdView() {
    // You can send this to Firebase Analytics
    console.log('Ad viewed by user');
    
    // Example Firebase tracking
    if (typeof firebase !== 'undefined') {
        const adViewsRef = ref(database, 'analytics/adViews');
        runTransaction(adViewsRef, (current) => (current || 0) + 1);
    }
}

// Fallback: If user navigates away and comes back
window.addEventListener('load', () => {
    if (timeLeft <= 0) {
        enableDownload();
    }
});