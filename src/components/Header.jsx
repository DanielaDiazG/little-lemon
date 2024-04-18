import hamburgerMenu from '../icons/hamburgerMenu.svg';
import Logo from '../icons/Logo.svg';
import Basket from '../icons/Basket.svg';

function Header() {
  return (
    <header
      style={{
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2px 8px'
      }}
    >
      <img src={hamburgerMenu} width={35} alt="menu" />
      <img src={Logo} alt="little lemon" />
      <img src={Basket} width={35} alt="terminar compra" />
    </header>
  );
}

export default Header;
