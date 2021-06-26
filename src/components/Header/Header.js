import React from 'react';

import './Header.css';

const Header = () => {

    // const headerElement = document.querySelector('header');

    // window.addEventListener('scroll', () => {
    //     const offset = window.pageYOffset;

    //     if (offset > 20)
    //         headerElement.classList.add('scroll')
    //     else
    //         headerElement.classList.remove('scroll')
    // });

    return (
        <header className="header scroll">
            <div className="header-div">
                <span>
                    <strong>RYAN</strong>BASQUE
                </span>
            </div>
        </header>
    );
};

export default Header;