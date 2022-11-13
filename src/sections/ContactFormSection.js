import React, { useState } from 'react'
import { submitData, validate } from '../Scripts/Validering'


const ContactFormSection = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const handleChange = (e) => {
        const { id, value } = e.target

        switch (id) {
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

        setErrors({ ...errors, [id]: validate(e) })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(validate(e, { name, email, comments }))

        if (errors.name === null && errors.email === null && errors.comments === null) {

            let json = JSON.stringify({ name, email, comments })

            setName('')
            setEmail('')
            setComments('')
            setErrors({})


            if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json)) {
                setSubmitted(true)
                setFailedSubmit(false)
            }else{
                setSubmitted(false)
                setFailedSubmit(true)
            }


        } else {
             setSubmitted(false)
        }
    }

    return (
        <section className="contact">
            <div className="container">

                {
                    submitted ? (
                        <div className="alert alert-success text-center mb-5" role="alert">
                            <h3>Thank you for your comments</h3>
                            <p>We will contact you as soon as possible.</p>
                        </div>) : (<></>)
                }
                {
                    failedSubmit ? (
                        <div className="alert alert-danger text-center mb-5" role="alert">
                            <h3>Something went wrong!</h3>
                            <p>We couldn't submit your comments right now.</p>
                        </div>) : (<></>)
                }

                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    <div>
                        <input id="name" className={(errors.name ? 'error' : '')} type="text" placeholder="Your Name" value={name} onChange={handleChange} />
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