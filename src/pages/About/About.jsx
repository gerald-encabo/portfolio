import React, { useRef, useEffect } from 'react'
import './About.scss'
import { NavLink } from 'react-router-dom'
import { init } from 'ityped'
import Title from '../../components/Title'
import { GrFacebook } from 'react-icons/gr'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'

function About() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ['Web Developer', 'Web Designer']
        })
    }, [])

    return (
        <div className='about'>
            <div className='about-wrapper container'>
                <div className='about-container'>

                    <div className='about-section-one'>
                        <div className='about-section-one-left'>
                            <div className='logo'>
                                <img src={process.env.PUBLIC_URL + '/images/me.png'}  alt='Gerald Encabo'/>
                            </div>
                        </div>
                        <div className='about-section-one-right'>
                            <h4>Hi there, I'm</h4>
                            <h1>Gerald Encabo</h1>
                            <h3>Front-End <span ref={ textRef }></span></h3>
                            <p>Junior Web Developer with three years of experience building and maintaining responsive
                                websites in the education industry. Proficient in HTML, CSS, JavaScript; plus, modern libraries
                                and frameworks. Self-motivated toward learning new skills and adapting latest technologies. </p>
                            <NavLink to='/contact'>
                                <button className='about-btn'>Contact</button>
                            </NavLink>
                        </div>
                    </div>
                    
                    <div className="about-section-two">
                        <Title title={'Social Media'}/>
                        <div className="about-section-two-info">
                            <div className="about-section-two-container">
                                <a href="https://www.facebook.com/gerald.encabo.5/" title="Facebook" target="_blank" rel="noreferrer"><GrFacebook className="logo-size"/></a>
                            </div>
                            <div className="about-section-two-container">
                                <a href="https://www.instagram.com/gerald.encabo/" title="Instagram" target="_blank" rel="noreferrer"><SiInstagram className="logo-size"/></a>
                            </div>
                            <div className="about-section-two-container">
                                <a href="https://www.linkedin.com/in/gerald-f-encabo/" title="LinkedIn" target="_blank" rel="noreferrer"><SiLinkedin className="logo-size"/></a>
                            </div>
                            <div className="about-section-two-container">
                                <a href="https://github.com/geraldencabo" title="Github" target="_blank" rel="noreferrer"><FaGithub className="logo-size"/></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About