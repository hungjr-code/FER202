import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-4">
      <div className="container">
        <div className="row text-center text-md-left">
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading company providing the best services for our customers. 
              Contact us for more information.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Payment</h5>
            <a href="https://www.visa.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" width="40" style={{marginRight: '10px'}} />
            </a>
            <a href="https://www.mastercard.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width="40" style={{marginRight: '10px'}} />
            </a>
            <a href="https://www.paypal.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width="40" />
            </a>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" width="32" style={{marginRight: '10px'}} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/250px-X_logo_2023.svg.png" alt="Twitter" width="32" style={{marginRight: '10px'}} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="32" />
            </a>
          </div>
        </div>
        <div className="text-center p-3 border-top mt-3">
          © 2023 Copyright: Hung Hoang
        </div>
      </div>
    </footer>
  )
}