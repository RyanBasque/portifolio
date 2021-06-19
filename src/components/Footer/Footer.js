import React from 'react';

import './Footer.css';

import gmail from '../../assets/icons/gmail.svg';
import insta from '../../assets/icons/insta.svg';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import phone from '../../assets/icons/phone.svg';

const Footer = () => {

    return (
        <footer>
            <div>
                <a target="_blank" rel="noreferrer" href="mailto:ryanbasquedev@gmail.com">
                    <img src={gmail} alt="gmail" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/wigbas/">
                    <img src={insta} alt="insta" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://github.com/RyanBasque">
                    <img src={github} alt="github" />
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ryan-basque-1688761b0/">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a target="_blank" rel="noreferrer" href="tel:+5511951083595">
                    <img src={phone} alt="phone" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;