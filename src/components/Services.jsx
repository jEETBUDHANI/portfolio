import React from 'react';
import { motion } from 'framer-motion';
import { AiFillAndroid, AiFillCiCircle, AiFillIeCircle, AiFillWindows } from 'react-icons/ai';

const Services = () => {
    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%",
        },
        two: {
            opacity: 0,
            y: "-100%",
        },
        three: {
            opacity: 0,
            y: "-100%",
        },
        four: {
            opacity: 0,
            x: "-100%",
        },
    };

    return (
        <div id="services">
            <h2>Services</h2>
            <section>
                <motion.div className='serviceBox1' animate={animations.whileInView} initial={animations.one}>
                    <h3>0</h3>
                    <p>Years Experience</p>
                </motion.div>
                <motion.div className='serviceBox2' animate={animations.whileInView} initial={animations.two}>
                    <AiFillIeCircle />
                    <span>Web Development</span>
                </motion.div>
                <motion.div className='serviceBox3' animate={animations.whileInView} initial={animations.three}>
                    <AiFillAndroid />
                    <span>App Development</span>
                </motion.div>
                <motion.div className='serviceBox4' animate={animations.whileInView} initial={animations.four}>
                    <AiFillWindows />
                    <span>Desktop Development</span>
                </motion.div>
            </section>
        </div>
    );
};

export default Services;
