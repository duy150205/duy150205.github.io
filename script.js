const popup1 = document.getElementById("tab1")
const popup2 = document.getElementById("tab2")
const popup3 = document.getElementById("tab3")
function pop1(){
  popup1.style.display="block";
  window.onclick = function(event) {
    if (event.target == popup1) {
      popup1.style.display = "none";
    }
  }
}
function pop2(){
  popup2.style.display="block";
  window.onclick = function(event) {
    if (event.target == popup2) {
      popup2.style.display = "none";
    }
  }
}
function pop3(){
  popup3.style.display="block";
  window.onclick = function(event) {
    if (event.target == popup3) {
      popup3.style.display = "none";
    }
  }
}

function checkForVisibility() {
  var a = document.querySelectorAll(".intro-text-no-transition");
  a.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("intro-text-transition");
    } else {
      header.classList.remove("intro-text-transition");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}
