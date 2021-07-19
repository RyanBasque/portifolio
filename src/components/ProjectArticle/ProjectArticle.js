import React from 'react';

import './ProjectArticle.scss';

import plusMotos from '../../assets/images/plus-motos.svg';
import helloFAQ from '../../assets/images/hello-FAQ.svg';

const ProjectArticle = ({ imagePath, title, date, description }) => {
    const image = () => {
        let img;
        imagePath === 0 && (img = plusMotos);
        imagePath === 1 && (img = helloFAQ);

        return img;
    };

    return (
        <article className="project-article">
            <figure>
                <img src={image()} alt={title} />
            </figure>

            <div>
                <h3>{title}</h3>
                <h3>{date}</h3>
            </div>

            <span>{description}</span>

            <div className="horizonal-row" />
        </article>
    );
};

export default ProjectArticle;