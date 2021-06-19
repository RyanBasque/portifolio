import React from 'react';

import './ExperienceArticle.css';

const ExperienceArticle = ({ label, date, text, dot, id }) => {

    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    const animeScroll = () => {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3.7) / 4);

        target.forEach((element) => {
            (windowTop) > element.offsetTop ? 
                element.classList.add(animationClass) : 
                element.classList.remove(animationClass);
        });

    }

    window.addEventListener('scroll', () => {
        animeScroll();
    });

    return (
        <article id={id} data-anime="left">
            <div className="fake-article">
                <h3>{label}</h3>
                <h4>{date}</h4>

                <p>{text}</p>
            </div>
            { dot && <div className="article-div" />}
        </article>
    );
};

export default ExperienceArticle;