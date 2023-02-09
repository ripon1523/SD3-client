import React from 'react';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }} className="p-10">
            <div className='footer'>
                <div>
                    <span className="footer-title text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Services</span>
                    <a className="link link-hover text-green-800">Branding</a>
                    <a className="link link-hover text-green-800">Design</a>
                    <a className="link link-hover text-green-800">Marketing</a>
                    <a className="link link-hover text-green-800">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Company</span>
                    <a className="link link-hover text-green-800">About us</a>
                    <a className="link link-hover text-green-800">Contact</a>
                    <a className="link link-hover text-green-800">Jobs</a>
                    <a className="link link-hover text-green-800">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary ">Legal</span>
                    <a className="link link-hover text-green-800">Terms of use</a>
                    <a className="link link-hover text-green-800">Privacy policy</a>
                    <a className="link link-hover text-green-800">Cookie policy</a>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p className='text-l font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary '>Copyright © 2023 - All right reserved </p>
            </div>
        </footer>
    );
};

export default Footer;