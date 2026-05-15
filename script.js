const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const forms = document.querySelectorAll("[data-lead-form]");

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
    }
  });
}

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector("[data-form-note]");
    if (note) {
      note.textContent = "Заявка готова к отправке. Подключите форму к CRM, почте или мессенджеру.";
    }
    form.reset();
  });
});
