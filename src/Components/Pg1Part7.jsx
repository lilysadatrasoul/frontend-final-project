import React from 'react'
import img1 from "../assets/images/part7-1.jpg"
import img2 from "../assets/images/part7-2.jpg"
import img3 from "../assets/images/part7-3.jpg"
import img4 from "../assets/images/part7-4.jpg"
import CardP7 from "./CardP7.jsx"

export default function Pg1Part7() {
  const data7 = [
    {
      id: "1",
      image: img1,
      title: "آکادمی ها",
      describe: "زن و شوهر از دانشجویان دانشگاه هپی فارغ التحصیل شد",
      date:23  ,
    },
    {
      id: "2",
      image: img2,
      title: "دولت",
      describe: " نکات مفید برای ایجاد یک بحث با کیفیت ",
      date:23  ,
    },
    {
      id: "3",
      image: img3,
      title: "آکادمی ها",
      describe: "بازتاب فصل فجر",
      date:23 ,
    },
    {
      id: "4",
      image: img4,
      title: "طراحی",     
      describe: " شگفت انگیز است که دوستی هایی را که توسعه می یابند ببینند ",
      date: 23 ,
    },
  ];

  return (
    <div dir='rtl'>
      <div className=" cardP4 pb-5">
        <div className="container text-light pt-5 pb-2 ">
          <h1>آخرین دوره های آیلتس ایز</h1>
          <h3>چرا باید آیلتس ایز را انتخاب کنم؟</h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap ">
          {data7.map((item) => (
            <CardP7
              key={item.id}
              image={item.image}
              describe={item.describe}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
)
}
