import Container from 'react-bootstrap/Container'
import styles from './user-role.module.css'
import Row from 'react-bootstrap/Row'

export default function UserRole(){
    return (
        <Container>
            <Row>
                <div className="col-md-12 text-md-center">
                <h1 >How can you be part of global<br></br>Emission Reduction mission</h1>
                </div>

                <div className="d-flex mx-auto">
                    <p className={styles.nice}>
                        Being part of the global emission reduction efforts, you’re addressing global economic inequality<br></br>caused by climate change.
                        <br></br><br></br>
                        Trading and offsetting your unavoidable CO2 emissions is a practical and immediate way to take<br></br>ownership of your personal contribution to climate change.
                        <br></br><br></br>
                        You can help reduce emission by simple actions:
                        <br></br><br></br>
                        • 3R: Reduce, Reuse, Recycle at what you can.
                        <br></br><br></br>
                        + Reduce Home energy use
                        <br></br><br></br>
                        + Travel smartly in daily activities and vacation
                        <br></br><br></br>
                        + Food saving
                        <br></br><br></br>
                        + Waste management
                        <br></br><br></br>
                        Etc
                        <br></br><br></br>
                        • Trading/ Offseting your carbon footprint.
                    </p>
                </div>
            </Row>      
        </Container>
    )
}