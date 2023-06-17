const text = document.getElementById("header-text")

const animate = (element,position) => {
     element.style.transform = `translateX(${position/3}vw)`
} 

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
  window.requestAnimationFrame(function(){
    animate(text,lastKnownScrollPosition*.2)
  });
});


const popup1 = document.getElementById("myModal1")
const popup2 = document.getElementById("myModal2")
const popup3 = document.getElementById("myModal3")
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

