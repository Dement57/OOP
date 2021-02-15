const button = document.querySelector('button')

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

const div = document.querySelector('div');
div.addEventListener('mouseenter', event => {
    console.log('DIV EVENT >>>' + event)
})

button.addEventListener('mouseenter', event => {
    event.stopPropagation()
    // event.stopImmediatePropagation()
    console.log('BUTTON EVENT >>>>'+ event);
})

// button.addEventListener('click', event => {
//     // event.stopPropagation()
//     // event.stopImmediatePropagation()
//     console.log('BUTTON EVENT 2 >>>>'+ event);
// })

const liItems = document.querySelectorAll('li')
const list = document.querySelector('ul')

// liItems.forEach(li =>{
//     li.addEventListener('click', event=>{
//         event.target.classList.toggle('highlight');
//     })
// })

list.addEventListener('click', event => {
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
})