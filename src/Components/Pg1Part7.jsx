import React from 'react'
import img1 from "../assets/images/part7-1.jpg"

export default function Pg1Part7() {
  const data7 = [
    {
      id: "1",
      image: img1,
      title: "مکالمه انگلیسی (سطح مقدماتی)",
      teachImg: img,
      teacher: "علی کیانپور",
      oldPrice: "600",
      newPrice: "400",
      time: "12:03:15",
    },
    {
      id: "2",
      image: img2,
      title: "آموزش آزمون زبان",
      teachImg: img,
      teacher: "امید",
      oldPrice: "600",
      newPrice: "400",
      time: "12:03:15",
    },
    {
      id: "3",
      image: img3,
      title: "آیلتس آکادمیک",
      teachImg: img,
      teacher: "سید محمد امین ساجدی",
      oldPrice: "600",
      newPrice: "400",
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
          {data7.map((item) => (
            <CardP7
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
