const addProject = document.querySelector('#addProject');
console.log(addProject);
const formProject = document.querySelector('#formProject');
const inProject = document.querySelector('#formProject input');
const btnDoProject = document.querySelector('#doProject');
const btnCancelProject = document.querySelector('#cancelProject');
addProject.addEventListener('click', ()=> {
  formProject.style.display = 'block';
})

btnCancelProject.addEventListener('click', ()=> {
  formProject.style.display = 'none';
})

btnDoProject.addEventListener('click', ()=> {
  console.log(inProject.value);
  formProject.style.display = 'none';
  inProject.value = '';
});


