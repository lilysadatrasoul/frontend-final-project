import React from 'react'
import CardP5 from './CardP5';

import ielts3 from '../assets/images/ielts3.jpg'
import ielts5 from '../assets/images/ielts5.jpg'

export default function Pg1Part5() {
  
    const data5= [
        {
            image: ielts5,
            number: "1",
            title: "حرفه ای شو",
            describe:
              "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
          },
          {
            image: ielts3,
            number: "2",
            title: "مهارت خودت رو بالا ببر",
            describe:
              "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
          },
          {
            image: ielts3,
            number: "3",
            title: "صرفه جویی در زمان",
            describe:
              "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
          },
        {
          image: ielts5,
          number: "4",
          title: "خود را بیازما",
          describe:
            "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ کاربرد دیگری ندارد. ",
        },
        
       
       
      ];
      return (
        <div dir='rtl' className='ps-5 cardP5bg'>
        <div className=" cardP5 pb-5 ">
          <div className="container text-dark pt-5 pb-2 ">
            <h1>آخرین دوره های آیلتس ایز</h1>
            <h3>چرا باید آیلتس ایز را انتخاب کنم؟</h3>
          </div>
          <div className="d-flex justify-content-center flex-wrap ">
            {data5.map((item) => (
              <CardP5
                image={item.image}
                number={item.number}
                title={item.title}
                describe={item.describe}

                
              />
            ))}
          </div>
        </div>
      </div>
      );
  
}
