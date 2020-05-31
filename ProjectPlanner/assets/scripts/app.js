class finishProject {

    // constructor () {
    //     this.finishProject();
    // }
    printClickFinish(){
        const backgroundModal = document.createElement('div');
        backgroundModal.setAttribute('id','backdrop');
        document.body.append(backgroundModal);
    }

    finishProject() {
        const backgroundModal = document.createElement('div');
        backgroundModal.setAttribute('id','backdrop'); 
        console.log('click')
        backgroundModal.innerHTML = `
        <div class='modal'>
                <span class = "question-text">Are you really want to finish this cource?</span>
                <div class= "btn-finish">
                <button class="btn btn--passive">No</button>
                <button class="btn btn--success">Yes</button>
                </div>
        </div>
        `
        document.body.append(backgroundModal); 
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
                elem.addEventListener('click',this.finishProject)
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

class FinishButtons {
    

    // interactBtn () {
    //     const finishBtn = document.getElementById('active-projects').getElementsByTagName('button')
    //     finishBtn..
    //     console.log(finisBtn)
    // }
}



