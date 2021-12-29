import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-container container'>
                    <div className='footer-item-left'>
                        <ul>
                            <li className='footer-item-list'><a className='footer-social-media' href='http://facebook.com/' target='_blank' rel='noreferrer'>Facebook</a></li>
                            <li className='footer-item-list'><a className='footer-social-media' href='https://www.instagram.com/' target='_blank' rel='noreferrer'>Instagram</a></li>
                            <li className='footer-item-list'><a className='footer-social-media' href='https://www.linkedin.com/in/gerald-encabo-893a741a7/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                            <li className='footer-item-list'><a className='footer-social-media' href='https://github.com/geraldencabo' target='_blank' rel='noreferrer'>Github</a></li>
                        </ul>
                    </div>
                    <div className='footer-item-right'>
                            <p>&#169; 2021 All Rights Reserved. Gerald Encabo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
