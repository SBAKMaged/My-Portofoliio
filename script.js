function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const threshold = 0.2; // Adjust this value to change when the animation triggers

  return (
    rect.bottom >= 0 &&
    rect.top <= windowHeight * threshold
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  const animatedSections = document.querySelectorAll('.scroll-animation');

  animatedSections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('animate');
    }
  });
}

// Event listener for scroll event
window.addEventListener('scroll', () => {
  handleScrollAnimations();
});

// Initial check for animations on page load
handleScrollAnimations();
