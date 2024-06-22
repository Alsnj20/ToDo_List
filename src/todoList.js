//Import objects
import ProjectManager from './projectManager.js';
import Project from './project.js';
import Task from './task.js';

//Objects
const projectManager = new ProjectManager();
const taskAll = [];


//PROJECTS
const addProject = document.querySelector('#addProject');
const formProject = document.querySelector('#formProject');
const inProject = document.querySelector('#formProject input');
const btnDoProject = document.querySelector('#doProject');
const btnCancelProject = document.querySelector('#cancelProject');

//Animations
addProject.addEventListener('click', () => {
  formProject.style.display = 'block';
})

btnCancelProject.addEventListener('click', () => {
  formProject.style.display = 'none';
})

btnDoProject.addEventListener('click', () => {
  if (inProject.value !== '') {
    projectManager.addProject(new Project(inProject.value));
    createProject(inProject.value);
    formProject.style.display = 'none';
    inProject.value = '';
  }
});

//Projects
const titleProject = document.querySelector('#titleProject');
const projects = document.querySelector('.optionsProjects .sectionList ul');

//Create Project
const createProject = (title) => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="#"><i class='bx bx-list-plus'></i>${title}</a><i class='bx bx-x'></i>`;
  projects.appendChild(li);
}


//Remove Project
projects.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.classList.contains('bx-x')) {
    e.target.parentElement.remove();
    const titleProject = e.target.parentElement.firstChild.textContent;
    const project = projectManager.getProjectName(titleProject);
    projectManager.removeProject(project);
  }
});



//add Task
//Animations
const formTask = document.querySelector('.formTask');
const addTask = document.querySelector('#addTask');
const okTask = document.querySelector('#okTask');
const cancelTask = document.querySelector('#cancelTask');


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
  formTask.style.display = 'none';
});

okTask.addEventListener('click', () => {
  formTask.classList.add('hide');
  toggleBlur();
  formTask.style.display = 'none';
})
//Task


//Tasks


