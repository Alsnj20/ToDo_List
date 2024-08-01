import initializeToggle from './toggle.js';
// Scructure
const createElement = (type, attributes = {}, ...children) => {
  const element = document.createElement(type);
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  return element;
}

const createNav = () => {
  return createElement('div', { class: ['content-nav'] },
    createElement('div', {},
      createElement('header', {}, createElement('h1', {}, 'TodoList')),
      createDefaultOptions(),
      createProjects()
    ),
    createFooter()
  );
}

const createDefaultOptions = () => {
  return createElement('div', { class: ['optionsDefault'] },
    createElement('h2', {}, 'Home'),
    createElement('div', { class: ['sectionList'] },
      createElement('ul', {},
        createElement('li', {}, createElement('a', { class: ['titlePag'], href: '#' }, createElement('i', { class: ['bx bx-bullseye'] }), 'All')),
        createElement('li', {}, createElement('a', { class: ['titlePag'], href: '#' }, createElement('i', { class: ['bx bx-calendar-event'] }), 'Today')),
        createElement('li', {}, createElement('a', { class: ['titlePag'], href: '#' }, createElement('i', { class: ['bx bx-calendar-week'] }), 'Next 7 Days')),
        createElement('li', {}, createElement('a', { class: ['titlePag'], href: '#' }, createElement('i', { class: ['bx bx-calendar-star'] }), 'Important'))
      )
    )
  );
}

const createProjects = () => {
  return createElement('div', { class: ['optionsProjects'] },
    createElement('h2', { id: 'projects' }, 'Projects'),
    createElement('div', { class: ['sectionList'] },
      createElement('ul', {}),
      createElement('button', { id: 'addProject' },
        createElement('i', { class: ['bx bx-plus-circle'] }), ' Add Project'
      ),
      createProjectForm()
    )
  );
}

const createProjectForm = () => {
  return createElement('div', { id: 'formProject', style: 'display: none;' },
    createElement('input', { type: 'text', placeholder: 'Name Project'}),
    createElement('div', { class: ['optionsCreateProject'] },
      createElement('button', { id: 'doProject' }, 'ACEPTAR'),
      createElement('button', { id: 'cancelProject' }, 'CANCELAR')
    )
  );
}

const createFooter = () => {
  return createElement('footer', {},
    createElement('a', { href: '#', target: '_blank' },
      createElement('p', {}, 'Copyright © 2024 Alsnj20 :)')
    )
  );
}

const createMainContent = () => {
  return createElement('div', { class: ['content-text'] },
    createElement('i', { class: ['bx bx-menu menu'] }),
    createElement('div', { class: ['title'] },
      createElement('h1', { id: 'titleProject' }),
      createElement('div', {},
        createElement('button', { id: 'addTask' }, 'Add Task'),
        createToggleButton()
      )
    ),
    createElement('main', { id: 'taskList' }),
    createTaskForm()
  );
}

const createToggleButton = () => {
  return createElement('div', { class: ['toggle'] },
    createElement('div', { class: ['toggle-button'] },
      createElement('img', { src: './img/sunny.png' })
    )
  );
}

const createTaskForm = () => {
  return createElement('form', { class: ['formTask'], id: 'taskForm', style: 'display: none;' },
    createElement('h2', {}, 'Create Task'),
    createElement('div', {},
      createElement('input', { type: 'text', id: 'titleTask', placeholder: 'Title', required: true })
    ),
    createElement('div', {},
      createElement('textarea', { id: 'descriptionTask', placeholder: 'Description' })
    ),
    createElement('div', {},
      createElement('label', { for: 'dateTask' }, 'Date:'),
      createElement('input', { type: 'date', id: 'dateTask', required: true })
    ),
    createElement('div', {},
      createElement('label', { for: 'secProject' }, 'Project:'),
      createElement('select', { id: 'secProject', required: true })
    ),
    createElement('div', { class: ['priority'] },
      createElement('label', { for: 'importantTask' }, 'Important:'),
      createElement('button', { id: 'high', type: 'button' }, 'High'),
      createElement('button', { id: 'medium', type: 'button' }, 'Medium'),
      createElement('button', { id: 'low', type: 'button' }, 'Low')
    ),
    createElement('div', {},
      createElement('button', { id: 'okTask', type: 'button' }, 'ACEPTAR'),
      createElement('button', { id: 'cancelTask', type: 'button' }, 'CANCELAR')
    )
  );
}

const init = () => {
  const container = createElement('div', { class: ['container'] }, createNav(), createMainContent());
  document.body.appendChild(container);
  initializeToggle();
};

init();