import Logo from '../../images/main_AxisRacoon-removebg.png';
import Menu from '../../images/icon_Menu.svg';

export default function Header() {
  return (
    <>
      <header className="header">
        <img
          src={Logo}
          alt="Logo of Axis Skateshop 'The Raccoon'"
          className="logo"
        />
        <button className="menu_button">
          <img src={Menu} alt="Menu Button" className="menu_icon" />
        </button>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav_list">Home</li>
            <li className="nav_list">Product</li>
            <li className="nav_list">Gallery</li>
            <li className="nav_list">About</li>
            <li className="nav_list">Contact</li>
          </ul>
          <div className="nav_buttons">
            <button className="nav_login">Login</button>
            <button className="nav_register">Register</button>
          </div>
        </nav>
      </header>
    </>
  );
}
