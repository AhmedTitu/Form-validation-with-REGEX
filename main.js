const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const password = document.querySelector('#password')
const cPassword = document.querySelector('#cPassword')

form.addEventListener('submit', (e) => {
    e.preventDefault(e)
    checkInputs()
})

const sendData = (successRate , count) => {
    if (successRate === count){
        // alert('Registration successful')
        swal("Congratulation! " + username.value.trim(), "Registration successful", "success");
    }
}

const successMsg = () => {
    let formControl = document.getElementsByClassName('form-control')
    let count = formControl.length - 1
    for(let i = 0; i < formControl.length ; i++){
        if(formControl[i].className === 'form-control success'){
            let successRate = 0 + i
            sendData(successRate , count)
        }else{
            return false
        }
    }
}


function checkInputs() {
    //get the value from the inputs
    const userNameValue = username.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()
    const passwordValue = password.value.trim()
    const cPasswordValue = cPassword.value.trim()



    //username check
    if (userNameValue === '') {
        //show error
        // add error class
        setErrorFor(username, 'Username cannot be blank')
    } else {
        // add success class
        setSuccessFor(username)
    }

    //email check
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!emailCheck(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    //phone check
    if (phoneValue === '') {
        setErrorFor(phone, 'Mobile Number cannot be blank')
    } else if (!phoneCheck(phoneValue)){
        setErrorFor(phone, 'Invalid Mobile Number')
    }else {
        setSuccessFor(phone)
    }

    //password check
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if (!passwordCheck(passwordValue)){
        setErrorFor(password, 'Invalid Password')
    }else {
        setSuccessFor(password)
    }

    //confirm password check
    if (cPasswordValue !== passwordValue || cPasswordValue === '') {
        setErrorFor(cPassword, 'Password must be same or cannot be blank.')
    } else {
        setSuccessFor(cPassword)
    }

    successMsg()
}

function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small')

    //add error message inside small
    small.innerText = message

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement // .form-control

    //add success class
    formControl.className = 'form-control success'
}

function emailCheck(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm.test(email)
}

function phoneCheck(phone) {
    return /^(?:\+88|01)?\d{11}\r?$/gm.test(phone)
}

function passwordCheck(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(password)
}