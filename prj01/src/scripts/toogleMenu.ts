function onToggleMenu(element: HTMLElement): void {
    const navLinks = document.querySelector('.nav-links') as HTMLElement | null;
    if (!navLinks) return;

    const state = element.getAttribute('data-state');

    if (state === 'menu') {
        // Changes the button state to 'close' and toggle icons
        element.setAttribute('data-state', 'close');
        const menuIcon = document.getElementById('menuIcon') as HTMLElement | null;
        const closeIcon = document.getElementById('closeIcon') as HTMLElement | null;
        
        if (menuIcon) menuIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');

        // a dropping effect
        navLinks.classList.remove('top-[-100%]');
        navLinks.classList.add('top-[9%]', 'animate-bounceIn');
    } else {
        // Change the button state to 'menu' and toggle icons
        element.setAttribute('data-state', 'menu');
        const menuIcon = document.getElementById('menuIcon') as HTMLElement | null;
        const closeIcon = document.getElementById('closeIcon') as HTMLElement | null;
        
        if (menuIcon) menuIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');

        // Hide the menu
        navLinks.classList.remove('top-[9%]');
        navLinks.classList.add('top-[-100%]');

        // Remove bounce animation class
        navLinks.classList.remove('animate-bounceIn');
    }
}