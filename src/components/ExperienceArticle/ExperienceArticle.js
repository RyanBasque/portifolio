import React from 'react';

import './ExperienceArticle.css';

const ExperienceArticle = ({ label, date, text, dot }) => {

    return (
        <article>
            <div
                className="fake-article"
            >
                <h3>{label}</h3>
                <h4>{date}</h4>

                <p>{text}</p>
            </div>
            { dot && <div className="article-div" />}
        </article>
    );
};

export default ExperienceArticle;