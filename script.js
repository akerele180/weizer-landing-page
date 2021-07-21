const hamburger = document.getElementById('nav-mob');
const ham = document.querySelector('.fa-times');
const hamm = document.querySelector('.fa-bars');
const div = document.getElementById('nav-bar-item');

hamburger.addEventListener('click', ()=>{
  ham.classList.toggle("active");
  hamm.classList.toggle("unactive");
  div.classList.toggle("active");
  console.log('akerele')
})