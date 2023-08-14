import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import setBodyColor from '../style/bodyColour'


function FormContainer() {

    return (
        < >
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form >
        </ >
    );
}

export default function LoginPage() {
    // setBodyColor({ color: "linear-gradient(to bottom right, rgba(255,225,2,21), rgba(255,225,252,21), rgba(255,225,2,21))" })
    // setBodyColor({ color: 'linear-gradient(135deg, #ffec61, #f321d7)' })
    return (
        <div class='content'>
            <div>
                <h2 style={{ fontStyle: 'poppin, sans-serif', fontSize: '4em' }}>name.</h2>
            </div>
            <div className='border pt-5 pb-5 pe-4 ps-4 rounded' style={{ marginTop: '100px', backgroundColor: 'white', width: '75%' }}>
                <FormContainer />
            </div>
            <div className='d-grid'>
                <Button variant='link'>Forgot Password?</Button>
                <Button variant='link '>Register</Button>
            </div>

        </div>

    );
}

