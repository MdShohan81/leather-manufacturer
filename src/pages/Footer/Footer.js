import React from 'react';
import logo from '../../img/logo (1).png';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
        <div className="container my-5">
            <div className="row">
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row">
                    <div className="col-6 col-md-4">
                            <p><img src={logo} alt="" className='img-fluid'/></p>
                            <p>For questions about the carspot Auto Buying Service please call 1-888-878-3227.
                                Certified Dealers are contractually obligated by carspot to meet certain customer service requirements and complete the carspot Dealer Certification Program.
                                carspot does not broker, sell, All vehicles are subject to prior sale. By accessing this website, you agree to the carspot Terms of Service and Privacy Policy.</p>
                        </div>
                        <div className="col-6 col-md-4">
                            <h4 className='text-center'>CONTACT Us</h4>
                            <ul className='mt-4'>
                                <li>Phone: +88019832333</li>
                                <li>support@carspot.com</li>
                                <li>Bhola Sadar, Bangladesh</li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-4">
                            <h4 className='text-center'>USEFUL LINK</h4>
                            <ul className='text-center mt-4'>
                                <li><a  href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Volunter</a></li>
                                <li><a href="#">Location</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-10 mx-auto">
                <p className='text-center'>© 2022 Carspot. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;