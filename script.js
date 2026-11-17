// Shared interactions for the J. storefront
const enterButton = document.getElementById("enter-btn");
const countrySelect = document.getElementById("country");

if (enterButton && countrySelect) {
  enterButton.addEventListener("click", () => {
    // Keep the selected region available to the next page in this browser tab.
    try { sessionStorage.setItem("j-store-region", countrySelect.value); } catch (error) {}
  });
}

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const searchToggle = document.getElementById("search-toggle");
const searchBar = document.getElementById("search-bar");
const searchClose = document.getElementById("search-close");
if (searchToggle && searchBar) searchToggle.addEventListener("click", () => searchBar.classList.toggle("open"));
if (searchClose && searchBar) searchClose.addEventListener("click", () => searchBar.classList.remove("open"));

let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");
document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    cartCount += 1;
    if (cartCountElement) cartCountElement.textContent = cartCount;
    const original = button.textContent;
    button.textContent = "ADDED ✓";
    window.setTimeout(() => { button.textContent = original; }, 1000);
  });
});

const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (newsletterMessage) newsletterMessage.textContent = "Thank you for subscribing! Connect this form to an email service to collect sign-ups.";
    newsletterForm.reset();
  });
}
