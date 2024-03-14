function loadingAnimation() {
  const tl = gsap.timeline();
  var h5Timer = document.querySelector("#line1-part1 h5");
  var grow = 0;
  var intervalId; // Declare intervalId variable to store the ID returned by setInterval

  tl.from(".line h1, .line h2", {
    y: 150,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.5,
  });

  tl.from("#line1-part1, .line h2", {
    opacity: 0.3,
    onStart: function () {
      intervalId = setInterval(function () {
        if (grow < 100) {
          grow++;
          h5Timer.innerHTML = grow;
        } else {
          h5Timer.innerHTML = grow;
          clearInterval(intervalId); // Clear the interval using intervalId
        }
      }, 35);
    },
  });

  tl.to("#loader", {
    duration: 0.4,
    delay: 3,
  });

  tl.to("#loader", {
    y: "-100%",
  });

  tl.to("#loader", {
    display: "none",
  });
}

loadingAnimation();

// Add Cursor

document.addEventListener("mousemove", function (dets) {
  gsap.to("#crsr", {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.1,
  });
});

Shery.makeMagnet(".navItem", {
  style: 3,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  debug: true,
});
