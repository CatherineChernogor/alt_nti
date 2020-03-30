import React from 'react';
import vk from './logos/vk.png';
import insta from './logos/insta.png';
import web from './logos/web.png';
import mail from './logos/mail.webp';

function Footer() {
    return (
        <footer className='option-text-m'>
            <div className='footer-line'>
                <img className="footer-logo" src={web} alt="web" />
                <p className='footer-line-text'>alteri-lab.ru</p>
            </div>


            <div className='footer-line'>
                <img className="footer-logo" src={mail} alt="mail" />
                <p className='footer-line-text'>altruist@alteri-lab.ru</p>
            </div>
            <div className='footer-line'>
                <img className="footer-logo" src={vk} alt="vk" />
                <img className="footer-logo" src={insta} alt="insta" />
                <p className='footer-line-text'>alteri_lab</p>
            </div>
        </footer>
    );
}

export default Footer;