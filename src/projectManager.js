class ProjectManager{
  constructor(){
    this.projects = [];
  }
  addProject(project){
    this.projects.push(project);
  }
  removeProject(project){
    this.projects = this.projects.filter((p) => p !== project);
  }
  getProjectName(name){
    return this.projects.find((p) => p.name === name);
  }
  getProject(){
    return this.projects;
  }
}
export default ProjectManager;