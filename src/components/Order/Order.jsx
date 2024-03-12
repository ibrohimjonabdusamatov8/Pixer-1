import './Order.css'
import img1 from '../../img/Screenshot_2024-01-21_180816-removebg-preview.png'
import img2 from '../../img/Screenshot_2024-01-21_180915-removebg-preview.png'
import img3 from '../../img/Screenshot_2024-01-21_180944-removebg-preview.png'
import img4 from '../../img/Screenshot_2024-01-21_181053-removebg-preview.png'
import img5 from '../../img/Screenshot_2024-01-21_181123-removebg-preview.png'
function Order(){
  return(

      <section className='order'>
        <div className="container">
             <h1 className="order_title">Biz qanday ishlaymiz?</h1>
             <div className="order_info">
              <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
             </div>
                 <div className="step_1">
                      <img className='man1' src={img1}alt="" />
                      <div className="step1_info">
                        <h2 className='step1__title'>Talablarni aniqlab chiqamiz</h2>
                        <p className='title_bottom1'>Nullam laoreet nec turpis et ultrices. Duis sit amet quamarsu. <br /> Nam facilisis</p>
                      </div>

                 </div>
                 <div className="step_2">
                      <img className='man2' src={img2}alt="" />
                      <div className="step2_info">
                        <h2 className='step2__title'>Bir necha yechimlarni taklif qilamiz</h2>
                        <p className='title_bottom2'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                      </div>
                 </div>
                 <div className="step_3">
                      <img className='man3' src={img3}alt="" />
                      <div className="step2_info">
                        <h2 className='step2__title'>Loyiha uchun vaqt belgilaymiz</h2>
                        <p className='title_bottom2'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                      </div>
                 </div>
                 <div className="step_4">
                      <img className='man3' src={img4}alt="" />
                      <div className="step2_info">
                        <h2 className='step2__title'>A’lo sifat bilan bajarib topshiramiz </h2>
                        <p className='title_bottom2'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                      </div>
                 </div>
                 <div className="step_5">
                      <img className='man3' src={img5}alt="" />
                      <div className="step2_info">
                        <h2 className='step2__title'>Qo’llab-quvvatlab boramiz </h2>
                        <p className='title_bottom2'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis</p>
                      </div>
                 </div>
                 <div className="buyurtma">
                  <a className='btnx ' href="#">Buyurtma berish</a>
                 </div>
        </div>
      </section>
  )
  }

export default Order;