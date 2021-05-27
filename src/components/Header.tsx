import Nav from './Nav';
import './Header.css';
import brandLogo from '../brandLogo.svg';

function Header() {
    return (
      <div className="Header">
        <img src={brandLogo} className="brandLogo" />
        <Nav ascendingOrder={ false } />
      </div>
    );}
  
  export default Header;
  