
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'; // Assuming you have a Footer.css for styling

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: orchidstore@example.com</p>
            <p>Phone: 0123 456 789</p>
          </Col>
          <Col md={4}>
            <h5>Payment</h5>
            <a href="https://usa.visa.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://logowik.com/content/uploads/images/visa-new-20215093.jpg" alt="Visa" style={{marginRight: 8}} />
            </a>
            <a href="https://www.momo.vn/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="Momo" style={{marginRight: 8}} />
            </a><br /> 
            <a href="#payment-info">More info</a>
          </Col>
          <Col md={4}>
            <h5>Social Network</h5>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/500px-Facebook_logo_%28square%29.png" alt="Facebook" style={{marginRight: 8}} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" style={{marginRight: 8}} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740" alt="Twitter" style={{marginRight: 8}} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;