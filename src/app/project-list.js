import { ProjectItem as PrjItem } from "./project-item";
import * as DOMH from "../utility/dom-helper";

console.log('PROJECT LIST!');

export class ProjectList {
  constructor(type) {
    this.projects = [];
    this.type = type;
    const prjItems = document.querySelectorAll(`#${this.type}-projects li`);

    for (const prjItem of prjItems) {
      this.projects.push(new PrjItem(prjItem.id, this.switchProject.bind(this), this.type));
    }
    console.log(this.projects);
    this.connectDroppable();
  }

  connectDroppable() {
    console.log(globalThis);
    const list = document.querySelector(`#${this.type}-projects ul`);
    list.addEventListener("dragenter", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        list.parentElement.classList.add("droppable");
        event.preventDefault();
      }
    });
    list.addEventListener("dragover", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
      }
    });
    list.addEventListener("dragleave", (event) => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      const prjId = event.dataTransfer.getData("text/plain");
      if (this.projects.find((prjItem) => prjId === prjItem.id)) {
        return;
      }
      document.getElementById(prjId).querySelector("button:last-of-type").click();
      list.parentElement.classList.remove("droppable");
      event.preventDefault();
    });
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    // console.log(project)
    this.projects.push(project);
    DOMH.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId)
    // this.projects.splice(projectIndex,1)
    console.log(projectId);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}
