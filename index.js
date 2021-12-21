const images = document.querySelectorAll("[data-src]");

const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        imageObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "0px 0px 320px 0px",
  }
);

images.forEach((image) => {
  imageObserver.observe(image);
});

function loadImage(imageELement) {
  console.log(imageELement);
  const src = imageELement.getAttribute("data-src");

  imageELement.src = src;
}
