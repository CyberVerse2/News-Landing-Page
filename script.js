let hamburger = document.querySelector(".sidebar-toggle");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".sidebar>img");
let sidebarItems = document.querySelectorAll(".sidebar *");

hamburger.addEventListener("click", function (e) {
  sidebar.style.display = "flex";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

closeBtn.addEventListener("click", function () {
  sidebar.style.display = "none";
  document.body.style.backgroundColor = "var(--page-color)";
});
