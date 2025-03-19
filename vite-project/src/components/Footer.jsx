import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3">
            <h5>Get to Know Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-light text-decoration-none">About Amazon</Link></li>
              <li><Link to="/careers" className="text-light text-decoration-none">Careers</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none">Amazon Blog</Link></li>
            </ul>
          </div>

          {/* Connect with Us */}
          <div className="col-md-3">
            <h5>Connect with Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/Amazon" className="text-light text-decoration-none">Facebook</a></li>
              <li><a href="https://twitter.com/Amazon" className="text-light text-decoration-none">Twitter</a></li>
              <li><a href="https://www.instagram.com/amazon" className="text-light text-decoration-none">Instagram</a></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div className="col-md-3">
            <h5>Make Money with Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/sell" className="text-light text-decoration-none">Sell on Amazon</Link></li>
              <li><Link to="/affiliate" className="text-light text-decoration-none">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="text-light text-decoration-none">Advertise Your Products</Link></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-md-3">
            <h5>Let Us Help You</h5>
            <ul className="list-unstyled">
              <li><Link to="/account" className="text-light text-decoration-none">Your Account</Link></li>
              <li><Link to="/orders" className="text-light text-decoration-none">Your Orders</Link></li>
              <li><Link to="/help" className="text-light text-decoration-none">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
