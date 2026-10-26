// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navToggle.classList.remove("open");
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
});

navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

// Hide nav on scroll down, show on scroll up
let lastY = window.scrollY;
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 20);
  nav.classList.toggle("hidden", y > lastY && y > 300 && !navLinks.classList.contains("open"));
  lastY = y;
}, { passive: true });

// Reveal sections as they enter the viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Highlight the nav link for the section in view
const sectionLinks = [...navLinks.querySelectorAll('a[href^="#"]')];
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    sectionLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-45% 0px -50% 0px" });

document.querySelectorAll("section[id]").forEach((s) => activeObserver.observe(s));

// Project cards open their own detail page
document.querySelectorAll(".project-card[data-project]").forEach((card) => {
  const url = `project.html?id=${card.dataset.project}`;
  const link = document.createElement("a");
  link.className = "project-link mono";
  link.href = url;
  link.innerHTML = "View Details &rarr;";
  card.append(link);
  card.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    location.href = url;
  });
});

// Project filter tabs
const tabs = document.querySelectorAll(".tab");
const cards = document.querySelectorAll(".project-card");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.toggle("active", t === tab));
    const filter = tab.dataset.filter;
    cards.forEach((card) => {
      card.classList.toggle("hide", filter !== "all" && card.dataset.category !== filter);
    });
  });
});
