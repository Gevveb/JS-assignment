import React from 'react'
import img1 from  '../assets/Images/img-2.svg'
import img2 from  '../assets/Images/img-1.svg'

const ShowcaseSection = () => {
  return (   
        <section className="__showcase container">
            <img src={img1} className="__img-left" alt=""/>
            <div className="__show-case-body">
                <h1>Sale Up</h1>
                <h1>To 50% Off</h1>
                <p>Online shopping free gome delivery over $100</p>
                <a className="__btn-theme" href="">
                    <span className="__btn-theme-left"></span>
                    <span className="__btn-theme-right"></span>
                    SHOP NOW
                </a>
            </div>
            <img src={img2} className="__img-right" alt=""/>
        </section>
  )
}

export default ShowcaseSection