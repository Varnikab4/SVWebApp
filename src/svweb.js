import { useState, useRef } from 'react';
import {ref, set } from 'firebase/database';
import emailjs from 'emailjs-com';
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import app from "./firebase";
 

function Enquiry() {
    const rName = useRef();
    const rEmail = useRef();
    const rPhone = useRef();
    const rQuery = useRef();
    const rOtp = useRef();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [msg, setMsg] = useState("");
    const [final, setFinal] = useState(null);

    const hName = (event) => setName(event.target.value);
    const hPhone = (event) => setPhone(event.target.value);
    const hEmail = (event) => setEmail(event.target.value);
    const hQuery = (event) => setQuery(event.target.value);
   

    const submit = (event) => {
        event.preventDefault();
        // Basic form validation
        if (!name || !phone || !email || !query) {
            alert("Please fill out all fields.");
            return;
        }
                // EmailJS
    const emailData = { name, phone, email, query };
    emailjs.send("service_gi44t3q", "template_12345", emailData, "YQa56J2od6_oCILxj")
        .then((res) => {
            setMsg("We will get back to you");
            setName("");
            setPhone("");
            setEmail("");
            setQuery("");
        })
        .catch((err) => {
            console.log("Email sending failed:", err);
            setMsg("Failed to send the email. Please try again later.");
        });
};

    const toggleMenu = () => {
        const menu = document.querySelector('.navbar');
        menu.classList.toggle('active');
    };
    return (
        <>
            <header className="header">
                <img src="./images/img_5.jpeg" alt="img" />
                <nav className="navbar">
                    <a href="#home" class="hover-logo">Home</a>
                    <a href="#about" class="hover-logo">About</a>
                    <a href="#teacher" class="hover-logo">Teachers</a>
                    <a href="#review" class="hover-logo">Review</a>
                    <Link to="/gallery">Gallery</Link>
                    <a href="#contact" class="hover-logo">Contact</a>
                </nav>
                <div className="nav-2">
                    <button type="button" className="btn">
                        <a href="#contact" className="hover-logo">
                            <span className="text text-1">Admission</span>
                        </a>
                    </button>
                </div>
                <div className="icons">
                    <div className="menu-btn" onClick={toggleMenu}>
                    <IoMdMenu />
                    </div>
                </div>
            </header>
            
            <section className="home" id="home">
            <img src="./images/img_9studenttets1.jpg" alt="Background" className="background-image" />

           
            <div className="content">
                <h1>Welcome to SV Educare</h1>
                <p>Empowering Minds, Shaping Futures</p>
                <br />
                <a href="#about" className="btn">
                    <span className="text text-1">Learn More</span>
                </a>
                <br />
            </div>
        </section>
    
            <section className="about" id="about">
                <div className="container">
                    <figure className="about-image">
                    <img src="./images/img_11office.jpg" alt=""height="500" class="img1" />
                    </figure>
                    <div className="about-content">
                        <h1 className="heading">About us</h1>
                        <h3>34+ Years of Experience</h3>
                        <p>At SV Educare, we are more than an institute; we are a community dedicated to fostering excellence in education. With a legacy of nurturing young minds and instilling a passion for learning, we stand as a beacon of academic achievement in the heart of Worli.</p>
                        <br />
                        <p>Key Highlights:</p>
                        <ul className="highlight-list">
                            <li>Comprehensive Courses for SSC Students</li>
                            <li>Expert Faculty Committed to Excellence</li>
                            <li>Innovative Teaching Methodologies</li>
                            <li>Holistic Approach to Education</li>
                            <li>State-of-the-Art Facilities</li>
                        </ul>
                        <br />
                        <p>Our commitment to providing quality education goes beyond the classroom. We believe in equipping students with the skills and knowledge they need to thrive in an ever-evolving world.</p>
                    </div>
                </div>
    
                <div className="more-content">
                    <div className="team-member">
                    <img src="./images/img_profSahadev.jpeg" alt="Circular Image"/>


                        <div className="text-content">
                            <h3>Prof. Sahadev G. Bhoga</h3>
                            <p>Founder Chairman</p>
                        </div>
                    </div>
    
                    <div className="text-content">
                        <h2 className="heading-2">Educare</h2>
                        <p>"Education has two aspects; the first is related to external and worldly education, which is nothing but acquiring bookish knowledge. In the modern world, we find many well-versed and highly qualified in this aspect. The second aspect known as Educare, is related to human values. The word Educare means to bring out that which is within. Human Values are latent in every human being; one cannot acquire them from outside. They have to be elicited from within. Educare means to bring out human values. To 'bring out' means to translate them into action."</p>
                    </div>
                </div>
    
                <div className="more-content-2">
                    <div className="text-content">
                        <h2 className="heading-2">About SV Educare</h2>
                        <p><span className="head-2">Welcome to the world of SV-Educare the world of academic Success! and professionally Victorious !!</span><br />
                            We have been imparting a massive and noteworthy contribution in the field of education over the last three decades. Rarely has any institute of such type enjoyed this honour.
                            We offer coaching and appropriate guidance for school students specially for the Std. X (SSC).
                            Every year our results of Std. X (S.S.C.) Examinations are excellent. Many students obtain above 90% marks, many secure admissions to renowned colleges. We are consistent in our performance for the last many years.
                            Our past students are spread all over the world. They are Doctors, Engineers, Dentists, Architects, Chartered Accountants, Cost Accountants etc. Many of our past students have become entrepreneurs and are running their own businesses, factories etc. very successfully.
                            Right from the beginning our classes have had a consistent outstanding performance.</p>
                    </div>
    
                    <div className="team-member">
                        <div className="text-content">
                            <br />
                            <h3>Prof. Satyapal G. Bhoga</h3>
                            <p>Principal</p>
                        </div>
                        <img src="./images/img_profsatyapalsir.jpeg" alt="Circular Image" /><br />
                    </div>
                </div>
            </section>
    
            <section className="teacher" id="teacher">
                
                    <h1 className="heading">Our Expert Teachers</h1>
                    <div className="box-container">
                        <div className="box">
                        <div class="image">
                            <img src="./images/img_profsatyapalsir.jpeg" alt="Teacher" />
                            </div>
                            
                            <div className="content">
                                <h3>Satyapal Bhoga</h3>
                                <p>Professor</p>
                            </div>
                        </div>
                       
    
                        <div className="box">
                        <div class="image">
                            <img src="./images/img_profSahadev.jpeg" alt="Teacher" />
                            </div>
                            <div className="content">
                                <h3>Sahadev Sir</h3>
                                <p>Professor</p>
                            </div>
                            </div>
                        
    
                        <div className="box">
                        <div class="image">
                            <img src="./images/shankar_sir.png" alt="Teacher" />
                            </div>
                            <div className="content">
                                <h3>Shankar Sir</h3>
                                <p>Assistant Professor</p>
                                </div>
                        </div>
    
                        <div className="box">
                        <div className="image">
                            <img src="./images/vijaysir.png" alt="Teacher" />
                            </div>
                            <div className="content">
                                <h3>Vijay Sir</h3>
                                <p>Assistant Professor</p>
                            </div>
                        </div>

                        </div>
                       
                   
               
            </section>
    
            <section class="review" id="review">
             <div className="container-1">
                <div className="section-header">
                <h2 className="title">Our Students Review</h2>
            </div>
            <div className="review-content">
                <div className=" swiper review-slider js-review-slider">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide review-item">
                        <div className="info">
                            <img src="./images/review1.jpeg" alt="img"/>
                            <br/><br/>
                            <div className="text-book">
                                <h3 className="name">Gauthami Katkam</h3>
                                
                            </div>
                             </div>
                            <p>
                                Excellent classes in Worli, the way of teaching is awesome, test orals and prelims during board exams are all well planned and coordinated. My best classes is S V Classes in Worli.
                            </p>
                            <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                    </div>

                    <div className=" swiper-slide review-item">
                        <div className="info">
                            <img src="./images/review_4.jpeg" alt="img"/>
                            
                            <div className="text-book">
                                <h3 className="name">Anusha Vemula</h3>
                                
                            </div>
                             </div>
                            <p>
                                "S V Classes provides a nurturing environment for students. The teachers are not only knowledgeable but also caring. The strategic approach to exams and the emphasis on understanding concepts have significantly improved my academic performance. Thank you, S V Classes!"

                            </p>
                            <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            </div>
                    </div>

                    <div className=" swiper-slide review-item">
                        <div className="info">
                            <img src="./images/review_3.jpeg" alt="img"/>
                            
                            <div className="text-book">
                                <h3 className="name">Priyanka</h3>
                            </div>
                             </div>
                            <p>
                                "Enrolling in S V Classes was the best decision I made for my academic journey. The personalized attention, well-structured curriculum, and dedicated teachers made my learning experience enjoyable and fruitful. Highly recommended!"

                            </p>
                            <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                            </div>
                    </div>

                    <div className=" swiper-slide review-item">
                        <div className="info">
                            <img src="./images/review_4.jpeg" alt="img"/>
                            <div className="text-book">
                                <h3 className="name">Aman Gudekar</h3>
                                
                            </div>
                             </div>
                            <p>"I can't express how grateful I am for the exceptional classes at S V Classes in Worli. The teaching methodology is outstanding, and the support during exams is unparalleled. Thanks to S V Classes, I achieved success in my board exams!"

                            </p>
                            <div className="rating">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            </div>
                    </div>

                </div>
            </div>
            <div className="swiper-pagination js-review-pagination"></div>

        </div>
        </div>

    </section>

        
    <section className="contact" >
        <div className="get-container">
            <div className="get-in-touch" id="contact">
                <br/><br/>
                
                <h1 className="heading">Get In Touch</h1>
                <div className="row-1">
                    <div className="call-section">
                        <div className='icons'>
                        <FaPhone />
                        </div>
                        <h2>Call Us</h2>
                        <p>For inquiries, feel free to call us at:<a href="#"> <strong>+91 8097575809, 9987578062, 8828082195 </strong></a></p>
                    </div>
                    <div className="email-section">
                    <div className='icons'>
                    <MdEmail />
                        </div>
                        <h2>Email Us</h2>
                        <p>Send us an email at: <a href="#"><strong>sveducaressc@gmail.com</strong></a></p>
                    </div>
                    <div className="address-section">
                    <div className='icons'>
                    <RiHomeOfficeLine />
                        </div>
                        <h2>Address</h2>
                        <p>Our office address is: <strong>SV Educare , Opp B.D.D.Chawl No.108,
                            S.S. Amrutwar Marg, Worli,
                            Mumbai-400018.</strong></p>
                        
                    </div>
            </div>
            <br/><br/>
        </div>
        </div>

        <div className="container-1">
            <h1 className="heading">Contact Us</h1>
            <div className="row">
                <div className="images">
                    <img src="./images/img_4.jpeg" alt="image"/>
                </div>
                <form onSubmit={submit}>
                        <input type="text" placeholder="Enter your name" onChange={hName} ref={rName} value={name} />
                        <br /><br />
                        <input type="email" placeholder="Enter your email" onChange={hEmail} ref={rEmail} value={email} />
                        <br /><br />
                        <input type="tel" placeholder="Enter Phone number" onChange={hPhone} ref={rPhone} value={phone} />
                        <br /><br />
                        <textarea placeholder="Query" rows={3} cols={30} onChange={hQuery} ref={rQuery} value={query} />
                        <br /><br />
                        <input type="submit" value="Submit" id="sign-in-button" />
                        <br /><br />
                    </form>
            </div>
        </div>
       

    </section>
    
    
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text">About Us</h1>
                        <p>SV Educare is dedicated to providing quality education and nurturing young minds. With a legacy of academic excellence, we strive to empower students and prepare them for future challenges.</p>
                        <br/><br/>
                        <div className="contact">
                            <span><FaPhone /> &nbsp; +91 8828082195</span>
                            <span><MdEmail /> &nbsp; svssc@gmail.com</span>
                        </div>
                        <div className="socials">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
    
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <br />
                        <ul>
                            <a href="#home">
                                <li>Home</li>
                            </a>
                            <a href="#about">
                                <li>About</li>
                            </a>
                            <a href="#teacher">
                                <li>Teachers</li>
                            </a>
                            <a href="#review">
                                <li>Review</li>
                            </a>
                            <a href="gallery.html">
                                <li>Gallery</li>
                            </a>
                            <a href="#contact">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
    
                  
                </div>
    
                <div className="footer-bottom">
                    &copy; SV Educare | Designed by Varnika Bhoga
                </div>
            </footer>
        </>
    );
}

export default Enquiry;
