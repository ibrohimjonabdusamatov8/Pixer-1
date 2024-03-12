import './Footer.css'
import telegram from '../../img/telegram.svg'
import instagram from '../../img/instagram.svg'
import facebook from '../../img/facebook.svg'

function Footer(){
  return(
  <div className="footer">
      <div className="container">
          <div className="footer_wrapper">
            <div className="footer_box">
              <h2 className='footer_title'>Copyright 2020</h2>
              <p className='footer_text'>Nullam laoreet nec turpis et ultrices.  Duis <br /> sit amet quam arcu. Nam facilisis lacinia <br /> ex, eget sollicitudin massa pellentesque in. <br /> Vivamus mattis eros at sem pulvinar <br /> tincidunt.</p>
            </div>
            <div className="footar_boxx">
              <h2 className="footer_title">Sayt sahifalari</h2>
              <ul className='footer_list'>
                <li className='footer_item'><a href="#" className='footer_text'>Bosh sahifa</a></li>
                <li className='footer_item'><a href="#" className='footer_text'>Xizmatlar</a></li>
                <li className='footer_item'><a href="#" className='footer_text'>Portfolio</a></li>
                <li className='footer_item'><a href="#" className='footer_text'>Jamoa</a></li>
                <li className='footer_item'><a href="#" className='footer_text'>Blog</a></li>
                <li className='footer_item'><a href="#" className='footer_text'>Kontaktlar</a></li>
              </ul>
            <a href="#" className='footer_text'></a>
            </div>
            <div className="footer_box">
            <h2 className='footer_title'>Biz internetda</h2>
               <div className='telegram'>
                <img src={telegram} alt="" />
                <a className='footer_textt' href="#">Telegram</a>
               </div>
               <div className='facebook'>
               <img src={instagram} alt="" />
                <a className='footer_textt' href="#">Facebook</a>
               </div>

               <div className='instagram'>
               <img src={facebook} alt="" />
                <a className='footer_textt' href="#">Instagram</a>
               </div>
            </div>
          </div>
      </div>
  </div>

  )
}
export default Footer