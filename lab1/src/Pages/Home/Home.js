import Container  from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import orchid from "../../ListofOrchids";
import './Home.css'; 

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? "#ffc107" : "#e4e5e9", fontSize: "1.1em" }}>
        ★
      </span>
    );
  }
  return stars;
}


function Home() {
    return (
        <div className="home-page">
        <Container className="my-4">
            <Row>
                {orchid.map((item) => (
                    <Col md={3} sm={6} xs={12} className="mb-4" key={item.Id}>
                        <div className = "special-ribbon">
                            {item.isSpecial && (
                                <div className="ribbon">Special</div>
                            )}
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: "180px", objectFit: "cover" }} />
                            <Card.Body>
                                <Card.Title className="flower-name">{item.name}</Card.Title>
                                <div>{renderStars(item.rating)}</div>
                                <Card.Text>
                                    Origin: {item.origin}<br />
                                    Category: {item.category}<br />
                                    Color: {item.color}<br />
                                </Card.Text>
                                <Button variant="primary">See detail</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    );
}

export default Home;