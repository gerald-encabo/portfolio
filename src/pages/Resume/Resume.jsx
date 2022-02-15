import React from 'react'
import './Resume.scss'
import Title from '../../components/Title'
import Header from '../../components/Header'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3, IoLogoApple } from 'react-icons/io'
import { BiNotepad } from 'react-icons/bi'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { DiDotnet, DiCodeBadge } from 'react-icons/di'
import { FaLinux, FaChrome, FaFirefox, FaInternetExplorer, FaDatabase, FaNodeJs, FaLaravel} from 'react-icons/fa'
import { SiJson, SiJava, SiPython, SiPhp, SiMysql, SiBootstrap, SiReact, SiSass, SiJquery, 
         SiJavascript, SiWindows, SiVisualstudio, SiAtom, SiSublimetext, SiMongodb, SiMicrosoftsqlserver } from 'react-icons/si'

function Resume() {
    return (
        <div className='resume'>
            <div className='resume-wrapper container'>
                <Header title={'Resume'} desc={'4+ years of Experience'} />
                <div className='resume-container'>
                    <div className='resume-section-one'>
                        <div className='resume-section-one-left'>
                            <Title title={'Education'}/>
                            <div className='education-info-layer-one'>
                                <div className='education-info-layer-two'>
                                    <div className='education-info-layer-three'>
                                        <p className='college'><span>2016 - 2020</span> Seneca College</p>
                                        <h4 className='program'>Honours Bachelor of Technology - Software Development</h4>
                                        <p className='desc'>
                                            <ul>
                                                <li>Learn basic knowledge of web development such as HTML, CSS, and JavaScript</li>
                                                <li>Design and structure standard database using SQL through MySQL and SQL Server system</li>
                                                <li>Build a mobile app on the Android platform, and connect to a database using Firebase</li>
                                                <li>Understand basic business principles and project management from a global perspective</li>
                                                <li>Identify the customer needs and wants through evaluation of marketing process using case study model approach.</li>
                                            </ul>
                                        </p>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='resume-section-one-right'>
                            <Title title={'Experience'}/>
                            <div className='education-info-layer-one'>
                                <div className='education-info-layer-two'>
                                    <div className='education-info-layer-three'>
                                        <p className='college'><span>2020 - Present</span> Seneca College</p>
                                        <h4 className='program'>Front-End Developer (contract)</h4>
                                        <p className='desc'>
                                            <ul>
                                                <li>Create and update web space and landing page (home page) using build-in widgets in Intranet software Axero Solutions</li>
                                                <li>Collaborate with clients about the structure of web space and page content for specific departments and faculties</li>
                                                <li>Provide direct assistance and tutorial with the page administrator on developing and updating web space and landing page</li>
                                                <li>Maintain and update existing webspace and content including images, videos, links, and file attachment</li>
                                                <li>Track web performance and workflow using build-in Analytics data feature in Axero Solutions Technology</li>
                                                <li>Use of Front-End languages and framework such as HTML, CSS and Bootstrap for webpage design, and layout</li> 
                                                <li>Architected website structure templates using GlooMaps, and presented a UX design for the home page using Figma</li>                                                          
                                            </ul>
                                        </p>
                                    </div>
                                    <div className='education-info-layer-three'>
                                        <p className='work'><span>2018 - 2020</span> Seneca College</p>
                                        <h4 className='position'>Front-End Developer (co-op)</h4>
                                        <p className='desc'>
                                            <ul>
                                                <li> Front-End experience in building, designing, and maintaining responsive web applications using CMS and DAM platform Adobe Experience Manager</li>
                                                <li> Work with Front-End technologies and framework including HTML, CSS (Sass), JavaScript (React), Bootstrap, jQuery, and JSON</li>
                                                <li> Web Content Accessibility Guideline (WCAG) and Accessibility for Ontarians with Disabilities Act (AODA) is used as a standard guideline when creating and developing web pages</li>
                                                <li> Perform quality assurance and accessibility check using SiteImprove technology for fixing issues like bugs, broken links, typographical errors, and missing alt text for image</li>
                                                <li> Adobe Photoshop was used for cropping and compressing the size of the image to improve web page performance specifically for mobile and tablet devices</li>
                                                <li> Used Google technologies including Analytics for tracking website traffic, Maps API for displaying Seneca Campuses map, and Font API for importing new fonts style</li>
                                                <li> Collaborate in Agile development team using Scrum methodologies when performing task assignment</li>
                                                <li> Maintain and update existing codes, and web content such as banner images, links, files, and videos</li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='resume-section-two'>

                        <div className='resume-section-two-left'>
                            <Title title={'Programming/Languages'}/>
                            <div className="skills-container">
                                <div class="skills-icon"><p><ImHtmlFive className="logo-size"/><br/>HTML</p></div>
                                <div class="skills-icon"><p><IoLogoCss3 className="logo-size"/><br/>CSS</p></div>
                                <div class="skills-icon"><p><SiSass className="logo-size"/><br/>Sass</p></div>
                                <div class="skills-icon"><p><SiJavascript className="logo-size"/><br/>JavaScript</p></div>
                                <div class="skills-icon"><p><SiJson className="logo-size"/><br/>Json</p></div>
                                <div class="skills-icon"><p><DiCodeBadge className="logo-size"/><br/>XML</p></div>
                                <div class="skills-icon"><p><SiPython className="logo-size"/><br/>Python</p></div>
                                <div class="skills-icon"><p><SiJava className="logo-size"/><br/>Java</p></div>
                            </div>            
                        </div>

                        <div className='resume-section-two-right'>
                            <Title title={'Framework/Libraries'}/>
                            <div className="skills-container">
                                <div class="skills-icon"><p><SiBootstrap className="logo-size"/><br/>Bootstrap</p></div>
                                <div class="skills-icon"><p><SiJquery className="logo-size"/><br/>Jquery</p></div>
                                <div class="skills-icon"><p><SiReact className="logo-size"/><br/>React</p></div>
                                <div class="skills-icon"><p><FaLaravel className="logo-size"/><br/>Laravel</p></div>
                                <div class="skills-icon"><p><DiDotnet className="logo-size"/><br/>ASP.Net</p></div>
                           </div> 
                        </div>

                    </div>
                    <div className='resume-section-two'>
                        <div className='resume-section-two-left'>
                            <Title title={'Server Sides'}/>
                            <div className="skills-container">
                                <div class="skills-icon"><p><AiOutlineConsoleSql className="logo-size"/><br/>SQL</p></div>
                                <div class="skills-icon"><p><SiMysql className="logo-size"/><br/>MySQL</p></div>
                                <div class="skills-icon"><p><SiMicrosoftsqlserver className="logo-size"/><br/>SQL Server</p></div>
                                <div class="skills-icon"><p><FaDatabase className="logo-size"/><br/>NoSQL</p></div>
                                <div class="skills-icon"><p><SiPhp className="logo-size"/><br/>PHP</p></div>
                                <div class="skills-icon"><p><FaNodeJs className="logo-size"/><br/>NodeJS</p></div>
                                <div class="skills-icon"><p><SiMongodb className="logo-size"/><br/>MongoDB</p></div>
                            </div>            
                        </div>
                        <div className='resume-section-two-right'>
                            <Title title={'Tools'}/>
                            <div className="skills-container">
                                <div class="skills-icon"><p><SiVisualstudio className="logo-size"/><br/>Visual Studio</p></div>
                                <div class="skills-icon"><p><BiNotepad className="logo-size"/><br/>Notepad++</p></div>
                                <div class="skills-icon"><p><SiAtom className="logo-size"/><br/>Atom</p></div>
                                <div class="skills-icon"><p><SiSublimetext className="logo-size"/><br/>Sublime Text</p></div>
                           </div> 
                        </div>
                    </div>
                    <div className='resume-section-two'>
                        <div className='resume-section-two-left'>
                            <Title title={'Operating Systems'}/>
                            <div className="skills-container">
                                <div class="skills-icon"><p><SiWindows className="logo-size"/><br/>Windows</p></div>
                                <div class="skills-icon"><p><IoLogoApple className="logo-size"/><br/>Apple</p></div>
                                <div class="skills-icon"><p><FaLinux className="logo-size"/><br/>Linux</p></div>
                            </div>            
                        </div>
                        <div className='resume-section-two-right'>
                            <Title title={'Web Browsers'}/>
                            <div className="skills-container">
                                <div class="skills-icon"><p><FaChrome className="logo-size"/><br/>Chrome</p></div>
                                <div class="skills-icon"><p><FaFirefox className="logo-size"/><br/>Firefox</p></div>
                                <div class="skills-icon"><p><FaInternetExplorer  className="logo-size"/><br/>Internet Explorer</p></div>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
