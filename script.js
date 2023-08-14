console.log('Hello World')

let signInBtn = document.getElementById("sign-in-btn")
let modal = document.querySelector('.modal')
signInBtn.onclick = function (event) {
    event.preventDefault()
    modal.classList.add('show')
    
}

modal.onclick = function (event) {
    console.log(event.target)
    if (event.target.classList.contains('modal')) {
        modal.classList.remove('show')
    }
}

let closeModalBtn = document.querySelector('.close-modal-btn')
closeModalBtn.onclick = function(event) {
    modal.classList.remove('show')
}

let toogleThemeBtn = document.getElementById('toggle-theme')
toogleThemeBtn.onclick = function() {
    document.body.classList.toggle('dark')
}