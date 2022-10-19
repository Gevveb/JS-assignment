// const submitForm = (e) => {
//     e.preventDefault()
//     validate(e)
// }

// const validate = (e) => {
//     let target
    
//     switch(e.type) {
//         case "submit":
//             break

//         case "keyup":
//             target = e.target
//             break;
//     }
// }

// const checkLength = (element, errorMessage = "",minLength = 1) => {
//     if (errorMessage === "") {}
//          errorMessage = `Your ${element.target.id} must have at least ${minLength} long`

//     if (element.target.value.length < minLength) {
//         document.getElementById(element.target.id).classList.add('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
//     }else {
//         document.getElementById(element.target.id).classList.remove('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
//     }
// }

// const checkEmail = (element, errorMessage = "You must enter a valid email address") => {
//     if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
//         document.getElementById(element.target.id).classList.add('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = errorMessage
//     }else {
//         document.getElementById(element.target.id).classList.remove('error')
//         document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
//     }
// }

const checkLength = (element, minLength = 2) => {

    if (element.target.value.length < minLength) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerHTML = `Your ${element.target.id} must contain at least ${minLength} characters`
    }else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}



const checkEmail = (element, message) => {
    if (message === undefined)
    message = `Your ${element.target.id} must be a valid e-mail`
    if (!element.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        document.getElementById(element.target.id).classList.add('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = message
    }else {
        document.getElementById(element.target.id).classList.remove('error')
        document.getElementById(`${element.target.id}ErrorMessage`).innerText = ""
    }
}


const validate = (e) => {
    switch(e.target.type) {
        case "text":
            checkLength(e, 2)
            break;
        case "email":
            checkEmail(e)
            break;
        case "textarea":
            checkLength(e, 5)
            break;
        
    }
}