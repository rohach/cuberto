function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
init();

function mouseFollower() {
  var main = document.querySelector(".main");
  var box = document.querySelector("#box");

  main.addEventListener("mousemove", function (dets) {
    gsap.to(box, {
      duration: 2,
      x: dets.x,
      y: dets.y,
      ease: "elastic.out(1, 0.75)",
    });
  });

  main.addEventListener("mouseleave", function () {
    gsap.to(box, {
      duration: 0.5,
      opacity: 0,
    });
  });

  main.addEventListener("mouseenter", function () {
    gsap.to(box, {
      duration: 0.5,
      opacity: 1,
    });
  });
}

mouseFollower();

function mouseDetail() {
  var video = document.querySelector(".video");
  var text = document.querySelector("#text").innerHTML;

  video.addEventListener("mouseenter", function (dets) {
    box.innerHTML = text;
    gsap.to(box, {
      scale: 6,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    });
  });
  video.addEventListener("mouseleave", function (dets) {
    box.innerHTML = "";
    gsap.to(box, {
      scale: 1,
    });
  });
}
