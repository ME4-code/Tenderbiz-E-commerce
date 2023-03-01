const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let message = []
    if (email.value === '' || email.value == null) {
        messages.push('Name is required')
    }

    if (messages.lenght > 0) {
        e.preventDefault()    
        errorElement.innerText = messages.join(', ')
    }
})