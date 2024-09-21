function onToggleMenu(element) {
    var navLinks = document.querySelector(".nav-links");
    if (!navLinks) return;
    var state = element.getAttribute("data-state");
    if (state === "menu") {
        // Changes the button state to 'close' and toggle icons
        element.setAttribute("data-state", "close");
        var menuIcon = document.getElementById("menuIcon");
        var closeIcon = document.getElementById("closeIcon");
        if (menuIcon) menuIcon.classList.add("hidden");
        if (closeIcon) closeIcon.classList.remove("hidden");
        // a dropping effect
        navLinks.classList.remove("top-[-100%]");
        navLinks.classList.add("top-[9%]", "animate-bounceIn");
    } else {
        // Change the button state to 'menu' and toggle icons
        element.setAttribute("data-state", "menu");
        var menuIcon = document.getElementById("menuIcon");
        var closeIcon = document.getElementById("closeIcon");
        if (menuIcon) menuIcon.classList.remove("hidden");
        if (closeIcon) closeIcon.classList.add("hidden");
        // Hide the menu
        navLinks.classList.remove("top-[9%]");
        navLinks.classList.add("top-[-100%]");
        // Remove bounce animation class
        navLinks.classList.remove("animate-bounceIn");
    }
}
