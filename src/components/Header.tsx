import Nav from './Nav';
import './Header.css';
import brandLogo from '../img/LOGO.svg';

function Header() {
    return (
      <div className="Header">
        <img src={brandLogo} className="brandLogo" />
        <Nav ascendingOrder={ false } />
      </div>
    );}
  
  export default Header;
  