const img = document.querySelector('.toggle-button img');
const navItem = document.querySelector('.content-nav');
const body = document.querySelector('body');
img.addEventListener('click', () => {
  console.log('clicked');
  if(img.classList.contains('dark')) {
    img.src = './img/sunny.png';
    img.classList.remove('dark');
    img.classList.add('active');
    navItem.style.backgroundColor = '#DFBCC8';
    navItem.style.color = '#151515';
  }else{
    img.classList.add('dark');
    img.classList.remove('active');
    img.src = './img/moon.png';
    navItem.style.backgroundColor = '#151515';
    navItem.style.color = '#ffffff';
  }
})