class Task{
  constructor(title, description, isCompleted){
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
  }
  markCompleted(){
    this.isCompleted = true;
  }
  //Setters
  set title(t){
    this.title = t;
  }
  set description(d){
    this.description = d;
  }
  //Getters
  get title(){
    return this.title;
  }
  get description(){
    return this.description;
  }
}

const task1 = new Task('Learn React', 'Learn React by building a simple todo app', false);
console.log(task1);
task1.markCompleted();

function Task(title, description, isCompleted){
  this.title = title;
  this.description = description;
  this.isCompleted = isCompleted;
}

const task2 = Task('Learn React', 'Learn React by building a simple todo app', false);
console.log(task2);