import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import Navbar from '../../components/Navbar'
import './home.css'
import Design from '../../components/Design'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Preloader from '../../components/Preloader';
import { Contactform } from '../../components/Contactform';

gsap.registerPlugin(ScrollTrigger);


function home() {
  const splitTypesRef = useRef([]);

  useEffect(() => {
    splitTypesRef.current.forEach((word) => {
       const text = new SplitType(word, { types: 'words' });
   
       gsap.fromTo(text.words, {
         opacity: 0.3, 
       }, {
         opacity: 1, 
         scrollTrigger: {
           trigger: word,
           start: 'top 90%', 
           end: 'bottom 50%', 
           scrub: true,
           markers: false,
           immediateRender: false
         },
         stagger: 0.1
       });
    });
   }, []);
   
   
   


 const projectRef = useRef(null);

 useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.project',
        scrub: true
      }
    })
    .to('.project', {
      stagger: 0.2,
      y: -200,
      scrub: true
    });

    return () => tl.kill(); // Cleanup function to kill the timeline
 }, []);

  return (
    <div className='overflow-x-hidden'>
        <div className="cover bg-black position-relative">  
            <div className="navcover">
                <Navbar/>

                <hr style={{opacity: 0.4, color: '#fff'}} className='m-0 p-0' />
                
            </div>
            
            <Preloader/>


                <section id='hero'>
                    <div className="container pt-5 pt-md-0">
                        <h2 className="text-uppercase"> <span className="position-relative z-2">Liasu <br/> <span>Teslim</span></span></h2>
                        <p className="text-uppercase"><span className="position-relative z-2">Web developer</span></p>
            
                        <div className="d-flex gap-3 mt-5">
                          <a href="#contact">
                            <button className="btn btn-light rounded-3 hrbtn position-relative z-2">Hire Me</button>
                          </a>
                            <a href="#portfolio">
                                <button className="btn btn-outline-light rounded-3 hrbtn border border-3 position-relative z-2">Portfolio</button>
                            </a>
                        </div>
            
                        <div className="d-flex gap-3 my-5 position-relative z-2">
                            <i className="bi bi-linkedin fs-3 text-white social"></i>
                            <i className="bi bi-instagram fs-3 text-white social"></i>
                            <i className="bi bi-twitter-x fs-3 text-white social"></i>
                            <i className="bi bi-github fs-3 text-white social"></i>
                        </div>
                        <div className="lay rounded-3 p-4 position-relative z-3">
                            <div className="row text-center">
                                <div className="col-lg-3 col-6">
                                    <h4>2+</h4>
                                    <p>Years of Experience</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <h4>20+</h4>
                                    <p>Projects</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                  <h4>8+</h4>
                                  <p>Collaborative Projects</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                  <h4>100%</h4>
                                  <p>Task Completion Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='particles'><Design/></div>
                </section>
            

        </div>
                <section id="about" className="overflow-x-hidden position-relative z-3">
      <div className="container">
          <h3 className="text-center py-4 py-lg-0"><span className="title">Who am i?</span></h3>
          <div className="d-flex flex-column flex-lg-row gap-4">
            <div className="col-lg-6 my-auto pb-md-4 pb-0">
                <h4 className="pb-3">I'm dilligent and creative</h4>
              <div className="reveal-type" ref={(el) => (splitTypesRef.current[0] = el)}>
                <p>I am a dedicated web developer with over two years of hands-on experience, having honed my skills and gained valuable insights during my employment at Sunmence solutions. In this professional journey, I actively contributed to real-world projects, collaborating with talented teams to deliver cutting-edge solutions. My role included translating design concepts into efficient, responsive, and user-friendly websites. I thrive on problem-solving and enjoy the challenge of creating robust and scalable code.</p>
              </div>
  
              <div className="d-flex gap-3">
                <a href="./Liasu-Teslim-Omobobola-Resume.pdf" download=""><button className="btn btn-light rounded-3 hrbtn">Download Resume</button></a>
                <a href="#portfolio">
                  <button className="btn btn-outline-light rounded-3 hrbtn border border-3">Portfolio</button>
                </a>
              </div>
            </div>
            <div className="col-lg-7" data-aos="fade-left"  data-aos-duration="3000">
              <img src="tessy.png" alt="" className="w-100"/>
            </div>
          </div>
      </div>
                </section>



<section id="skills" className="overflow-x-hidden">
    <div className="container overflow-x-hidden">
      <div className="text-end mb-5"><h3><span className="title">MY SKILLS</span></h3></div>
      <div className="wrapper">
        <div className="d-flex skparent">
          <div className="carol" style={{ "--position": 1 }}>
            <div className="skillcon w-100 border border-3 border-white rounded-3 p-5 anime">
              <div className="text-center position-relative z-2">
                <i className="fa-brands fa-html5 fs-1"></i>
                <p className="fs-3 mt-3">HTML5</p>
    
              </div>
            </div>
          </div>
          <div className="carol" style={{ "--position": 2 }}>
            <div className="skillcon w-100 border border-3 border-white rounded-3 p-5 anime">
              <div className="text-center position-relative z-2">
                <i className="fa-brands fa-css3 fs-1"></i>
                <p className="fs-3 mt-3">CSS3</p>
    
              </div>
            </div>
          </div>
          <div className="carol" style={{ "--position": 3 }}>
            <div className="skillcon w-100 border border-3 border-white rounded-3 p-5 anime">
              <div className="text-center position-relative z-2">
                <i className="fa-brands fa-bootstrap fs-1"></i>
                <p className="fs-3 mt-3">Bootstrap 5</p>
    
              </div>
            </div>
          </div>
          <div className="carol" style={{ "--position": 4 }}>
            <div className="skillcon w-100 border border-3 border-white rounded-3 p-5 anime">
              <div className="text-center position-relative z-2">
                <i className="fa-brands fa-js fs-1"></i>
                <p className="fs-3 mt-3">JavaScript</p>
    
              </div>
            </div>
          </div>
          <div className="carol" style={{ "--position": 5 }}>
            <div className="skillcon w-100 border border-3 border-white rounded-3 p-5 anime">
              <div className="text-center position-relative z-2">
                <i className="fa-brands fa-react fs-1"></i>
                <p className="fs-3 mt-3">React</p>
    
              </div>
            </div>
          </div>
          <div className="carol" style={{ "--position": 6 }}>
            <div className="skillcon w-100 border border-3 border-white rounded-3 p-5 anime">
              <div className="text-center position-relative z-2">
                <img src="tailwind-css.svg" width={'50px'} alt="" />
                <p className="fs-3 mt-3">Tailwind CSS</p>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  






                <section id="services" className='position-relative z-3'>
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-lg-6 my-auto">
                        <h3 className="pb-4"><span className="title">services</span></h3>
                        <p className="reveal-type" ref={(el) => (splitTypesRef.current[1] = el)}>I specialize in comprehensive web development services, including crafting visually appealing and responsive user interfaces, building dynamic single-page applications, implementing web designs seamlessly, ensuring responsiveness across devices, collaborating effectively on projects, optimizing code for enhanced performance, providing insights into the latest tech trends, and offering custom solutions tailored to unique project needs. Let's collaborate to bring innovation and efficiency to your digital projects and create a standout online presence.</p>
                      </div>
                      <div className="col-lg-5">
                        <div className="segrid">
                          <div className="row">
                            <div className="col-6 mt-5">
                              <div className="row flex-column gap-3">
                                <div className="col-lg-12">
                                  <div className="box d-flex align-items-center justify-content-center w-100 flex-column p-4 py-5 rounded-3 h-100">
                                    <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                        <path d="M13.1822 17.745L17.772 13.1019L14.7833 10.0599L13.9294 10.9138C13.538 11.3051 13.0484 11.5101 12.4606 11.5286C11.8729 11.5471 11.3662 11.3421 10.9407 10.9138C10.5137 10.4868 10.3003 9.97945 10.3003 9.39167C10.3003 8.8039 10.5137 8.29725 10.9407 7.87172L11.7412 7.07118L9.33962 4.66956L4.69649 9.31269L13.1822 17.745ZM30.6873 35.3035L35.3304 30.6604L32.9288 28.2588L32.0749 29.0593C31.648 29.4863 31.1498 29.6997 30.5806 29.6997C30.0113 29.6997 29.5132 29.4863 29.0862 29.0593C28.6593 28.6324 28.4458 28.1342 28.4458 27.565C28.4458 26.9957 28.6593 26.4976 29.0862 26.0706L29.8868 25.2167L26.8447 22.228L22.255 26.8178L30.6873 35.3035ZM2.93531 39.1995C2.33046 39.1995 1.82309 38.9945 1.41322 38.5846C1.00334 38.1748 0.799115 37.6681 0.800539 37.0647V31.034C0.800539 30.7493 0.853908 30.4732 0.960646 30.2057C1.06738 29.9381 1.22749 29.6983 1.44097 29.4863L10.1402 20.7871L0.907277 11.5542C0.302426 10.9493 0 10.2022 0 9.31269C0 8.4232 0.302426 7.67603 0.907277 7.07118L7.09811 0.880349C7.70296 0.275497 8.45013 -0.0176776 9.33962 0.00082369C10.2291 0.019325 10.9763 0.33029 11.5811 0.933718L20.8674 10.1666L28.9261 2.05447C29.3531 1.62752 29.8334 1.3073 30.3671 1.09383C30.9008 0.880349 31.4523 0.77361 32.0215 0.77361C32.5908 0.77361 33.1423 0.880349 33.676 1.09383C34.2097 1.3073 34.69 1.62752 35.117 2.05447L37.9455 4.93641C38.3725 5.36336 38.6927 5.84369 38.9062 6.37738C39.1197 6.91107 39.2264 7.46255 39.2264 8.03183C39.2264 8.6011 39.1197 9.14404 38.9062 9.66066C38.6927 10.1773 38.3725 10.6483 37.9455 11.0739L29.8868 19.186L39.1197 28.4189C39.7245 29.0237 40.0269 29.7709 40.0269 30.6604C40.0269 31.5499 39.7245 32.297 39.1197 32.9019L32.9288 39.0927C32.324 39.6976 31.5768 40 30.6873 40C29.7978 40 29.0507 39.6976 28.4458 39.0927L19.2129 29.8598L10.5137 38.559C10.3003 38.7725 10.0605 38.9326 9.79432 39.0394C9.52819 39.1461 9.25209 39.1995 8.96603 39.1995H2.93531ZM5.07008 34.9299H8.05875L28.9795 14.0626L25.9374 11.0205L5.07008 31.9412V34.9299ZM27.4852 12.5682L25.9374 11.0205L28.9795 14.0626L27.4852 12.5682Z" fill="white"/>
                                      </svg>
                                    </div>
                                    <p className="text-white mt-4 text-center text-uppercase">Performance Optimization</p>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="box1 d-flex align-items-center justify-content-center w-100 flex-column p-4 py-5 rounded-3 h-100">
                                    <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                                    <img src="brand identity 1.png" alt=""/>
                                    </div>
                                    <p className="text-white mt-4 text-center text-uppercase">Responsive Design</p>
                                  </div>
                                </div>
                              </div>
                  
                            </div>
                            <div className="col-6">
                              <div className="row flex-column gap-3">
                                <div className="col-lg-12">
                                  <div className="box1 d-flex align-items-center justify-content-center w-100 flex-column p-4 py-5 rounded-3 h-100">
                                    <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <g clipPath="url(#clip0_83_92)">
                                          <path d="M11.4287 30L1.42871 20L11.4287 10M28.5716 30L38.5716 20L28.5716 10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                        <defs>
                                          <clipPath id="clip0_83_92">
                                            <rect width="40" height="40" fill="white"/>
                                          </clipPath>
                                        </defs>
                                      </svg>
                                    </div>
                                    <p className="text-white text-center mt-4 text-uppercase">HTML5/CSS Development</p>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="box d-flex align-items-center justify-content-center w-100 flex-column p-4 py-5 rounded-3 h-100">
                                    <div className="circle rounded-circle d-flex justify-content-center align-items-center">
                                      <i className="bi bi-filetype-js text-white fs-2"></i>
                                    </div>
                                    <p className="text-white pt-4 text-center text-uppercase">JavaScript Development</p>
                                  </div>
                                </div>
                              </div>
                  
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>


                <section id="portfolio" className='position-relative z-3' ref={projectRef}>
                  <div className="container">
                    <h3 className="text-center"><span className="title text-white">PORTFOLIO</span></h3>
                
                    <p className="text-center text-white pt-3 pb-5">Take a look at my collection of projects</p>
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="row">
                          <div className="col-lg-12 mb-auto project">
                            <div className="primary">
                              <img src="project (7).png"  alt="" className="w-100 rounded-3" style={{border: '0.928px solid #C3965B'}} />
                              <div className="view rounded-3">
                                <a href="https://devtfitness.netlify.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light border-3 rounded-3">View Project</button></a>
                              </div>
                
                            </div>
                          </div>
                          <div className="col-lg-12 my-4 project">
                            <div className="yelbox w-75 rounded-3 mx-auto" style={{background: '#C3965B', height: '29.701px'}}>
                            </div>
                          </div>
                          <div className="col-lg-12 project">
                            <div className="primary">
                              <img src="project (2).png"  alt="" className="w-100 h-100 rounded-3" style={{border: '0.928px solid #C3965B'}} />
                              <div className="view rounded-3">
                                <a href="https://fe-mal.netlify.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light border-3 rounded-3">View Project</button></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7">
                        <div className="row">
                          <div className="col-lg-12 mt-3 mt-lg-0 project">
                            <div className="primary">
                              <img src="project (3).png"  alt="" className="w-100 rounded-3" style={{border: '0.928px solid #C3965B'}} />
                              <div className="view rounded-3">
                                <a href="https://tessgetlinked.netlify.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light border-3 rounded-3">View Project</button></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 mt-3 project">
                            <div className="primary h-100">
                              <img src="project (1).png"  alt="" className="w-100 h-100 rounded-3 object-fit-cover" style={{border: '0.928px solid #C3965B'}} />
                              <div className="view rounded-3">
                                <a href="https://devtsocialbook.netlify.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light border-3 rounded-3">View Project</button></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <div className="row">
                          <div className="col-lg-7 project">
                            <div className="primary">
                              <img src="project (9).png"  alt="" className="w-100 h-100 rounded-3" style={{border: '0.928px solid #C3965B'}} />
                              <div className="view rounded-3">
                                <a href="https://neebo.netlify.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light rounded-3 border-3">View Project</button></a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-5 mt-3 mt-lg-0 project">
                            <div className="primary h-100">
                              <img src="project (8).png"  alt="" className="w-100 h-100 rounded-3 object-fit-contain" style={{border: '0.928px solid #C3965B'}} />
                              <div className="view rounded-3">
                                <a href="https://animately.netlify.app" target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-light rounded-3 border-3">View Project</button></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="contact" className='position-relative z-3'>
                <div id="form">
                  <div className="container">
                    <div className="row justify-content-between">
                      <div className="col-lg-4 my-auto" data-aos="fade-right" data-aos-duration="1000">
                        <div className="formtxt">
                          <h3 className="protxt text-uppercase">Got a project? <br/>Let's talk</h3>
                
                          <p className="mt-4">Ready to make your project a success? Whether it's a website, strategy refinement, or a tech challenge – let's collaborate. Ready to start?</p>
                
                        </div>
                      </div>
                      <div className="col-lg-6 mt-3 mt-md-0" data-aos="fade-left" data-aos-duration="1000">
                        <h3 className="text-uppercase">Estimate your project? <br/> Let me know here.</h3>
                          <Contactform/>
                
                      </div>
                    </div>
                  </div>
                </div>

              <div id="footer">
                <div className="container">
                  <h3 className="text-center"><span className="title text-center">Get in touch</span></h3>
              
                  <div className="row mt-5">
                    <div className="col-lg-4">
                      <div className="card1 px-lg-5 px-3 py-3">
                        <p><span><i className="bi bi-envelope-fill text-white fs-4 me-2"></i></span> teslimliasu49@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-lg-4 my-3 my-lg-0">
                      <div className="card1 px-lg-5 px-3 py-3">
                        <p><span><i className="bi bi-telephone-fill text-white fs-4 me-2"></i></span>+2347033275477</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card1 px-lg-5 px-3 py-3">
                        <p><span><i className="bi bi-twitter-x text-white fs-4 me-2"></i></span> Tesssss718</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4 justify-content-center">
                    <div className="col-lg-4">
                      <div className="card1 px-lg-5 px-3 py-3">
                        <p><span><i className="bi bi-github text-white fs-4 me-2"></i></span> Tess718</p>
                      </div>
                    </div>
                    <div className="col-lg-4 mt-3 mt-lg-0">
                      <div className="card1 px-lg-5 px-3 py-3">
                        <p><span><i className="bi bi-linkedin text-white fs-4 me-2"></i></span> teslimliasu</p>
                      </div>
                    </div>
                  </div>
              
                </div>
                <hr style={{border: '1px solid #C3965B; opacity: 100%'}} className="mt-5" />
                <div className="d-flex">
                  <div className="container">
                    <p className="copyright py-3 text-center">© Copyright 2023 - Built by Dev Tess ❤</p>
              
                  </div>
                </div>
              </div>
  
          </section>
    </div>
  )
}

export default home

