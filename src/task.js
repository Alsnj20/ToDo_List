class Task{
  constructor(title, description, date, time, isCompleted = false){
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.date = date;
    this.time = time;
  }
  markCompleted(){
    this.isCompleted = true;
  }
  markPending(){
    this.isCompleted = false;
  }
  changePriority(prior){
    this.priority = prior;
  }
}
export default Task;
