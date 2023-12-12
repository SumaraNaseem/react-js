let fa_solid = document.querySelector(".fa-solid");
if (fa_solid) {
  fa_solid.addEventListener("click", function () {
    if (document.querySelector(".form-password").type == "password") {
      document.querySelector(".form-password").type = "text";
      document
        .querySelector(".fa-solid")
        .classList.replace("fa-eye", "fa-eye-slash");
    } else {
      document.querySelector(".form-password").type = "password";
      document
        .querySelector(".fa-solid")
        .classList.replace("fa-eye-slash", "fa-eye");
    }
  });
}

let pills_home_tab = document.getElementById("pills-home-tab");
let pills_profile = document.getElementById("pills-profile");

function switchTabInfo() {
  // switch 'pills-home' to 'pills-profile'
  let pills_home = document.getElementById("pills-home");

  if (pills_home.classList.contains("show")) {
    pills_home.classList.remove("show");
    pills_home.classList.remove("active");
    pills_profile.classList.add("show");
    pills_profile.classList.add("active");
  } else {
    pills_home.classList.add("show");
    pills_home.classList.add("active");
    pills_profile.classList.remove("show");
    pills_profile.classList.remove("active");
  }

  // set focus to 'pills-home-tab'
  pills_home_tab.click();
  // pills_home_tab.focus();
}

document.addEventListener("DOMContentLoaded", function () {
  // select 'pills-home-tab' as default tab
  if (pills_home_tab) {
    pills_home_tab.click();
    // pills_home_tab.focus();
    // pills_home_tab.active();
  }
});
