const img = document.querySelector('.toggle-button img');
const body = document.querySelector('body');
img.addEventListener('click', () => {
  img.classList.toggle("dark");
  body.classList.toggle("dark");
  
  if(img.classList.contains('dark')) {
    img.src = './img/moon.png';

  }else{
    img.src = './img/sunny.png';
  }
})