import React from 'react'
import CardP4 from './CardP4';
import img1 from '../assets/images/3.jpg'
import img2 from '../assets/images/2.jpg' 
import img3 from '../assets/images/3.jpg'
import img from '../assets/images/4.jpg'

export default function Pg1Part4() {
  
    const data4 = [
        {
          id: "1",
          image: img1,
          title: "مکالمه انگلیسی (سطح مقدماتی)",
          teachImg: img,
          teacher: "علی کیانپور",
          oldPrice: "18000",
          newPrice: "10800",
          time: "12:03:15",
        },
        {
          id: "2",
          image: img2,
          title: "آموزش آزمون زبان",
          teachImg: img,
          teacher: "امید",
          oldPrice: "39000",
          newPrice: "20500",
          time: "12:03:15",
        },
        {
          id: "3",
          image: img3,
          title: "آیلتس آکادمیک",
          teachImg: img,
          teacher: "سید محمد امین ساجدی",
          oldPrice: "35000",
          newPrice: "20000",
          time: "12:03:15",
        },
      ];
    
      return (
        <div dir='rtl'>
          <div className="body cardP4 pb-5">
            <div className="container text-light pt-5 pb-2 ">
              <h1>آخرین دوره های آیلتس ایز</h1>
              <h3>چرا باید آیلتس ایز را انتخاب کنم؟</h3>
            </div>
            <div className="d-flex justify-content-center flex-wrap ">
              {data4.map((item) => (
                <CardP4
                  key={item.id}
                  image={item.image}
                  teachImg={item.teachImg}
                  title={item.title}
                  teacher={item.teacher}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                  time={item.time}
                />
              ))}
            </div>
          </div>
        </div>
  )
}
