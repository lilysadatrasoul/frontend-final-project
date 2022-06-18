import React from 'react'
import ielts1 from "../assets/images/ielts1.jpg";
import ielts2 from "../assets/images/5.jpg";
import ielts3 from "../assets/images/6.jpg";




export default function Pg2Part2() {
    return (
        <div className='d-flex flex wrap my-5 mx-5' dir='rtl'>
            <div className='col-12 col-lg-8'>
                <div className='first-box'>
                    <div className="container d-flex flex-column border border-2 p-5" dir='rtl'>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                            کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                            .در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.           </p>
                        <div className="d-flex justify-content-center">
                            <img className="image mb-5 " src={ielts1} alt="#" />
                        </div>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. .در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
                            جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>

                </div>
                <div className='second-box  mt-5 '>
                    <div className='bg-secondary w-25 px-5  text-white'> مطالب مرتبط </div>
                    <div className='border border-2 container p-5' dir='rtl'>
                        <div className='d-flex flex-warp'>
                            <div>
                                <img className="image  m-3" src={ielts2} alt="#" />
                            </div>
                            <div>
                                <h5>عنوان  این خبر اینجا قرار میگیرد</h5>
                                <p>
                                .در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                 راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته 
                                 اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <span>25 خرداد     98</span>|
                                <a href="#">    ادامه خبر ..  </a>
                            </div>

                        </div>
                        <div className='d-flex flex-warp'>
                            <div>
                                <img className="image  m-3" src={ielts3} alt="#" />
                            </div>
                            <div>
                                <h5>عنوان  این خبر اینجا قرار میگیرد</h5>
                                <p>
                                .در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                                 راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته 
                                 اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                </p>
                                <span>25 خرداد     98</span>|
                                <a href="#">    ادامه خبر ..  </a>
                            </div>




                        </div>


                    </div>


                </div>

            </div>
            <div className='col-12 col-lg-4'>

            </div>

        </div>
    )
}
