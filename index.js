document.querySelectorAll('.menu-item').forEach(menuItem => {
    menuItem.addEventListener("mouseenter", toggleActive);
    menuItem.addEventListener("mouseleave", toggleActive);
});

function toggleActive() {
    this.classList.toggle('active');
}


const closeBtn = document.querySelector(".side-menu__close");
const openBtn = document.querySelector(".btn__burger");
const sideMenu = document.querySelector(".side-menu");

openBtn.addEventListener("click", openAni);
closeBtn.addEventListener("click", closeAni);
function closeAni(){
    sideMenu.classList.add('close');
    closeBtn.classList.add('hidden');
}
function openAni(){
    sideMenu.classList.remove('close');
    closeBtn.classList.remove('hidden');
}




const images = document.querySelectorAll(".features__img-block img");

gsap.set(images, { opacity: 0 }); 
gsap.set(images[0], { opacity: 1 }); 

let tl = gsap.timeline({ repeat: -1 });


images.forEach((img, i) => {
    tl.to(images, { opacity: 0, duration: 0, immediateRender: false }) 
      .to(img, { opacity: 1, duration: 0 }) 
      .to({}, { duration: 1.5 });
  });

