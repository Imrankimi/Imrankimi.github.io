document.getElementById("year").textContent = new Date().getFullYear();

const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

const id = new URLSearchParams(location.search).get("id");
const index = PROJECTS.findIndex((p) => p.id === id);
const project = PROJECTS[index];

if (!project) {
  $("notFound").hidden = false;
} else {
  renderProject(project);
}

function renderProject(p) {
  document.title = `${p.title} | Imran Hakimi`;

  const badge = $("pBadge");
  badge.textContent = p.badge;
  badge.classList.add(p.live ? "badge-live" : "badge-done");
  $("pOrg").textContent = p.org;
  $("pTitle").textContent = p.title;
  $("pPeriod").textContent = p.period || "";
  $("pOverview").textContent = p.overview;

  $("pLinks").replaceChildren(...(p.links || []).map((link) => {
    const a = el("a", "btn btn-outline btn-sm", `${link.label} ↗`);
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  }));

  $("pSections").replaceChildren(...p.sections.flatMap((s) => {
    const ul = el("ul", "bullets");
    s.items.forEach((text) => ul.append(el("li", null, text)));
    return [el("h2", "modal-heading", s.heading), ul];
  }));

  $("pTech").replaceChildren(...p.tech.map((t) => el("li", null, t)));

  if (p.device === "phone") {
    $("pGallery").classList.add("device-phone");
    $("lightbox").classList.add("device-phone");
  }

  renderPager();
  $("project").hidden = false;
  loadGallery(p.images || []);
}

function renderPager() {
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const link = (proj, label, cls) => {
    const a = el("a", `pager-link ${cls}`);
    a.href = `project.html?id=${proj.id}`;
    a.append(el("span", "mono", label), el("strong", null, proj.title));
    return a;
  };
  $("pPager").replaceChildren(link(prev, "← Previous", "prev"), link(next, "Next →", "next"));
}

// ===== Gallery =====
const AUTOPLAY_MS = 3000; // time each image stays before moving to the next
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let images = [];
let current = 0;
let autoplayTimer;
let hovering = false;

// Auto-advance, paused while hovering the gallery, viewing full size, or when the tab is hidden.
function scheduleNext() {
  clearTimeout(autoplayTimer);
  if (reduceMotion || images.length < 2 || hovering || $("lightbox").open || document.hidden) return;
  autoplayTimer = setTimeout(() => showImage(current + 1), AUTOPLAY_MS);
}

// Only keep images that actually load, so missing files never show as broken.
function loadGallery(list) {
  Promise.all(list.map((img) => new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => resolve(img);
    probe.onerror = () => resolve(null);
    probe.src = img.src;
  }))).then((results) => {
    images = results.filter(Boolean);
    if (!images.length) return;

    $("galleryThumbs").replaceChildren(...images.map((img, i) => {
      const btn = el("button", "thumb");
      btn.setAttribute("aria-label", img.caption || `Image ${i + 1}`);
      const t = el("img");
      t.src = img.src;
      t.alt = "";
      t.loading = "lazy";
      // Narrow thumbnails for phone screenshots so they aren't cropped to a strip
      t.addEventListener("load", () => btn.classList.toggle("portrait", t.naturalHeight > t.naturalWidth));
      btn.append(t);
      btn.addEventListener("click", () => showImage(i));
      return btn;
    }));
    $("galleryThumbs").hidden = images.length < 2;
    $("pGallery").hidden = false;
    showImage(0);
  });
}

function showImage(i) {
  current = (i + images.length) % images.length;
  const img = images[current];
  const main = $("galleryMain");
  main.src = img.src;
  main.classList.remove("fade-in");
  void main.offsetWidth; // restart the fade animation
  main.classList.add("fade-in");
  $("galleryMain").alt = img.caption || project.title;
  $("galleryCaption").textContent = img.caption || "";
  // Side phones preview the neighbouring screens (only visible in phone mode)
  const multi = images.length > 1;
  $("sidePrev").hidden = !multi;
  $("sideNext").hidden = !multi;
  if (multi) {
    $("sidePrevImg").src = images[(current - 1 + images.length) % images.length].src;
    $("sideNextImg").src = images[(current + 1) % images.length].src;
  }
  document.querySelectorAll(".thumb").forEach((t, n) => t.classList.toggle("active", n === current));
  // Keep the active thumbnail visible without scrolling the page
  const thumbs = $("galleryThumbs");
  const active = thumbs.children[current];
  if (active) thumbs.scrollTo({ left: active.offsetLeft - (thumbs.clientWidth - active.clientWidth) / 2, behavior: "smooth" });
  if (lightbox.open) updateLightbox();
  scheduleNext();
}

$("pGallery").addEventListener("mouseenter", () => { hovering = true; scheduleNext(); });
$("pGallery").addEventListener("mouseleave", () => { hovering = false; scheduleNext(); });
document.addEventListener("visibilitychange", scheduleNext);

// ===== Lightbox =====
const lightbox = $("lightbox");

function updateLightbox() {
  const img = images[current];
  $("lbImg").src = img.src;
  $("lbImg").alt = img.caption || project.title;
  $("lbCaption").textContent = img.caption || "";
  const multi = images.length > 1;
  $("lbPrev").hidden = !multi;
  $("lbNext").hidden = !multi;
}

$("galleryMainBtn").addEventListener("click", () => {
  updateLightbox();
  lightbox.showModal();
  document.body.style.overflow = "hidden";
  scheduleNext();
});
$("sidePrev").addEventListener("click", () => showImage(current - 1));
$("sideNext").addEventListener("click", () => showImage(current + 1));
$("lbClose").addEventListener("click", () => lightbox.close());
$("lbPrev").addEventListener("click", () => showImage(current - 1));
$("lbNext").addEventListener("click", () => showImage(current + 1));
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) lightbox.close(); });
lightbox.addEventListener("close", () => { document.body.style.overflow = ""; scheduleNext(); });

document.addEventListener("keydown", (e) => {
  if (!images.length) return;
  if (e.key === "ArrowLeft") showImage(current - 1);
  if (e.key === "ArrowRight") showImage(current + 1);
});
