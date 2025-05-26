import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import orchid from "../../ListofOrchids";


function Home() {
    return (
        <Container className="my-4">
            <Row>
                {orchid.map((item) => (
                    <Col md={3} sm={6} xs={12} className="mb-4" key={item.Id}>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={item.image} style={{ height: "180px", objectFit: "cover" }} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    Origin: {item.origin}<br />
                                    Category: {item.category}
                                </Card.Text>
                                <Button variant="primary">See detail</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;