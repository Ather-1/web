function openNavigation () {
    const menu = document.querySelector('.nav-links');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');

    openMenu.addEventListener('click', () => {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'block';
        menu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        openMenu.style.display = 'block';
        closeMenu.style.display = 'none';
        menu.classList.remove('active');
    });
};

function HeroContentLoad () {
    const heroContent = document.querySelector(".hero-heading");
    setTimeout(() => {
        heroContent.classList.add('active');
    }, 2000);
}




document.addEventListener("DOMContentLoaded", ()=>{
    HeroContentLoad();
})
openNavigation();


