const img = document.querySelector('.toggle-button img');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.content-nav div:first-child')
img.addEventListener('click', () => {
  img.classList.toggle("dark");
  body.classList.toggle("dark");
  
  if(img.classList.contains('dark')) {
    img.src = './img/moon.png';

  }else{
    img.src = './img/sunny.png';
  }
})

menu.addEventListener('click', () => {
  const isHidden = nav.classList.toggle('active');
  if (isHidden) {
    menu.classList.replace('bx-menu', 'bx-x');
  } else {
    menu.classList.replace('bx-x', 'bx-menu');
  }
})
