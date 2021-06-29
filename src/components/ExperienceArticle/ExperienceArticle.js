import React from 'react';

import './ExperienceArticle.css';

const ExperienceArticle = ({ label, date, text, dot, id }) => {

    const showArticle = (articleId) => {
        const div = document.getElementById(articleId);
        const divHeight = div.getBoundingClientRect().top;

        divHeight < 700 ? div.classList.add('animate') : div.classList.remove('animate');
    };

    document.addEventListener('scroll', () => {
        showArticle(id)
    });

    return (
        <article id={id} data-anime="left">
            <div className="fake-article">
                <h3>{label}</h3>
                <h4>{date}</h4>

                <p>{text}</p>
            </div>
            {dot && <div className="article-div" />}
        </article>
    );
};

export default ExperienceArticle;