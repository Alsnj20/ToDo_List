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
export default Task;
