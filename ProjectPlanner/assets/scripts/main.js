// globalThis.DEFAULT_VALUE = 'VOVA!!';
import { ProjectList } from './app/project-list.js';


class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
    finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
  }
  //   const timerId = setTimeout(()=>{this.startAnalitycs()}, 2000)
  //   document.getElementById("stop-analytics").addEventListener('click',()=>{
    //     clearTimeout(timerId);
    //   });
    // }
    
    static startAnalitycs() {
      const analyticScript = document.createElement('script');
      analyticScript.src = 'assets/scripts/utility/analytics.js';
      analyticScript.defer = true;
      document.head.append(analyticScript);
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
