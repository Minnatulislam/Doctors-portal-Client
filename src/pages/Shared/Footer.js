import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <div>
            <footer style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }} className="footer p-10 ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='text-center py-8 bg-accent text-white font-bold'>
                <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </div>
    );
};

export default Footer;