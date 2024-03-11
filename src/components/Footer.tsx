import Facebook from '../../images/icon_Facebook.svg';
import Instagram from '../../images/icon_Instagram.svg';
import Twitter from '../../images/icon_Twitter.svg';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_first">
          <h1 className="first_title">Axis Skateshop</h1>
          <p className="first_description">Don't worry. Keep Pushing</p>
        </div>
        <div className="footer_middle">
          <div className="help_section">
            <h4 className="help_title">Help Center</h4>
            <ul className="help_menu">
              <li className="help_list">About Us</li>
              <li className="help_list">Shopping Info</li>
              <li className="help_list">Contact Us</li>
              <li className="help_list">Return Policy</li>
              <li className="help_list">Payment Method</li>
            </ul>
          </div>
          <div className="product_section">
            <h4 className="product_title">Products</h4>
            <ul className="product_menu">
              <li className="menu_list">Skateboard</li>
              <li className="menu_list">Wheels</li>
              <li className="menu_list">Trucks</li>
              <li className="menu_list">Bearings</li>
              <li className="menu_list">T-Shirts</li>
              <li className="menu_list">Outfits</li>
              <li className="menu_list">Grip Tape</li>
              <li className="menu_list">Hardware</li>
            </ul>
          </div>
        </div>
        <div className="footer_last">
          <h4 className="social_title">Social Media</h4>
          <div className="social">
            <img src={Facebook} alt="Facebook Icon" className="social_icon" />
            <img src={Instagram} alt="Instagram Icon" className="social_icon" />
            <img src={Twitter} alt="Twitter Icon" className="social_icon" />
          </div>
          <h4 className="location_title">Location</h4>
          <p className="location_description">
            1006 San Vicente, Bilibiran, Binangonan, Rizal, Binangonan,
            Philippines
          </p>
        </div>
      </footer>
    </>
  );
}
