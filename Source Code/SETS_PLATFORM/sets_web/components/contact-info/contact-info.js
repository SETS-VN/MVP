import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiFillStar, AiOutlineClockCircle} from 'react-icons/ai'
import {FaGlobe} from 'react-icons/fa'


import styles from "./contact-info.module.css"


export default function ContactInfo(){
    return(
        <div className = "container mx-auto w-75 pt-5 pb-5">
            <h1 className = "text-center mt-5">
                SETS contact details
            </h1>
            <hr className="mt-5 mb-5 w-25 bg-success"></hr>
            <Row className = "mt-5 mb-5">
                <Col className = "text-center mt-5 mb-5">
                    <div className = {styles.iconBackground}>
                        <AiFillStar className = {styles.customIcon} size={50}/>
                    </div>
                    <p>West lake</p>
                    <p>Hanoi, HN 10007, Vietnam</p>
                </Col>

                <Col className = "text-center mt-5 mb-5">
                    <div className = {styles.iconBackground}>
                        <FaGlobe className = {styles.customIcon} size={50}/>
                    </div>
                    <p>(1239) 222.444</p>
                    <p>example@example.org</p>
                </Col>

                <Col className = "text-center mt-5 mb-5">
                    <div className = {styles.iconBackground}>
                        <AiOutlineClockCircle className = {styles.customIcon} size={50}/>
                    </div>
                    <p>Mon-Fri: 8:00 - 16:00</p>
                    <p>Sat-Sun: Closed</p>
                </Col>
            </Row>
        </div>
    )
}