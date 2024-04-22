import { Link } from 'react-router-dom';
import Logo from '../icons/Logo.svg';
import Instagram from '../icons/Instagram.svg';
import facebook from '../icons/facebook.svg';
import x from '../icons/x.svg';
import phone from '../icons/phone.svg';

const contacts = [
  { icon: 'faLocationDot', info: '678 Pisa Ave, Chicago, IL 60611' },
  { icon: 'faPhone', info: '(312) 593-2744' },
  { icon: 'faEnvelope', info: 'customer@littlelemon.com' }
];

const socials = [
  { icon: 'faFacebook', name: 'facebook' },
  { icon: 'faTwitter', name: 'twitter' },
  { icon: 'faInstagram', name: 'instagram' },
  { icon: 'faYoutube', name: 'youtube' }
];

const navLinks = [
  { name: 'home', path: '/' },
  { name: 'bookings', path: 'bookings' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <Link to="/">
          <img src={Logo} alt="Little Lemon" />
        </Link>
        <div>
          <div className="footer-title">contact us</div>
          <img src={Instagram} alt="Instagram Little Lemon" width={30} />
          <img src={facebook} alt="Instagram Little Lemon" width={30} />
          <img src={x} alt="Instagram Little Lemon" width={26} />
          <img src={phone} alt="Instagram Little Lemon" width={30} />
        </div>
        {/* <nav className="footer-title">
          <h4>Sitemap</h4>
          <ul>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </footer>
  );
};

export default Footer;
