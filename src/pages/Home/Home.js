import React, { Fragment, useState } from 'react';

import ExperienceArticle from '../../components/ExperienceArticle/ExperienceArticle';

import './Home.css';

import { Icon } from '@iconify/react';

import arrowDown from '@iconify/icons-bi/arrow-down';
import profilePng from '../../assets/images/profile-pic.png';

const Home = () => {
    document.title = 'Ryan Basque - Home';

    const [articleInfo] = useState([
        {
            label: "Caelum - Lógica de programação",
            date: "Agosto de 2019",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "HTML, CSS e Javascript",
            date: "Agosto de 2019",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Primeiro curso de Angular",
            date: "Janeiro de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Primeiro projeto profissional",
            date: "Fevereiro de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Rocketseat - NLW",
            date: "Junho de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Primeiro curso de React",
            date: "Julho de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Primeiro curso de React Native",
            date: "Agosto de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Primeiro aplicativo mobile",
            date: "Agosto de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Começo da faculdade - FIAP",
            date: "Janeiro de 2021",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
        },
        {
            label: "Primeira oportunidade na área - Linnks",
            date: "Março de 2021",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: false,
        },
    ]);

    return (
        <Fragment>
            <main className="home-main">
                <section>
                    <div className="first-container">
                        <div className="text-container">
                            <h1>
                                Oi, meu nome é <span>&lt;Ryan Basque/&gt;</span>
                                <br />
                                Eu <span>penso e construo</span> interfaces de sistemas.
                            </h1>

                            <h2>
                                Programador Front-end, entusiasta à área de UX/UI , curioso e determinado. <br /> <br />
                                Estudo programação web desde os 16 anos, atualmente, tenho 18, com conhecimentos avançados em <span>React, React Native, Angular, HTML, CSS, JavaScript, Typescript, Figma, Git, GitHub, Bitbucket, NPM e Yarn.</span> <br /> <br />
                                Também estudo <span>Python, Java, SQL, IA - NodeRed, Agile Software Design e UX/UI.</span>
                            </h2>
                        </div>

                        <article>
                            <div className="image-container">
                                <figure>
                                    <img src={profilePng} alt="Ryan Basque profile" />
                                </figure>
                            </div>
                        </article>
                    </div>

                    <div className="ellipse">
                        <div>
                            <Icon icon={arrowDown} style={{ color: '#3a3a3a', fontSize: '20px' }} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="second-container">
                        <div className="experience-title">
                            <h1>Experiência profissional</h1>
                            <h2>Agosto de 2019 - atual</h2>
                        </div>
                        <div className="article-container">
                            {
                                articleInfo.map((element, index) => (
                                    <ExperienceArticle
                                        label={element.label}
                                        date={element.date}
                                        text={element.text}
                                        dot={element.dot}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    );
};

export default Home;