import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


export default function ContactForm() {
    return (
        <div className="w-full bg-light pt-5 pb-5">
            <div className="container mx-auto w-75">
                <h1 className="text-center mt-5 ">
                    Get in touch
                </h1>
                <hr className="mt-3 mb-5 w-25 bg-success"></hr>
                <Form>
                    <Row>
                        <Form.Group as={Col} controlId="formName">
                            <Form.Label>Name (required) </Form.Label>
                            <Form.Control type="email" placeholder="Enter your name" required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formEmail" >
                            <Form.Label>Email address (required)</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formPhoneNumber">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} controlId="formSubject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Row>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>

                    <Button variant="success" type="submit" className="mb-5 px-4 py-2 text-center">
                        Send
                </Button>
                </Form>
            </div>
        </div>
    )
}
