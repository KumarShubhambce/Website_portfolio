import React from "react";
import {FaLinkedin, FaTelegram, FaTwitter} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/kumarshubhamp/" target="_blank" className="footer__social-link">
                    <FaLinkedin />
                </a>

                <a href="https://t.me/kumarshubhambcebgp" target="_blank" className="footer__social-link">
                    <FaTelegram />
                </a>

                <a href="https://twitter.com/Kumar_Shubham47" target="_blank" className="footer__social-link">
                    <FaTwitter />
                </a>
            </div>

            <p className="footer__copyright text-cs">&copy; 2023 <span>Kumar </span> .All Rights Reserved</p>

             <p className="footer__copyright text-cs">Developed by <span>Kumar Shubham</span></p>
            </div>
        </footer>
    )
}

export default Footer