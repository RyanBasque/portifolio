import React, { Fragment, useState } from 'react';

import ExperienceArticle from '../../components/ExperienceArticle/ExperienceArticle';
// import Footer from '../../components/Footer/Footer';

import './Home.css';

import { Icon } from '@iconify/react';

import arrowDown from '@iconify/icons-bi/arrow-down';
import profilePng from '../../assets/images/profile-pic.png';

const Home = () => {
    document.title = 'Ryan Basque - Home';

    const [articleInfo] = useState([
        {
            label: "Lógica de programação",
            date: "Agosto de 2019",
            text: "Curso introdutório na área de programação",
            dot: true,
            id: 0,
        },
        {
            label: "HTML, CSS e Javascript",
            date: "Agosto de 2019",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 1,
        },
        {
            label: "Primeiro curso de Angular",
            date: "Janeiro de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 2,
        },
        {
            label: "Primeiro projeto profissional",
            date: "Fevereiro de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 3,
        },
        {
            label: "Rocketseat - NLW",
            date: "Junho de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 4,
        },
        {
            label: "Primeiro curso de React",
            date: "Julho de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 5,
        },
        {
            label: "Primeiro curso de React Native",
            date: "Agosto de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 6,
        },
        {
            label: "Primeiro aplicativo mobile",
            date: "Agosto de 2020",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 7,
        },
        {
            label: "Começo da faculdade - FIAP",
            date: "Janeiro de 2021",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: true,
            id: 8,
        },
        {
            label: "Primeira oportunidade na área - Linnks",
            date: "Março de 2021",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam optio neque voluptas, veritatis quaerat corrupti exercitationem tenetur earum voluptate magnam vel temporibus, inventore dolor minus ratione quia ducimus error! Mollitia.",
            dot: false,
            id: 9,
        },
    ]);

    const scrollToContainer = () => {
        const height = document.querySelector('#scrollRef').offsetHeight;
        window.scrollTo(0, height + 100);
    };

    return (
        <Fragment>
            <main className="home-main">
                <section id="scrollRef">
                    <div className="first-container">
                        <div className="text-container">
                            <h1>
                                Oi, meu nome é <span>&lt;Ryan Basque/&gt;</span>
                                <br />
                                Eu <span>penso e construo</span> interfaces de sistemas.
                            </h1>

                            <div className="h2-container">
                                <h2>Programador Front-end, entusiasta à área de UX/UI, curioso e determinado. </h2>
                                <h2>Estudo programação web desde os 16 anos, atualmente, tenho 18, com conhecimentos avançados em <span>React, React Native, Angular, HTML, CSS, JavaScript, Typescript, Figma, Git, GitHub, Bitbucket, NPM e Yarn.</span></h2>
                                <h2>Também estudo <span>Python, Java, SQL, IA - NodeRed, Agile Software Design e UX/UI.</span></h2>
                            </div>
                        </div>

                        <article className="article-image">
                            <div className="image-container">
                                <figure>
                                    <img src={profilePng} alt="Ryan Basque profile" />
                                </figure>
                            </div>
                        </article>
                    </div>

                    <div className="ellipse" onClick={() => scrollToContainer()}>
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
                                        id={element.id}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </Fragment>
    );
};

export default Home;