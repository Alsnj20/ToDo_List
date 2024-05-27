const img = document.querySelector('.toggle-button img');

img.addEventListener('click', () => {
  console.log('clicked');
  if(img.classList.contains('dark')) {
    img.src = './img/sunny.png';
    img.classList.remove('dark');
    img.classList.add('active');
  }else{
    img.classList.add('dark');
    img.classList.remove('active');
    img.src = './img/moon.png';
  }
})