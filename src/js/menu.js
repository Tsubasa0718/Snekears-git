'use strict';
// fadeIn
const fadeIn = (selector, duration = 1000) => {
    const target = document.querySelector(selector);
    target.style.display = 'block';
    const animation = target.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: duration,
            fill: 'forwards'
        }
    );
}

// fadeOut
const fadeOut = (selector, duration = 1000) => {
    const target = document.querySelector(selector);
    const animation = target.animate(
        [
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration: duration,
            fill: 'forwards'
        }
    );
    animation.onfinish = () => {
        target.style.display = 'none';
    }
}

// fadeToggle
const fadeToggle = (selector, duration = 1000) => {
    const target = document.querySelector(selector);
    const currentOpacity = window.getComputedStyle(target).opacity;
    const currentDisplay = window.getComputedStyle(target).display;
    if (currentOpacity === '0' || currentDisplay === 'none' || target.style.display === 'none') {
        fadeIn(selector, duration);
    } else {
        fadeOut(selector, duration);
    }
}

// menubtn
const MenuBtn = document.getElementById('js-menubtn');
const Nav = document.querySelector('.l-header__nav');
const NavLinks = document.querySelectorAll('.l-header__nav--link');

MenuBtn.addEventListener('click', () => {
    MenuBtn.classList.toggle('active');
    Nav.classList.toggle('active');
    fadeToggle('.l-header__mask', 300)
    const isActive = Nav.classList.contains('active');

    NavLinks.forEach(link => {
        link.setAttribute('tabindex', isActive ? '0' : '-1');
    });
});
