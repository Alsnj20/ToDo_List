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
const addTask = document.querySelector('#addTask');



//Task


