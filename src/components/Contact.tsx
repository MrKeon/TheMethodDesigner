import './Contact.css';
import emailjs from 'emailjs-com';
import * as EmailValidator from 'email-validator';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function Contact() {
    const SERVICE_ID = 'ContactForm';
    const TEMPLATE_ID = 'template_07im97l';
    const USER_ID = 'keon.sadatian@gmail.com';
    const { register, errors, handleSubmit } = useForm();

    function sendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, e.target, `${USER_ID}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.error(error.text);
        })
    }

    function validateEmail(input: string) {
        return EmailValidator.validate(input);
    }

    console.log(errors);
    
    return(
    <div className="Contact">
        <div className="flower-container">
            <div className="contactImage"/>
            <div className="contact-form">
                <h2>Contact me</h2>
                <p>If you have any questions or work inquiries please fill out the form below.</p>
                <form onSubmit={handleSubmit(sendEmail)}>
                    <label>
                        First name *
                        <input type="text" {...register("First name", { required: true, maxLength: 80 })}/>
                    </label>
                    <label>
                        Last name
                        <input type="text" {...register("Last name", { maxLength: 80})} />
                    </label>
                    <label>
                        Your email *
                        <input type="text" {...register("Email", { required: true, maxLength: 80, pattern: EMAIL_REGEX_PATTERN })} />
                    </label>
                    <label>
                        Email Subject *
                        <input type="text" name="subject" onChange={(e) => validateEmail(e.target.value)} />
                    </label>
                    <label>
                        Your message *
                        <input type="text" name="message" />
                    </label>
                    <label>
                        <input type="checkbox" {...register("Consent", { required: true })} />
                          By clicking this box and submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
                    </label>
                    <input type="submit" value="Send message" />
                </form>
                <p>* - Required Field</p>
            </div>
        </div>
    </div>      
    );
  }
