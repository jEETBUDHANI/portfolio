import React from 'react'

const Testimonial = () => {
  return (
    <div id="testimonial">

        <h2>TestiMonial</h2>
        <section>
            <TestimonialCard  name={"Jeetesh"} feedback={"you are so Good"}/>
            <TestimonialCard  name={"Nisha"} feedback={"you are so Good"}/>
            <TestimonialCard  name={"Abhay"} feedback={"you are so Good"}/>
        </section>
    </div>
  )
}
const TestimonialCard=({name,feedback})=>(
    <article>
        <img src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt='user'/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)
export default Testimonial