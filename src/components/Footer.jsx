import React from 'react'
import me from '../assets/school1.jpeg' 
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Founder"/>
            <h2>Jeetesh Bduhani</h2>
            <p>Motivation is Temporary,but disciplane last Forever</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href='"https://youtube.com' target={'blank'}>
                    <AiFillYoutube/>
                </a>
                <a href='"https://instagram.com' target={'blank'}>
                    <AiFillInstagram/>
                </a>
                <a href='"https://facebook.com'>
                    <AiFillFacebook/>
                </a>
               
            </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer