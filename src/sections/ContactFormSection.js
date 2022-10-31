import React, { useState } from 'react'
import { validate } from '../Scripts/Validering'




const ContactFormSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState ({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {id, value} = e.target

        switch(id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
                break
        }

        setErrors({...errors, [id]: validate(e)})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(e, {name, email, comments}))

        if(errors.name === null && errors.email === null && errors.comments === null) {
            setSubmitted(true)
            setName('')
            setEmail('')
            setComments('')
            setErrors({})
        }else {
            setSubmitted(false)
        }
    }









    // const [contactForm, setContactForm] = useState({ name: '', email: '', comment: '' })

    // const [formErrors, setFormErrors] = useState({})
    // const [canSubmit, setCanSubmit] = useState(false)
    // const [isError, setIsError] = useState(false)



    // const validate = (values) => {
    //     const errors = {}
    //     const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    //     if (!values.name)
    //         errors.name = "You must enter a name"
    //     else if (values.name.length < 2)
    //         errors.name = "Your name must be longer than two characters"

    //     if (!values.email)
    //         errors.email = "You must enter an email address"
    //     else if (!regex_email.test(values.email))
    //         errors.email = "You must enter a valid email address (eg. name@domain.com)"
            
    //     if (!values.comment)
    //         errors.comment = "You must enter a comment"
    //     else if (values.comment.length < 5)
    //         errors.comment = "Your comment must be longer than five characters"            

    //     if (Object.keys(errors).length === 0)
    //         setCanSubmit(true)
            
    //     else
    //         setCanSubmit(false)

    //     if (Object.keys(errors).length === 0)
    //         setIsError(false)
            
    //     else
    //         setIsError(true)

    //     return errors;
    // }
    // const handleChange = (e) => {
    //     const { id, value } = e.target
    //     setContactForm({ ...contactForm, [id]: value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setFormErrors(validate(contactForm))
    // }
    // const handleOnKeyUp = (e) => {
    //     e.preventDefault()
    //     setFormErrors(validate(contactForm))
    // }



    return (
        <section className="contact">
            <div className="container">
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    <div>
                        <input id="name" className= {(errors.name ? 'error' : '')} type="text"  placeholder="Your Name" value={name} onChange={handleChange} />
                        <div id="nameErrorMessage" className="errorMessage">{errors.name} </div>
                    </div>
                    <div>
                        <input id="email" className={(errors.email ? 'error' : '')} type="email" placeholder="Your Mail" value={email} onChange={handleChange} />
                        <div id="emailErrorMessage" className="errorMessage">{errors.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" className={(errors.comments ? 'error' : '')} placeholder="Comments" value={comments} onChange={handleChange} ></textarea>
                        <div id="commentErrorMessage" className="errorMessage">{errors.comments}</div>
                    </div>
                    <button type="submit">Post Comments</button>
                </form>
            </div>

        </section>
    )
}

export default ContactFormSection



// return (
//     <section className="contact">
//         <div className="container">
//             <h2>Come in Contact with Us</h2>
//             <form onSubmit={handleSubmit} className="contact-form" noValidate>
//                 <div>
//                     <input id="name" className= { isError ? "error" : " "} type="text" onKeyUp={handleOnKeyUp} placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
//                     <div id="nameErrorMessage" className="errorMessage">{formErrors.name} </div>
//                 </div>
//                 <div>
//                     <input id="email" className={ isError ? "error" : " "} type="email" onKeyUp={handleOnKeyUp} placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
//                     <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
//                 </div>
//                 <div className="textarea">
//                     <textarea id="comment" className={ isError ? "error" : " "} onKeyUp={handleOnKeyUp} placeholder="Comments" value={contactForm.comment} onChange={handleChange} ></textarea>
//                     <div id="commentErrorMessage" className="errorMessage">{formErrors.comment}</div>
//                 </div>
//                 <button type="submit">Post Comments</button>
//             </form>
//         </div>

//     </section>
// )