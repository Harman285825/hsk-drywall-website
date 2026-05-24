

/* ================= MOBILE MENU ================= */

const menuBtn =
document.querySelector('.menu-btn');

const navbar =
document.querySelector('.navbar');

if(menuBtn){

menuBtn.onclick = () => {

navbar.classList.toggle('active');

}

}

/* ================= STICKY HEADER ================= */

window.addEventListener('scroll',function(){

const header =
document.querySelector('.header');

if(header){

header.classList.toggle(
'sticky',
window.scrollY > 50
);

}

});

/* ================= SCROLL REVEAL ================= */

const hiddenElements =
document.querySelectorAll(
'.about, .services, .gallery, .contact, .why-choose, .services-page, .gallery-page, .contact-page'
);

if(hiddenElements.length > 0){

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

});

hiddenElements.forEach((el)=>{

el.classList.add('hidden');

observer.observe(el);

});

}

/* ================= LIGHTBOX ================= */

const galleryImages =
document.querySelectorAll(
'.gallery-container img, .gallery-box img'
);

const lightbox =
document.querySelector('.lightbox');

const lightboxImg =
document.querySelector('.lightbox-img');

const closeBtn =
document.querySelector('.close');

if(galleryImages.length > 0 &&
lightbox &&
lightboxImg &&
closeBtn){

galleryImages.forEach((img)=>{

img.addEventListener('click',()=>{

lightbox.classList.add('active');

lightboxImg.src = img.src;

});

});

closeBtn.addEventListener('click',()=>{

lightbox.classList.remove('active');

});

}

/* ================= LOADER ================= */

window.addEventListener('load',()=>{

const loader =
document.querySelector('.loader');

if(loader){

loader.classList.add('hide');

}

});

/* ================= COUNTER ================= */

const counters =
document.querySelectorAll('.counter');

if(counters.length > 0){

counters.forEach(counter=>{

counter.innerText = '0';

const updateCounter = ()=>{

const target =
+counter.getAttribute('data-target');

const c =
+counter.innerText;

const increment =
target / 100;

if(c < target){

counter.innerText =
`${Math.ceil(c + increment)}`;

setTimeout(updateCounter,30);

}
else{

counter.innerText = target;

}

};

updateCounter();

});

}

