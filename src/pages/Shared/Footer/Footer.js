import React from "react";
import './/Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='bg-info p-1 mb-1 mt-5'>
                <div className='footer d-flex  mt-5 mb-2 justify-content-around w-100 '>
                    <div>
                        <h6 className='text-white'>About Us</h6>
                        <a href="#">Aim</a>
                        <br />
                        <a href="#">Vision</a>
                        <br />
                        <a href="#">Testimonials</a>
                    </div>
                    <div>
                        <h6 className='text-white'>Services</h6>
                        <a href="#">Writing</a>
                        <br />
                        <a href="#">Internships</a>
                        <br />
                        <a href="#">Coding</a>
                        <br />
                        <a href="#">Teaching</a>
                        <br />
                    </div>
                    <div>
                        <h6 className='text-white'>Contact Us</h6>
                        <a href="#">Uttar Pradesh</a>
                        <br />
                        <a href="#">Ahemdabad</a>
                        <br />
                        <a href="#">Indore</a>
                        <br />
                        <a href="#">Mumbai</a>
                    </div>
                    <div>
                        <h6 className='text-white'>Social Media</h6>
                        <a href="#">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </a>
                        <br />
                        <a href="#">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </a>
                        <br />
                        <a href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        </a>
                        <br />
                        <a href="#">
                            <i className="fab fa-youtube">
                                <span style={{ marginLeft: "10px" }}>
                                    Youtube
                                </span>
                            </i>
                        </a>
                    </div>

                </div>
                <p className='text-white border-top'>Copyright by @Shipu@2021</p>

            </div>

        </div>
    );
};
export default Footer;