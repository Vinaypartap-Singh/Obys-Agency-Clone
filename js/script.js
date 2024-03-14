const tl = gsap.timeline();
var h5Timer = document.querySelector("#line1-part1 h5");
var grow = 0;

tl.from(".line h1, .line h2", {
  y: 150,
  duration: 0.6,
  stagger: 0.2,
  delay: 0.5,
});

tl.from("#line1-part1, .line h2", {
  opacity: 0.3,
  onStart: setInterval(function () {
    if (grow < 100) {
      grow++;
      h5Timer.innerHTML = grow;
    } else {
      h5Timer.innerHTML = grow;
      clearInterval(interval);
    }
  }, 35),
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3,
});

tl.from("#page1", {
  y: "100%",
});

tl.to("#loader", {
  display: "none",
});
