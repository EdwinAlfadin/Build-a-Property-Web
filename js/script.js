// ============================
// AOS (Animate On Scroll)
// ============================
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// ============================
// GSAP Animation
// ============================

// Navbar
gsap.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1,
});

// Hero Title
gsap.from(".hero-title", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

// Hero Text
gsap.from(".hero-text", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.6,
});

// Hero Buttons
gsap.from(".hero-btn", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.9,
});

// Hero Image
gsap.from(".hero-image", {
  x: 100,
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
});

// ============================
// Navbar berubah saat scroll
// ============================

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 80) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ============================
// Form Kontak
// ============================

const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;

    if (nama === "" || email === "") {
      alert("Nama dan Email harus diisi.");

      return;
    }

    alert("Terima kasih, pesan Anda berhasil dikirim.");

    form.reset();
  });
}
