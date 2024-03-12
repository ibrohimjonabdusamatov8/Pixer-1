import './Foter__topp.css'

function Footer__topp (){
  return(
    <section className='footer_top'>
          <div className="container">
              <div className="footertop_wrapper">
                <h2 className='footertop_title'>Buyurtma berish</h2>
                <p className='footertop_text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
                <div className="inp_box">
                  <input type="name" placeholder='Ismingiz' className="inp" /><input type="number" placeholder='Telefon raqamingiz' className="inp" /><input type="text" placeholder='Xizmat turi' className="inp" />
                  <button className='inp_btn'>Buyurtma berish</button>
                </div>
              </div>
          </div>
    </section>
  )
}
export default Footer__topp