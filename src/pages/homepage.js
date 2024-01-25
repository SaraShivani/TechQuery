import React from 'react';
class Homepage extends React.Component {
    render() {
        return (

<div className="scroll" data-bs-target=".navbar">

{/* <!-- NAVBAR --> */}
<nav className="navbar navbar-expand-lg bg-white sticky-top">
    <div className="container">
        <a className="navbar-brand" href="#">
            <h5 className="mb-0 text-black">Tech Query</h5>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#hero">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
                    </div>
    </div>
</nav>

{/* <!-- HERO --> */}
<section id="hero" className="min-vh-100 d-flex align-items-center text-left">

        <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 data-aos="fade-left" className="text-uppercase text-white fw-semibold display-1">Tech Query</h1>
                <h5 className="text-white mt-3 mb-4" data-aos="fade-right">Enhance Your Technical Skills Here!</h5>
                <h5 className="text-white mt-3 mb-4" data-aos="fade-right">Join us to get Started</h5>

                <div data-aos="fade-up" data-aos-delay="50">
                    <a href="/Login" className="btn btn-brand me-2">Login</a>
                                    </div>
            </div>
        </div>
    </div>
</section>


{/* <!-- SERVICES --> */}
<section id="services" className="section-padding border-top">
    <div className="container">
        <div className="row">
            <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                <div className="section-title">
                    <h1 className="display-4 fw-semibold">Join the Biggest Q&A Platform</h1>
                    <div className="line"></div>
                    <p>Users will excel in solving your questions</p>
                </div>
            </div>
        </div>
        <div className="row g-4 text-center">
            <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                        <i className="ri-pen-nib-fill"></i>
                    </div>
                    <h5 className="mt-4 mb-3">Quick Doubt Solving</h5>
                    <p>After you Posted your question,Our Community will try to solve it quickly</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                        <i className="ri-stack-fill"></i>
                    </div>
                    <h5 className="mt-4 mb-3">Community Support</h5>
                    <p>Our Seamless Community Will give users their 100% Support</p>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                <div className="service theme-shadow p-lg-5 p-4">
                    <div className="iconbox">
                        <i className="ri-ruler-2-fill"></i>
                    </div>
                    <h5 className="mt-4 mb-3">Tech Q&A</h5>
                    <p>we offer questions spanning a wide area of diverse technologies.</p>
                </div>
            </div>


          </div>
     </div>
</section>

{/* // <!-- REVIEW --> */}
<section id="reviews" className="section-padding bg-light">
     <div className="container">
        <div className="row">
            <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                <div className="section-title">
                    <h1 className="display-4 fw-semibold">Testimonials</h1>
                    <div className="line"></div>
                    <p>We love to craft digital experiences for our users </p>
                </div>
            </div>
        </div>
        <div className="row gy-5 gx-4">
            <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="150">
                <div className="review">
                    <div className="review-head p-4 bg-white theme-shadow">
                        <div className="text-warning">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>Amazing Platform to learn</p>
                    </div>
                    <div className="review-person mt-4 d-flex align-items-center">
                        <img className="rounded-circle" src="./assets/images/avatar-1.jpg" alt=""/>
                        <div className="ms-3">
                            <h5>Dianne Russell</h5>
                            <small>CEO</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="250">
                <div className="review">
                    <div className="review-head p-4 bg-white theme-shadow">
                        <div className="text-warning">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>Quick Support .</p>
                    </div>
                    <div className="review-person mt-4 d-flex align-items-center">
                        <img className="rounded-circle" src="./assets/images/avatar-2.jpg" alt=""/>
                        <div className="ms-3">
                            <h5>Niko Bellic</h5>
                            <small>UX Architect</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-6" data-aos="fade-down" data-aos-delay="350">
                <div className="review">
                    <div className="review-head p-4 bg-white theme-shadow">
                        <div className="text-warning">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                        </div>
                        <p>Friendly Tech Community .</p>
                    </div>
                    <div className="review-person mt-4 d-flex align-items-center">
                        <img className="rounded-circle" src="./assets/images/avatar-3.jpg" alt=""/>
                        <div className="ms-3">
                            <h5>Franklin Trevor</h5>
                            <small>Ethical Hacker</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>	
</section>

{/* <!-- CONTACT --> */}
<section className="section-padding bg-light" id="contact">
   <div className="container">
        <div className="row">
            <div className="col-12 text-center" data-aos="fade-down" data-aos-delay="150">
                <div className="section-title">
                    <h1 className="display-4 text-white fw-semibold">Get in touch</h1>
                    <div className="line bg-white"></div>
                    <p className="text-white">For Suggestions and Feedbacks..please contact us.</p>
                </div>
            </div>
        </div>
        <div className="row justify-content-center" data-aos="fade-down" data-aos-delay="250">
            <div className="col-lg-8">
                <form action="#" className="row g-3 p-lg-5 p-4 bg-white theme-shadow">
                    <div className="form-group col-lg-6">
                        <input type="text" className="form-control" placeholder="Enter first name"/>
                    </div>
                    <div className="form-group col-lg-6">
                        <input type="text" className="form-control" placeholder="Enter last name"/>
                    </div>
                    <div className="form-group col-lg-12">
                        <input type="email" className="form-control" placeholder="Enter Email address"/>
                    </div>
                    <div className="form-group col-lg-12">
                        <input type="text" className="form-control" placeholder="Enter subject"/>
                    </div>
                    <div className="form-group col-lg-12">
                        <textarea name="message" rows="5" className="form-control" placeholder="Enter Message"></textarea>
                    </div>
                    <div className="form-group col-lg-12 d-grid">
                        <button className="btn btn-brand">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>



{/* <!-- FOOTER --> */}
<footer className="bg-dark">
    <div className="footer-top">
        <div className="container">
            <div className="row gy-5">
                <div className="col-lg-3 col-sm-6">
                    <h5 className="mb-0 text-white">Tech Query</h5>
                    <div className="line"></div>
                    <div className="social-icons">
                        <a href="#"><i className="ri-twitter-fill"></i></a>
                        <a href="#"><i className="ri-instagram-fill"></i></a>
                        <a href="#"><i className="ri-github-fill"></i></a>
                        <a href="#"><i className="ri-dribbble-fill"></i></a>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6">
                    <h5 className="mb-0 text-white">CONTACT</h5>
                    <div className="line"></div>
                    <ul>
                        <li>New York, NY 3300</li>
                        <li>(414) 586 - 3017</li>
                        <li>www.techquery.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <div className="container">
            <div className="row g-4 justify-content-between">
                <div className="col-auto">
                    <p className="mb-0">© Copyright BATCH-6. All Rights Reserved</p>
                </div>
                <div className="col-auto">
                    <p className="mb-0">Designed with 💜 in India</p>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
        );
    }
};

export default Homepage;