class ProjectManager{
  constructor(project){
    this.projects = [project];
  }
  addProject(project){
    this.projects.push(project);
  }
  removeProject(project){
    return this.projects.filter((p) => p !== project);
  }
  getProject(name){
    return this.projects.some((p) => p.name === name);
  }
  getProject(){
    return this.projects;
  }
}