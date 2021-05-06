import Container from 'react-bootstrap/Container'
import styles from './about-emissions.module.css'


export default function AboutEmissions(){
    return (
        <Container fluid>
            <br></br><br></br>
            <div className="row" id = "definition">
                <div className="col-lg-6 col-md-6 col-sm-12 ">
                    <h1 className="text-center">What is Emission Trading?<br></br></h1>
                    <p className={styles.content1}>
                    Emissions trading is a market-based approach to<br></br> 
                    control pollution by providing economic incentives for reducing<br></br>
                    the emissions.<br></br><br></br>
                    </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img width="500" height="350" src="/assets/pic2.png/" className="img-fluid"></img>
                </div>
            </div>
            <br></br><br></br>
            <div className="row" id = "importance">
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <img width="500" height="350" src="/assets/pic1.jpg/" className="img-fluid"></img>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mx-auto ">
                    <h1>Why is Emission Trading<br></br> important?<br></br></h1>
                    <p className={styles.content2}>
                    Climate change is the biggest negative economic externality that<br></br>human has ever faced in history. Emissions trading is a key part<br></br>of global efforts to reduce the man-made greenhouse gas<br></br>emissions that are causing climate change﻿, meeting the Paris<br></br>Agreement﻿ target of keeping temperature rise below 2°C.
                    <br></br><br></br>
                    Emission Trading Systems provide a mechanism to reduce<br></br>greenhouse gas (GHG) emissions in the most cost-effective and<br></br>economically-efficient manner. Climate change will only be<br></br>addressed if individuals, businesses and government<br></br>organizations all takes responsible steps to reduce our<br></br>CO2 emissions as much as possible and then trade the credits<br></br>you get, or offset the remaining unavoidable emissions.
                    <br></br><br></br>
                    SETS is a flexible market-based solution to perform<br></br>environmental commitments, allowing companies, organizations,<br></br>markets and individuals to meet policy targets. It also allows the<br></br>benefits of climate change policy decisions to be compared<br></br>against other possible environmental policies.
                    <br></br><br></br>
                    </p>
                </div>
                
            </div>
        </Container>
    )
}