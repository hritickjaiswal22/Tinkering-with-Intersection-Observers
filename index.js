const section1 = document.querySelector(".section1");

//* Default value for options
// const options = {
//     root:null,
//     threshold:0,
//     rootMargin:"String" think it of as margin e.g. "-150px" from top of viewport
// }

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-156.5px",
};

//* const observer = new IntersectionObserver(callback(entries),options)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => console.log(entry));
}, options);

observer.observe(section1);
