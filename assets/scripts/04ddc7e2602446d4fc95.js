(self.webpackChunkproject_planner=self.webpackChunkproject_planner||[]).push([[683],{683:(t,e,o)=>{"use strict";o.r(e),o.d(e,{Tooltip:()=>s}),console.log("Tooltip Running!!");class s extends class{constructor(t,e=!1){t?this.hostElement=document.getElementById(t):(this.hostElement=document.body,this.insertBefore=e)}detach(){this.element&&this.element.remove()}attach(){this.hostElement.insertAdjacentElement(this.insertBefore?"afterbegin":"beforeend",this.element)}}{constructor(t,e,o){super(o),this.tooltipText=e,this.closeNotifier=t,this.closeTooltip=()=>{this.detach(),this.closeNotifier()},this.create()}create(){const t=document.createElement("div");t.className="card";const e=document.getElementById("tooltip"),o=document.importNode(e.content,!0);t.append(o),t.querySelector("p").textContent=this.tooltipText;const s=this.hostElement.offsetLeft+20,n=this.hostElement.offsetTop+this.hostElement.clientHeight-10-this.hostElement.parentElement.scrollTop;t.style.position="absolute",t.style.backgroundColor="light_blue",t.style.left=s+"px",t.style.top=n+"px",console.log(this.hostElement.getBoundingClientRect()),t.addEventListener("click2",this.closeTooltip),this.element=t}}}}]);
//# sourceMappingURL=04ddc7e2602446d4fc95.js.map