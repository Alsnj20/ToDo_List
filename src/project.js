class Project{
  constructor(name){
    this.name = name;
    this.tasks = [];
  }
  addTask(task){
    this.tasks.push(task);
  }
  removeTask(task){
    return this.tasks.filter((t) => t !== task);
  }
  getTasks(){
    return this.tasks;
  }
}
export default Project;