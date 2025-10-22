let overlayActive = false;
let overlay = null;

if (overlayActive) {
    overlay = document.createElement("div");

    Object.assign(overlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "black",
        zIndex: "999999",
        pointerEvents: "none",
    });

    // Append to the root element, not <body>
    document.documentElement.appendChild(overlay);
}



