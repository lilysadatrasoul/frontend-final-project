import React from 'react'

export default function Footer() {
  return (
    <div className="footer ">
    <div className="d-flex  justify-content-evenly px-5 flex-wrap text-light " dir='rtl'>
      <div className="d-flex  flex-column  col-12 col-lg-3">
        <span className="p-3 fs-4  ">تماس با ما</span>
        <div>
          <span className=" fs-5">شهر زنجان</span>
          <div>
            <span>
              <i class="bi bi-geo-alt-fill ps-2"></i>
              <span className="">خیابان شهر داری ساختمان 7</span>
            </span>
          </div>
        </div>

        <div className="py-3">
          <span className="fs-5 text-light">شهر تهران</span>
          <div>
            <span>
              <i class="bi bi-geo-alt-fill ps-2 "></i>
              <span className="text-light">خیابان شهر داری ساختمان 7</span>
            </span>
          </div>
        </div>
        <div>
          <a className="text-success text-decoration-none"  href="#">
            123456789 (98+)
          </a>
        </div>
      </div>
     
      <div className="d-flex  flex-column  col-12 col-lg-3  ">
        <span className="p-3 fs-4 text-white"> 
        منابع مهم ما
        </span>
        <div className="d-flex flex-column ">
          <a className=" link-footer" href="#">
            میدان فروش کالا
          </a>
          <a className=" link-footer " href="#">
            مستندات
          </a>
          <a className=" link-footer" href="#">
            مشتریان
          </a>
          <a className="link-footer" href="#">
            فرصت های شغلی
          </a>
        </div>
      </div>
      <div className=" d-flex  flex-column  col-12 col-sm-12 col-lg-3" >
        <span className="p-3 fs-4 text-white">
            لینک های میانبر
        </span>
        <a className="link-footer" href="#">
          درباره ما
        </a>
        <a className="link-footer" href="#">
          خدمات ما
        </a>
        <a className="link-footer" href="#">
          دریافت نقل و قول
        </a>
        <a className="link-footer" href="#">
          محصولات
        </a>
      </div>
      <div className="d-flex  flex-column  col-12 col-sm-12 col-lg-3" >
        <span className="p-3 fs-4 text-white">خبرنامه</span>
        <p className="text-light">
          ثبت نام برای دریافت پیشنهادات ویژه،آموزش ، اخبار و به روز رسانی ها.
        </p>
        <div className="p-2 ">
          <input
            type="email"
            placeholder="ایمیل شما "
            className="rounded-pill email pe-4 "
          />
          <button className="btn-email rounded-circle me-2">
            <i class="bi bi-chevron-compact-left"></i>
          </button>
        </div>
        <div className="d-flex p-4 ">
          <a href="#" className="linksocial">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className=" linksocial">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="linksocial">
            <i className="fa fa-pinterest"></i>
          </a>
          <a href="#" className="linksocial">
            <i className="fa fa-linkedin bg-dark "></i>
          </a>
          <a href="#" className="linksocial">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="final-box">
      <div className="container d-flex">
        <div className=" col-6">
          <p className="text-light ps-5">IELTSEASE</p>
        </div>
        <div className=" col-6 d-flex">
        <p className="text-light pe-5"> طراح: لیلا سادات سادات رسول</p>
          <p className="text-light ">
            کلیه حقوق متعلق به آیلتس ایز است    
          </p>
          
        </div>
      </div>
    </div>
  </div>
  )
}
