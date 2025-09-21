let overlayActive = true;
let overlay = null;

function toggleOverlay() {
    if (!overlayActive) {
        // Create overlay
        overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            background: black !important;
            z-index: 999999 !important;
            pointer-events: none !important;
        `;
        document.body.appendChild(overlay);
        overlayActive = true;
    } else {
        // Remove overlay
        if (overlay) {
            overlay.remove();
            overlay = null;
        }
        overlayActive = false;
    }
}

toggleOverlay();