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

    backdrop(){
        
    }
    toggleBackdrop() {
            console.log("clickback");
            this.finishProject.backdropGray.setAttribute('class','visible')
        }

    cnslNO () {
        console.log('click NO')
    }
    cnslYes () {
        console.log('click YES')
    }
    cnslBACK () {
        console.log('click BACKDROP')
    }

    finishProject() {
        const backdrop = document.createElement('div');
        backdrop.setAttribute('id','backdrop');
        console.log('click Finish')
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
        document.getElementById('backdrop').append(modalFinish);
        // backdrop.classList.toggle("visible");
        const backdropGray = document.getElementById('backdrop')
        const btnNoFinish = document.getElementById('no-finish');
        const btnYesFinish = document.getElementById('yes-finish');
        console.log(btnNoFinish)
        btnNoFinish.addEventListener('click',this.cnslNO.bind(this))
        btnYesFinish.addEventListener('click',this.cnslYes.bind(this))
        backdropGray.addEventListener('click',this.toggleBackdrop.bind(this))
        // btnNoFinish.focus()
        // btnNoFinish.addEventListener('click',toggleBackdrop)
        // console.log(backdropGray, btnNoFinish)
    }
}


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
                elem.addEventListener('click', this.finishProject.bind(this))
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