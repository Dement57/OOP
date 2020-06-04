class finishProject {

    // constructor () {
    //     this.finishProject();
    // }
    // printClickFinish(){
    //     const backgroundModal = document.createElement('div');
    //     backgroundModal.setAttribute('id','backdrop');
    //     document.body.append(backgroundModal);
    // }
    // toggleBackdrop() {
    //     BackDrop.classList.toggle("visible");
    //     console.log("clickback");
    // }
    cnsl () {
        console.log('click NO');
        console.log(this);
    }

    finishProject() {
        // const toggleBackdrop = function () {
        //     console.log("clickback");
        //     // backdrop.classList.toggle("visible");
        // }

        // consoleClick = this.consoleClick

        const backdrop = document.createElement('div');
        backdrop.setAttribute('id','backdrop');
        console.log('click')
        const modalFinish = document.createElement('div');
        modalFinish.setAttribute('class','modal'); 
        modalFinish.innerHTML = `
                <span class = "question-text">Are you really want to finish this cource?</span>
                <div class= "btn-finish">
                    <button id="no-finish"class="btn btn--passive">No</button>
                    <button id="yes-finish" class="btn btn--success">Yes</button>
                </div>
            `
        document.body.append(backdrop);
        backdrop.append(modalFinish);

        const backdropGray = document.getElementById('backdrop')
        const btnNoFinish = document.getElementById('no-finish');
        console.log(btnNoFinish)
        btnNoFinish.addEventListener('click',this.cnsl.bind(this))
        btnNoFinish.focus();
        // btnNoFinish.addEventListener('click',toggleBackdrop)
        // console.log(backdropGray, btnNoFinish)
    }
}
// const p = new finishProject();
// p.printClickFinish();


class ButtonsEvents extends finishProject {
    // 
    // constructor(){
    //     super();
    // }
    
    printClickMoreInfo(){
        console.log('clickMoreInfo');
    }
    printClickActivate(){
        console.log('clickActivate');
    }


    PageButtons(){
        const activeProjectsBtns = document.getElementsByTagName('button');
        const activeProjectsBtnsArr = Array.from(activeProjectsBtns);
        console.log(activeProjectsBtnsArr)
        activeProjectsBtnsArr.forEach((elem) => {
            if (elem.textContent === 'Finish'){
                elem.addEventListener('click',this.finishProject.bind(this))
                console.log(elem);
            }
            if (elem.textContent === 'More Info'){
                elem.addEventListener('click',this.printClickMoreInfo)
                console.log(elem);
            }
            if (elem.textContent === 'Activate'){
                elem.addEventListener('click',this.printClickActivate)
                console.log(elem);
            }
        })
    }
}

const project = new ButtonsEvents();
project.PageButtons()
console.log(project)


// const Fn = new finishProject()
// Fn.finishProject();
class FinishButtons {
    

    // interactBtn () {
    //     const finishBtn = document.getElementById('active-projects').getElementsByTagName('button')
    //     finishBtn..
    //     console.log(finisBtn)
    // }
}



