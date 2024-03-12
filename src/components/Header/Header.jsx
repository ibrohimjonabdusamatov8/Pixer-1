import './Header.css'
import pixer from '../../img/pixer-logo.svg'
function Header(){
  return(
    <body>
       <header className='header'>
      <div className="container">
        <nav className='nav'>
           <img className='logo' src={pixer} alt="" />
           <ul className='nav__list'>
              <li className='nav__item'><a href="#">Bosh sahifa</a></li>
              <li className='nav__item'><a href="#">Xizmatlar</a></li>
              <li className='nav__item'><a href="#">Portfolio</a></li>
              <li className='nav__item'><a href="#">Jamoa</a></li>
              <li className='nav__item'><a href="#">Blog</a></li>
              <li className='nav__item'><a href="#">Kontaktlar</a></li>
              <li className='nav__item'><a className='tell' href="#">+998 90 921 37 11</a></li>
           </ul>
        </nav>

      </div>
    </header>
    </body>

  )
}
export default Header