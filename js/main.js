// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});

// TESTIMONIAL SLIDER
let index = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showTestimonial(){
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
  index = (index + 1) % testimonials.length;
}

if(testimonials.length > 0){
  showTestimonial();
  setInterval(showTestimonial, 5000);
}
