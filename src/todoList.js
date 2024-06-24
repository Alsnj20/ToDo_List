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

//Project
const titleProject = document.querySelector('#titleProject');
const projects = document.querySelector('.optionsProjects .sectionList ul');
const projectDefault = document.querySelector('.optionsDefault .sectionList ul');

//Create Project
const createProject = (title) => {
  const li = document.createElement('li');
  li.innerHTML = `<a class='titlePag' href="#"><i class='bx bx-list-plus'></i>${title}</a><i class='bx bx-x'></i>`;
  projects.appendChild(li);
}

const showTasks = (name) => {
  titleProject.textContent = name;
  switch (name) {
    case 'All':
      if(mainElement.children.length > 0){
      ProjectManager.projects.forEach(project => {
        project.tasks.forEach(task => {
          createTask(task.title, task.date, task.time, task.description);
        });
      });
      }else{
        titleProject.textContent += '(No tasks)'
      }
      break;
    case 'Today':
      const today = new Date().toLocaleDateString();
      console.log(today);
      projectManager.projects.forEach(project => {
        project.tasks.forEach(task => {
          if(task.date === today){
            createTask(task.title, task.date, task.time, task.description);
          }
        });
      });
      break;
    case 'This Week':
      const week = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
      console.log(week);  
      /*projectManager.projects.forEach(project => {
        project.tasks.forEach(task => {
          const taskDate = new Date(task.date);
          if(taskDate <= week){
            createTask(task.title, task.date, task.time, task.description);
          }
        });
      });*/
      break;
    case 'Important':
      projectManager.projects.forEach(project => {
        project.tasks.forEach(task => {
          if(task.priority === 'High'){
            createTask(task.title, task.date, task.time, task.description);
          }
        });
      });
      break;
    default:
      const project = projectManager.getProjectName(name);
      project.tasks.forEach(task => {
        createTask(task.title, task.date, task.time, task.description);
      });
      break;
  }
}


//Defecto
createProject('Project');
projectManager.addProject(new Project('Project'));
showTasks('Project');

//Remove Project
projects.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.classList.contains('bx-x')) {
    e.target.parentElement.remove();
    const titleProject = e.target.parentElement.firstChild.textContent;
    const project = projectManager.getProjectName(titleProject);
    projectManager.removeProject(project);
  }
  if (e.target.classList.contains('titlePag')) {
    showTasks(titleProject.textContent);
  }

});

projectDefault.addEventListener('click', (e) => {
  if (e.target.classList.contains('titlePag')) {
    showTasks(e.target.textContent);
  }

})



//TASKS
const formTask = document.querySelector('.formTask');
const addTask = document.querySelector('#addTask');
const okTask = document.querySelector('#okTask');
const cancelTask = document.querySelector('#cancelTask');

//Animations
const toggleBlur = () => {
  const items = document.querySelectorAll('.content-nav, .content-text i, .title, .task').forEach(item => {
    item.classList.toggle('blur');
  });
}

addTask.addEventListener('click', () => {
  formTask.style.display = 'flex';
  formTask.classList.remove('hide');
  toggleBlur();
  updateProject();
});

// formTask
const titleTask = document.querySelector('#titleTask');
const descriptionTask = document.querySelector('#descriptionTask');
const dateTask = document.querySelector('#dateTask');
const secProject = document.querySelector('#secProject');
const priorityBtns = document.querySelectorAll('.priority button');
let priority = 'high';


cancelTask.addEventListener('click', () => {
  formTask.classList.add('hide');
  toggleBlur();
  formTask.style.display = 'none';
});

okTask.addEventListener('click', () => {
  formTask.classList.add('hide');
  toggleBlur();
  formTask.style.display = 'none';
  const project = projectManager.getProjectName(secProject.value);
  console.log(project);
  const time = new Date().toLocaleTimeString().slice(0, 5);
  project.addTask(new Task(titleTask.value, descriptionTask.value, dateTask.value, time, priority));
  console.log("PROJECTOS:"+projectManager.printProjects());
})

const handlePriority = (e) => {
  priorityBtns.forEach(btn => {
    btn.classList.remove('priorityActive');
  })
  e.target.classList.add('priorityActive');
  priority = e.target.textContent;
}

priorityBtns.forEach(btn => {
  btn.addEventListener('click', handlePriority);
})

const updateProject = () => {
  secProject.innerHTML = '';
  projectManager.projects.forEach(project => {
    const option = document.createElement('option');
    option.value = project.name;
    option.textContent = project.name;
    secProject.appendChild(option);
  });

}

//Task
const mainElement = document.querySelector('main');
const createTask = (title, date, time, description) => {
  // Crear elementos necesarios
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const taskTitleDiv = document.createElement('div');
  taskTitleDiv.classList.add('taskTitle');

  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  titleDiv.textContent = title;

  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date');
  const dateSpan = document.createElement('span');
  dateSpan.textContent = date;
  const timeSpan = document.createElement('span');
  timeSpan.textContent = " " + time;
  dateDiv.append(dateSpan, timeSpan);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('taskDescription');
  descriptionDiv.textContent = description;

  const optionsTaskDiv = document.createElement('div');
  optionsTaskDiv.classList.add('optionsTask');
  const checkIcon = document.createElement('i');
  checkIcon.classList.add('bx', 'bx-check');
  const trashIcon = document.createElement('i');
  trashIcon.classList.add('bx', 'bx-trash');
  optionsTaskDiv.append(checkIcon, trashIcon);

  taskTitleDiv.append(titleDiv, dateDiv);
  taskDiv.setAttribute('id', updatePriority());
  taskDiv.append(taskTitleDiv, descriptionDiv, optionsTaskDiv);
  mainElement.appendChild(taskDiv);
}

//Remove Task

const updatePriority = () => {
  switch (priority) {
    case 'High':
      return 'high';
    case 'Medium':
      return 'medium';
    case 'Low':
      return 'low';
  }
}
//Tasks
//Done and Remove Task
mainElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('bx-trash')) {
    e.target.parentElement.parentElement.remove();
    console
  }
  if (e.target.classList.contains('bx-check')) {
    e.target.parentElement.parentElement.classList.toggle('done');
  }
});





