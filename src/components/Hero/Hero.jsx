import './Hero.css'
import youtube from '../../img/youtube.png'
import vidbutton from '../../img/youtube-play-button.png'
function Hero(){
  return(
     <section className='hero'>
      <div className="container">
        <div className="wrapper">
        <div className="hero__info">
          <h2 className='hero__title'>Biznesingizni keyingi bosqichga <br />olib chiqing</h2>
          <div className="hero__discription">
          <p className='hero__text'>Nullam laoreet nec turpis et ultrices. Duis sit amet quam <br /> Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. <br /> Vivamus mattis eros at sem pulvinar</p>
          </div>
          <a className='hero__a' href="#">Xizmatlar bilan tanishish</a>
        </div>
        <div className="hero__img">
            <img className='youtube' src={youtube} alt=""></img>


        </div>
        </div>


      </div>
     </section>
  )
}
export default Hero