import './Working.css'
import img1 from '../../img/website-illustration.png'
import img2 from '../../img/bot-illustration.png'
import img3 from '../../img/smm-illustration.png'
import img4 from '../../img/design-illustration.png'
import img5 from '../../img/crm-illustration.png'
function Working(){
  return(
    <section className='Working'>
      <div className="container">
        <div className="working__title">
        <h2 className='working__name'>Xizmatlar</h2>
          <p className='working__text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
        </div>
              <div className="wrapper2">
                <div className='box'> <img className="box__img" src={img1} alt=""  />
                <h2>Vebsayt tuzish</h2>
                 <p>Lorem ipsum</p>
                </div>
                <div className='box'> <img className='box__img' src={img2} alt=""  />
                <h2>Telegram bot</h2>
                 <p>Lorem ipsum</p>
                </div>
                <div className='box'> <img className='box__img' src={img3} alt="" />
                <h2>SMM</h2>
                 <p>Lorem ipsum</p>
                </div>
                <div className='box__bottom'><img className='box__img' src={img4} alt=""  />
                <h2>Grafik dizayn</h2>
                 <p>Lorem ipsum</p>
                </div>
                <div className='box__bottom'><img className='box__img' src={img5} alt=""  />
                <h2>CRM tizimlar</h2>
                 <p>Lorem ipsum</p>
                </div>

              </div>
              <div className="btn__box">
                  <a className='btn1' href="#">Buyurtma berish</a>
                  <a className='btn2' href="#">Xizmatlar sahifasiga o’tish</a>


                </div>
        </div>




    </section>
  )
}
export default Working