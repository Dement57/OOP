// import { Tooltip } from './tooltip.js';
import { DOMHelper } from "../utility/dom-helper.js";

console.log("Project Item created!!!");

export class ProjectItem {
  constructor(id, updateProjectListFunction, type) {
    this.hasActiveTooltip = false;
    this.id = id;
    // this.type = type;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }
  setTooltipFalse() {
    this.hasActiveTooltip = false;
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    console.log(tooltipText);
    import("./tooltip.js").then((module) => {
      const tooltip = new module.Tooltip(
        () => {
          this.hasActiveTooltip = false;
        },
        tooltipText,
        this.id
      );
      tooltip.attach();
      this.hasActiveTooltip = true;
    });
  }

  connectDrag() {
    const item = document.getElementById(this.id);
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id); //define type of data and send id of element
      event.dataTransfer.effectAllowed = "move"; //define what kind of operation can be used. Here we can move our data
    });
    item.addEventListener("dragend", (event) => {
      console.log("THE END OF DRAG>>>");
      console.log(event);
      if (event.dataTransfer.dropEffect === "none") {
        alert("Project have not moved, try one more time!");
      }
    });
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    let moreInfoBtn = projectItemElement.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListener(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener("click", this.updateProjectListHandler.bind(null, this.id));
    // console.log(switchBtn);
    // return switchBtn;
  }

  update(updateProjectListFn, type) {
    this.updateProjectListHandler = updateProjectListFn;
    this.connectSwitchButton(type);
  }
}
