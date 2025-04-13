// Debounce function to limit how often a function can be called
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

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

// Debounced scroll handler
const debouncedScrollHandler = debounce(handleScrollAnimations, 100);

// Event listeners
window.addEventListener('scroll', debouncedScrollHandler);
window.addEventListener('resize', debouncedScrollHandler);

// Initial check for animations on page load
document.addEventListener('DOMContentLoaded', () => {
  handleScrollAnimations();
});
