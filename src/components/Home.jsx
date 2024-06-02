import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from '../assets/jeetesh.jpeg';

const Home = () => {
    const animation = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2 }
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, delay: 0.4 }
          },
        },
    };

    return (
        <div id="home">
            <section>
                <div className="content-wrapper">
                    <motion.h1 variants={animation.h1} initial="initial" animate="whileInView">
                        Hi, I'M <br /> Jeetesh Budhani
                    </motion.h1>
                    <Typewriter
                        options={{
                            strings: ['A Developer', 'A Designer', 'A Creator'],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: 'typewriterpara',
                        }}
                    />
                    <div>
                        <a href="mailto:official.6packprogrammer@gmail.com">Hire Me</a>
                        <a href="#work">Projects<BsArrowUpRight /></a>
                    </div>
                    <article>
                        <p>
                            + <Typewriter
                                options={{
                                    strings: ['100'],
                                    autoStart: true,
                                    loop: true,
                                    wrapperClassName: 'typewriterpara',
                                }}/> 
                        </p>
                        <span>Clients Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                + <Typewriter
                                    options={{
                                        strings: ['500'],
                                        autoStart: true,
                                        loop: true,
                                        wrapperClassName: 'typewriterpara',
                                    }}/>
                            </p>
                            <span>Projects Done</span>
                        </article>
                        <article data-special>
                            <p>Contact</p>
                            <span>official.6packprogrammer@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="jeetesh" />
            </section>
            <BsChevronDown/>
        </div>
    );
};

export default Home;
