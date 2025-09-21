let overlayActive = true;
let overlay = null;

    if (overlayActive) {
        // Create overlay
        overlay = document.querySelector("html");
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
    } 


