import styles from "./sets-packets-intro.module.css"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function SetsPacketsIntro() {
    return (
        <div className="pt-5 pb-5 bg-light text-center">
            <h1 className="pt-5 pb-2">Our packages</h1>
            <p className="text-muted p-3">Simple pricing. Great products</p>
            <Row className = "pb-5 pt-5">
                <Col>
                    <div className = {styles.cards}>
                        <h4 className = "pt-2 pb-5">5 tons</h4>
                        <h4 className = "text-success p-0 m-0">£100.00</h4>
                        <p className = "text-muted pb-5">/year</p>
                        <Button variant="outline-success w-50 ml-auto mr-auto">Click here</Button>{' '}
                    </div>
                </Col>
                <Col>
                    <div className = {styles.cards}>
                        <h4 className = "pt-2 pb-5">10 tons</h4>
                        <h4 className = "text-success p-0 m-0">£200.00</h4>
                        <p className = "text-muted pb-5">/year</p>
                        <Button variant="outline-success w-50 ml-auto mr-auto">Click here</Button>{' '}
                    </div>
                </Col>
                <Col>
                    <div className = {styles.cards}>
                        <h4 className = "pt-2 pb-5">20 tons</h4>
                        <h4 className = "text-success p-0 m-0">£400.00</h4>
                        <p className = "text-muted pb-5">/year</p>
                        <Button variant="outline-success w-50 ml-auto mr-auto">Click here</Button>{' '}
                    </div>
                </Col>
            </Row>  
        </div>
    )
}