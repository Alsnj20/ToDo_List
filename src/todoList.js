//Add Project
const addProject = document.querySelector('#addProject');
const formProject = document.querySelector('#formProject');
const inProject = document.querySelector('#formProject input');
const btnDoProject = document.querySelector('#doProject');
const btnCancelProject = document.querySelector('#cancelProject');
addProject.addEventListener('click', () => {
  formProject.style.display = 'block';
})

btnCancelProject.addEventListener('click', () => {
  formProject.style.display = 'none';
})

btnDoProject.addEventListener('click', () => {
  if (inProject.value !== '') {
    ProjectsList.push(new Project(inProject.value));
    createProject(inProject.value);
    formProject.style.display = 'none';
    inProject.value = '';
  }
});

//Projects
const titleProject = document.querySelector('#titleProject');
const projects = document.querySelector('.sectionList ul');

const projectsList = [];

const createProject = (title) => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="#"><i class='bx bx-list-plus'></i>${title}</a><i class='bx bx-dots-vertical-rounded'></i>`;
  projects.appendChild(li);
}

//add Task
//Animations
const formTask = document.querySelector('.formTask');
console.log(formTask);
const addTask = document.querySelector('#addTask');
console.log(addTask);
const okTask = document.querySelector('#okTask');
console.log(okTask);
const cancelTask = document.querySelector('#cancelTask');
console.log(cancelTask);


const toggleBlur = () => {
  const items = document.querySelectorAll('.content-nav, .content-text i, .title, .task').forEach(item => {
    item.classList.toggle('blur');
  });
}

addTask.addEventListener('click', () => {
  formTask.style.display = 'flex';
  formTask.classList.remove('hide');
  toggleBlur();  
});

cancelTask.addEventListener('click', () => {
  formTask.classList.add('hide');
  toggleBlur();
  setTimeout(() => {
    formTask.style.display = 'none';
    formTask.classList.remove('hide');
  }, 900); // Tiempo de la animación inversa
});

okTask.addEventListener('click', () => {
  formTask.classList.add('hide');
  toggleBlur();
  setTimeout(() => {
    formTask.style.display = 'none';
    formTask.classList.remove('hide');
  }, 900); // Tiempo de la animación inversa
})



//Task


//Tasks


