
const main_menu = document.querySelector(".menu-bar");
const btn_menu = document.querySelector(".btnMenu");
const logo = main_menu.querySelector(".fas");
const menuWrapper = document.querySelector(".menu-wrapper")
const menuBar = menuWrapper.querySelectorAll(".menu-word> a");
const main_container = document.querySelector(".main-menu")
const main = document.querySelectorAll(".main-menu > div");

console.log
var temp = 0;
logo.addEventListener("click", function () {
  //메뉴바에서
  btn_menu.style.width = "150px";
  btn_menu.style.opacity = "1";
  btn_menu.style.transform = "rotateY(30deg)";
  btn_menu.style.transition = "all 0.5s linear";
  main_container.style.transform = "rotateY(-15deg)";
  main_container.style.transition = "all 0.5s linear";
  temp = 0;
});


for (let i = 0; i < menuBar.length; i++) {
  let setMenu = menuBar[i]
  setMenu.addEventListener("click", () => {
    let show_mainMenu = main[i];
    for (let k = 0; k < main.length; k++) {
      var hide_mainMenu = main[k];
      if (i == k) {
        console.log(i);
        show_mainMenu.style.transition = "all 1s ease"
        show_mainMenu.style.opacity = "1";
      } else {
        hide_mainMenu.style.transition = "all 1s ease-in"
        hide_mainMenu.style.opacity = "0"
      }

      btn_menu.style.opacity = "0";
      btn_menu.style.transform = "rotateY(0)";
      btn_menu.style.transition = "all 0.5s linear";
      main_container.style.transform = "rotateY(0deg)";
      main_container.style.transition = "all 0.5s linear";
    }
  })
}
