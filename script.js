const body = document.querySelector('body');

 const h1 = document.querySelector('h1');

const p = document.querySelectorAll(

 "p");

const a = document.querySelectorAll("a");

let isBlackmode = true;



function changeMode() {

  let colors = [isBlackmode ? "black" : "white",isBlackmode ? "black" : "cyan"]

  body.style.background = isBlackmode ? "linear-gradient(-135deg,white,gray,gray)" : "linear-gradient(-135deg,gray,black,black)";

  body.style.color = colors[0];

  h1.style.color = colors[1];

  a.forEach(x => x.style.color = colors[1]);

  p.forEach(x => x.style.borderColor = colors[0]);

 isBlackmode = !isBlackmode;

}

document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  let active = false;

  const lazyLoad = function() {
    if (active === false) {
      active = true;

      setTimeout(function() {
        lazyImages.forEach(function(lazyImage) {
          if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");

            lazyImages = lazyImages.filter(function(image) {
              return image !== lazyImage;
            });

            if (lazyImages.length === 0) {
              document.removeEventListener("scroll", lazyLoad);
              window.removeEventListener("resize", lazyLoad);
              window.removeEventListener("orientationchange", lazyLoad);
            }
          }
        });

        active = false;
      }, 200);
    }
  };

  document.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);
  window.addEventListener("orientationchange", lazyLoad);
});
