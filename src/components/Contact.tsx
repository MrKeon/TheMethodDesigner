import './Contact.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function Contact() {
    const SERVICE_ID = 'ContactForm';
    const TEMPLATE_ID = 'template_07im97l';
    const USER_ID = 'user_rUo8Lf3pVmiapVcOvacIk';
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    function sendEmail(data: any) {
        const templateParams = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            subject: data.subject,
            message: data.message,
            consent: data.consent
        }

        emailjs.send(`${SERVICE_ID}`, `${TEMPLATE_ID}`, templateParams, `${USER_ID}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.error(error.text);
        })
    }
    
    return(
    <div className="Contact">
        <div className="flower-container">
            <div className="contactImage"/>
            <div className="contact-form">
                <h2>Contact me</h2>
                <p>If you have any questions or work inquiries please fill out the form below.</p>
                <form onSubmit={handleSubmit(sendEmail)}>
                    <label>
                        First name <span>*</span></label>
                        <input type="text" {...register("firstName", { required: true, maxLength: 80 })}/>
                        {errors.firstName && <p className="error">First name is required.</p>}
                    
                    <label>
                        Last name
                        <input type="text" {...register("lastName", { maxLength: 80})} />
                    </label>
                    <label>
                        Your email <span>*</span>
                        <input type="text" {...register("email", { required: true, maxLength: 80, pattern: EMAIL_REGEX_PATTERN })} />
                        {errors.email && <p className="error">Email is invalid.</p>}
                    </label>
                    <label>
                        Email Subject <span>*</span>
                        <input type="text" {...register('subject', { required: true, maxLength: 80 })} />
                        {errors.subject && <p className="error">Email Subject is required.</p>}
                    </label>
                    <label>
                        Your message <span>*</span>
                        <input type="text" {...register('message', { required: true, maxLength: 500 })} />
                        {errors.message && <p className="error">Your message is required.</p>}
                    </label>
                    <label>
                        <input type="checkbox" {...register("consent", { required: true })} />
                          By clicking this box and submitting your information, you are granting us permission to email you. You may unsubscribe at any time.
                    </label>
                    {errors.consent && <p className="error">Please confirm you are granting us permission to email you by clicking the checkbox.</p>}
                    <input type="submit" value="Send message" />
                </form>
                <p>* - Required Field</p>
            </div>
        </div>
    </div>      
    );
  }
