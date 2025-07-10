const navLinks = document.querySelectorAll(".side-nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {
    link.classList.remove(" ");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    // 탭 버튼 active 변경
    document
      .querySelectorAll(".tab")
      .forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");

    // 모든 article 숨김
    document.querySelectorAll(".experience-item").forEach((item) => {
      item.style.display = "none";
    });

    // 해당 카테고리만 표시
    document
      .querySelectorAll(`.experience-item.${category}`)
      .forEach((item) => {
        item.style.display = "flex"; // 또는 block
      });
  });
});

// 초기에는 work만 표시
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".experience-item").forEach((item) => {
    item.style.display = item.classList.contains("work") ? "flex" : "none";
  });
});
