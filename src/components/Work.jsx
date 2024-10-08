import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import data from '../assets/data.json'
const Work = () => {
  return (
    <div id ="work">
        <h2>Work</h2>
        <section>
            <article>
                <Carousel
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}

                    >
                  {
                  data.projects.map(i=>(
                    <div key={i.title} className='workItem'>
                        <img Src={i.imgSrc} alt= {i.title}/>
                        <aside>
                            <h3>{i.title}</h3>
                            <p>{i.descryption}</p>
                            <a target={"blank"} href={i.url}>
                                VIew Demo
                            </a>
                        </aside>
                    </div>
                  ))}
                </Carousel>
            </article>
            </section>
    </div>
  );
}

export default Work