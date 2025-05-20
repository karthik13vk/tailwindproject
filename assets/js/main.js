// function menuClick() {
//   var menu = document.getElementById("mobileMenu");
//   if (menu.classList.contains("hidden")) {
//    menu.classList.remove("hidden")
//   } else {
//      menu.classList.add("hidden")
//   }
// }
function menuClick() {
  var menu = document.getElementById("mobileMenu");

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("opacity-0", "-translate-y-4");
      menu.classList.add("opacity-100", "translate-y-0");
    }, 10); // Slight delay for transition to work
  } else {
    menu.classList.add("opacity-0", "-translate-y-4");
    menu.classList.remove("opacity-100", "translate-y-0");

    // Hide it after animation completes
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300); // Match duration-300
  }
}
