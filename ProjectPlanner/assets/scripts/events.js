const buttons = document.querySelectorAll('button')

// button.addEventListener('click', ()=>{console.log('click')})
// button.addEventListener('dblclick', ()=>{console.log('double click')})

const buttonClickHandler = event =>{
    console.log('First button click handler!')
    // event.target.disabled = true;
    console.log(event)
}

const anotherButtonClickHandler = event => {
    console.log('Another button click handler!')
    console.log(event)
}



// buttons.forEach(btn =>{
//     btn.addEventListener('mouseenter', buttonClickHandler)
// })

// window.addEventListener('scroll', event => {
//     console.log(event);
// })

// setTimeout(()=>{
//     button.removeEventListener('click',buttonClickHandler)
// }, 4000)

const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event);
})

