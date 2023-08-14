import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./NavBar";


// USE STATE TO RENDER
export default function HomePage() {
    return (

        <Container >
            <Row >
                <NavBar />
            </Row>
            <Row>
                <Col>
                    dksjfld
                </Col>
                <Col xs={10}>
                    dksjfld
                </Col>
            </Row>
        </Container>
    );
}