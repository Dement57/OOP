
class DOMHelper {
  static clearEventListener(element){
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElment = document.querySelector(newDestinationSelector);
    destinationElment.append(element);
  }
}

class Component {
  constructor(hostElementId, insertBefore = false){
    if (hostElementId){
      this.hostElement  = document.getElementById(hostElementId)
    } else {
      this.hostElement = document.body;
      this.insertBefore = insertBefore;
    }
  }
  detach(){
    if(this.element){
      this.element.remove();
    } 
  }
  
  attach() {
    this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin':'beforeend', this.element)
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFn, tooltipText){
    super();
    this.tooltipText = tooltipText;
    this.closeNotifier = closeNotifierFn;
    this.create();

  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  }

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = this.tooltipText;
    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListFunction, type) {
    this.id = id;
    // this.type = type;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }
  setTooltipFalse() {
    this.hasActiveTooltip = false;
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip){
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    console.log(tooltipText)
    const tooltip = new Tooltip(() =>{
      this.hasActiveTooltip = false;
    }, tooltipText);
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    let moreInfoBtn = projectItemElement.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListener(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Active";
    switchBtn.addEventListener("click", this.updateProjectListHandler.bind(null, this.id));
    // console.log(switchBtn);
    // return switchBtn;
  }

  update(updateProjectListFn, type) {
    this.updateProjectListHandler = updateProjectListFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    // console.log(project)
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
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

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
    finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
  }
}

App.init();

// function logPerson(){
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// };

// const person1 = {name:'Макс', age:12,job:'Problem creator'}
// const person2 = {name:'Александр', age:33,job:'Problem solver'}

// const firstPair = {firstNumb:2, secondNumb:33}
// const secPair = {firstNumb:6, secondNumb:44}
// const thirdPair = {firstNumb:12326, secondNumb:4}

// function multpler(){
//   console.log(this.firstNumb * this.secondNumb);
// }

// function adder(){
//   console.log(this.firstNumb + this.secondNumb);
// }

// function substricter(){
//   console.log(this.firstNumb - this.secondNumb);
// }

// function divider(){
//   console.log(this.firstNumb / this.secondNumb);
// }

// function binder(context, fn){
//   context.fn = fn;
//   return context.fn();
// }

// binder(person1,logPerson)
// binder(person2,logPerson)

// binder(firstPair, adder)
// binder(secPair, multpler)
// binder(firstPair, substricter)
// binder(thirdPair, divider)
