function onClickNavMenu() {
  document.getElementById("navicon").classList.toggle("nav-icon-open");
  document.getElementById("navmenu").classList.toggle("nav-menu-changed");

  var pb = document.getElementById("cardContainer");

  if (window.innerWidth < 1081) {
    if (pb.style.marginTop === "20em") {
      pb.style.marginTop = "0em";
    } else {
      pb.style.marginTop = "20em";
    }
  }
}
