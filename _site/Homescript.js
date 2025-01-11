window.addEventListener('scroll', function() {
    const homesection = document.getElementById('home');
    const scrollPosition = window.scrollY;  // Get scroll position
    const homeheight = homesection.offsetHeight;  // Get height of the hero section
    
    // Calculate the fade-out effect (scroll position divided by the hero height)
    const opacityValue = 1 - (scrollPosition / homeheight);
    
    // Apply the opacity to the hero section, keeping it between 0 and 1
    if (opacityValue >= 0) {
        homesection.style.opacity = opacityValue;
    }
  });
  
  window.onload = function() {
    const heading = document.querySelector('#typewriter');
    setTimeout(() => {
        heading.style.animation = 'typing 4s steps(40, end), blink-caret 0.75s step-end 4';
    }, 500); // 500ms delay before typing starts

    heading.addEventListener('animationend', () => {
        heading.classList.add('finished');
    });
};
