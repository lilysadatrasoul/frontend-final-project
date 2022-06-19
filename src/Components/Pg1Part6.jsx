import React from 'react'
import image1 from '../assets/images/coworker1.jpg'
import image2 from '../assets/images/coworker2.jpg'
import image3 from '../assets/images/coworker3.jpg'
import image4 from '../assets/images/coworker4.jpg'
import image5 from '../assets/images/coworker5.jpg'
import image6 from '../assets/images/coworker6.jpg'
import image7 from '../assets/images/coworker7.jpg'
import CardP6 from './CardP6.jsx'


export default function Pg1Part6() {
   
        const data6 = [
            { image: image1 },
            { image: image2 },
            { image: image3 },
            { image: image4 },
            { image: image5 },  
            { image: image6 },
            { image: image7 },  
        
          ];
          return (
            <div className="container my-5 col-12">
              <div className="" dir='rtl'>
                <h3>همکاران ما</h3>
                <span>بهترین کادر آموزشی برای فرزندان شما</span>
                <div className='line mt-3 text-danger'> </div>
              </div>
              <div className="d-flex flex-wrap col-lg-12 justify-content-center ">
                {data6.map((item) => (
                  <CardP6
                  image={item.image} 
                  />
        
                ))}
              </div>
            </div>
            
          );
      
}
