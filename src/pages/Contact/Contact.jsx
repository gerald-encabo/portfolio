import React from 'react'
import './Contact.scss'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import Title from '../../components/Title'
import Header from '../../components/Header'

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-wrapper container'>
                <Header title={'Contact'} desc={'Get in Touch'} />
                <div className='contact-container'>
                    <div className='contact-section-left'>
                        <div className='contact-info-one'> 
                            <FaMapMarkerAlt className='contact-logo'/><p>Vaughan, Ontario</p>
                        </div>
                        <div className='contact-info-two'> 
                            <FaPhoneAlt className='contact-logo'/><p>647-803-3979</p>
                        </div>
                        <div className='contact-info-three'> 
                            <GrMail className='contact-logo'/><p>geraldencabo@gmail.com<br/>
                            <span>Please leave a message or contact me for further info.</span></p>
                        </div>
                    </div>
                    <div className='contact-section-right'>
                        <Title title={'How Can I Help You?'}/>
                        <form action="https://formsubmit.co/geraldencabo@gmail.com" method="POST">
                            <div className='contact-input'>
                                <div className='contact-input-left'>
                                        <input type="hidden" name="_autoresponse" value="Auto-Response Email: Thanks for the message. I'll respond to your email as soon as I can. - Gerald"/>
                                        <input className='contact-txt' name='full name' type="text" placeholder='Full name' required />
                                        <input className='contact-txt' name='email' type="email" placeholder='Email' required />
                                        <input className='contact-txt' name='subject' type="text" placeholder='Subject' />
                                </div>
                                <div className='contact-input-right'>
                                        <textarea className='contact-txt-area' rows='6' name='message' placeholder='Message' ></textarea>
                                </div>
                            </div>
                            <button className='contact-btn' name='submit' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
