let hamburger = document.querySelector(".sidebar-toggle");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".sidebar>img");
let sidebarItems = document.querySelectorAll(".sidebar *");

hamburger.addEventListener("click", function (e) {
  // check if screen width is less than or equal to 375px
  if (screen.width <= 480) {
    // it matches
    // hamburger.style.display = "none";
    sidebar.style.display = "flex";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  // console.log("toggled");
});
console.log(sidebarItems);
closeBtn.addEventListener("click", function () {
  // check if screen width is less than or equal to 375px
  if (screen.width <= 480) {
    sidebar.style.display = "none";
    document.body.style.backgroundColor = "var(--page-color)";
  }
});
