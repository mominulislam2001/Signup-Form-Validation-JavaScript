const form = document.querySelector('.form')
const name1 = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
//preventing reloding on submition
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

//to get the element(id) parent element,
//target its error class, give it a message, and
// error class and remove th success class

const setError = (element, message) => {
    const input = element.parentElement;
    const error = input.querySelector('.error');
    error.textContent = message;
    input.classList.add('error');
    input.classList.remove('success');
}
/* */
const setSuccess = element => {
    const input = element.parentElement;
    const error = input.querySelector('.error');
    error.textContent = '';
    input.classList.add('success');
    input.classList.remove('error');

}
//checking if the input is an email
const validEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}
//trimming any white-space in input
const validateInputs = () => {
    const nameValue = name1.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();




    /* Giving messages for the username */
    if (nameValue === '') {
        setError(name1, 'Name is required')
    }
    else {
        setSuccess(name1)
    }

    if(emailValue === ''){
        setError(email, 'Email is required')
    }else if(!validEmail(emailValue)){
        setError(email, 'This is not a correct email')
    }
    else{
            setSuccess(email)
    }
    if(passwordValue === ''){
        setError(password, 'Password is required')
    }else if(passwordValue.length < 8){
        setError(password, 'Password is too short')
    }
    else{
        setSuccess(password)
    }

}

