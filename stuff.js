const text = document.getElementById("head")

const animate = (element,position) => {
     element.style.transform = `translateX(${position/3}vw)`
} 

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
  window.requestAnimationFrame(function(){
    animate(text,lastKnownScrollPosition*.2)
  });
});
