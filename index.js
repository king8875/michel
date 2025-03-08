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