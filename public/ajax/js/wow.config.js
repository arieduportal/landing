setTimeout(initializeWOW, 1000);

/**
 * Initializes the WOW.js library with custom configurations
 */
function initializeWOW() {
    const wowConfig = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 55,
        callback: animationCallback
    };

    const wowInstance = new WOW(wowConfig);

    wowInstance.init();
}

/**
 * Callback function to execute when an animation is triggered
 * @param {HTMLElement} box - The animated element
 */
function animationCallback(box) {
    box.classList.add('axiolot__hub');
}
