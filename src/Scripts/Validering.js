export const submitData = async (url, method, data, contentType = 'application/json') => {



    const res = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': contentType
        },
        body: data
    })

    if (res.status === 200) {
        return true
    } 

    return false

}



export const validate = (e, form = null) => {
    if (e.type === 'submit') {
        const errors = {}
        errors.name = validate_name(form.name)
        errors.email = validate_email(form.email)
        errors.comments = validate_comments(form.comments)
        return errors

    }else{
        const {id, value} = e.target
        switch(id){
            case 'name': 
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
        }
    }
}

const validate_name = (value) => {
    if(!value)
        return 'You must enter a name'
    else if (value.length < 2)
        return 'Your name must be longer than two characters'
    else
        return null
}
const validate_email= (value) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!value)
        return 'You must enter an email address'
    else if (!regex_email.test(value))
        return 'You must enter a valid email address (eg. name@domain.com)'
    else
        return null
}
const validate_comments = (value) => {
    if(!value)
        return 'You must enter a comment'
    else if (value.length < 5)
        return 'Your comment must be longer than five characters'
    else
        return null
}