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
