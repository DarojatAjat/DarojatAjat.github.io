/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


const galerysection=document.querySelectorAll('.gallery-image');
  galerysection.forEach((img,i)=>{
  img.dataset.aos='fade-down';
  img.dataset.aosDelay=i*50;
  img.dataset.aosDuration=1000;
  });
const inpupgroup=document.querySelectorAll('.input-group');
  inpupgroup.forEach((ig,i)=>{
  ig.dataset.aos='fade-down';
  ig.dataset.aosDelay=i*50;
  ig.dataset.aosDuration=1000;
  });
