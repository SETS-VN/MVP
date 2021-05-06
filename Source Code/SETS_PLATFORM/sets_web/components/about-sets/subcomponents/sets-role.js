import Container from 'react-bootstrap/Container'
import styles from './sets-role.module.css'
import Row from 'react-bootstrap/Row'

// Details SETS role in the about-sets page
export default function SetsRole(){
    return (
        <Container>
            <br id = "sets-role"></br>
            <br></br>
            <Row>
                <div className="col-md-12 text-md-center">
                <h1>How SETS can help you reduce Emission</h1>
                </div>

                <div className="d-flex mx-auto">
                    <p className={styles.nice}>
                        SETS offer high quality carbon trading/ offsetting solutions for you. Through our MRV screening<br></br>system, we carry out careful due diligence of projects and suppliers before any product is offered<br></br>to you.
                        <br></br><br></br>
                        All the highest standards for ITMOs, CERs, ERUs are applied in our Compliance market platform.<br></br>For the Voluntary market, we accept highly reputed Verified Carbon Standard (VCS), Gold Standard<br></br>VERs or the like, meeting the PAS 2060 guidance on carbon neutrality, therefore assuring your<br></br>carbon neutral claims.
                        <br></br><br></br>
                        Our carbon credits/ packages are fully traceable using blockchain technology. We keep detailed<br></br>records of all purchases online, along with a database of all offline sales.<br></br>
                        We also have a MRV (Monitoring, Reporting, Validating) system allowing carbon credits to be cross<br></br> referenced every single transaction.
                        <br></br><br></br>
                        Our AI recommender system will help you choose the most suitable product to meet your needs,<br></br> for a better world and a better you!
                    </p>
                </div>
            </Row>      
        </Container>
    )
}