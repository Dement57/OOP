import Cmp from "./component";
// const Component = new Component();

console.log("Tooltip Running!!");

export class Tooltip extends Cmp {
  constructor(closeNotifierFn, tooltipText, hostElementId) {
    super(hostElementId);
    this.tooltipText = tooltipText;
    this.closeNotifier = closeNotifierFn;
    this.closeTooltip = ()=> {
      this.detach();
      this.closeNotifier();
    };
    this.create();
  }


  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const tooltipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipElement.append(tooltipBody);
    tooltipElement.querySelector("p").textContent = this.tooltipText;

    const hostElPsLeft = this.hostElement.offsetLeft;
    const hostElPsTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parenElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPsLeft + 20;
    const y = hostElPsTop + hostElHeight - 10 - parenElementScrolling;

    tooltipElement.style.position = "absolute";
    tooltipElement.style.backgroundColor = "light_blue";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    console.log(this.hostElement.getBoundingClientRect());
    tooltipElement.addEventListener("click2", this.closeTooltip);
    this.element = tooltipElement;
  }
}
