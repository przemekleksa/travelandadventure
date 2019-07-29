import React from 'react';
import logo from '../navbar/ROAM_white.png';
import twitter from './twitter.png';
import insta from './insta.png';
import './footer.scss';

const Footer = () => {
    return ( 
        <footer>
            <div className="main-footer">
                <div className="info">
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipi. Suspend isse ultrices hendrerit nunc vitae vel a sodales. Ac lectus vel risus suscipit venenatis.</p>
                    <p>
                        Strömgatan 18, Stockholm,<br />
                        Sweden(+46) 322.170.71<br />
                        ouroffice@example.com
                    </p>
                </div>
                <div className="links">
                    <h3>Links</h3>
                    <ul>
                        <li>
                            <a href="#">Creative styles of home</a>
                        </li>
                        <li>
                            <a href="#">Custom image title and creative</a>
                        </li>
                        <li>
                            <a href="#">Custom font style and contact</a>
                        </li>
                        <li>
                            <a href="#">Smooth parallax all around</a>
                        </li>
                        <li>
                            <a href="#">Crafted beautiful elements</a>
                        </li>
                    </ul>
                </div>
                <div className="twitter">
                    <h3>Twitter Feed</h3>
                        <div className="twit">
                            <div className="bird">
                                <img src={twitter} alt="twitter logo" />
                            </div>
                            <div className="text">
                                Discover true #WooCommerce elegance with Eola! https://t.co/TbrKHayxJ2 This #WordPress masterpiece is perfect for… https://t.co/lgZNiJgZMe
                            <div className="date">5 days ago</div>
                            </div>
                        </div>

                </div>
                <div className="instagram-gallery">
                <h3>Instagram Gallery</h3>
                    <img src={insta} alt="photos from instagram" />
                </div>
            </div>
            <div className="last-footer">
                Recreated by <a href="http://przemyslawleksa.herokuapp.com/">Przemek Leksa</a>
            </div>
            
        </footer>
     );
}
 
export default Footer;