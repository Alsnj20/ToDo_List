class Task{
  constructor(title, description, isCompleted){
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.tag = '';
    this.priority = 'high';
  }
  markCompleted(){
    this.isCompleted = true;
  }
  markPending(){
    this.isCompleted = false;
  }
  putTag(tag){
    this.tag = tag;
  }
  getTag(){
    return this.tag;
  }
  changePriority(prior){
    this.priority = prior;
  }
}

const task1 = new Task('Learn React', 'Learn React by building a simple todo app', false);
console.log(task1);
task1.markCompleted();
task1.description = 'Learn React';
task1.putTag('react');
console.log(task1);

const priorityList = ['low', 'medium', 'high'];
