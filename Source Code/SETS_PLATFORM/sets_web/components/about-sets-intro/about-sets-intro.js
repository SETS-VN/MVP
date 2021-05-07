import styles from './about-sets-intro.module.css'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'

// abouts sets section in default route /
// Mainly image + links to about-sets parts
export default function AboutSetsIntro() {
    return (
        <Row className = "mt-5 mb-5 pb-5">
            <Col>
                <Image
                    src="/assets/golden-sets-image.png"
                    className = "m-3"
                    width={550}
                    height={500}
                />
            </Col>
            <Col>
            <h1 className = "mt-5 mb-5 pb-5 pt-5">ABOUT SETS</h1>
            <div className = {styles.questions}>
                <div className = {styles.bullet}>• &nbsp; &nbsp;</div> 
                <Link href = "/about-sets">
                    <p className = {styles.questionContent}> What is emissions trading?</p>
                </Link>
            </div>

            <div className = {styles.questions}>
                <div className = {styles.bullet}>• &nbsp; &nbsp;</div> 
                <Link href = "/about-sets#importance">
                    <p className = {styles.questionContent}> Why is emissions trading important?</p>
                </Link>
            </div>
            <div className = {styles.questions}>
                <div className = {styles.bullet}>• &nbsp; &nbsp;</div> 
                <Link href = "/about-sets#user-role">
                    <p className = {styles.questionContent}> How can you be part of Global Emission Reduction mission?</p>
                </Link>
            </div>
            <div className = {styles.questions}>
                <div className = {styles.bullet}>• &nbsp; &nbsp;</div> 
                <Link href = "/about-sets#sets-role"> 
                    <p className = {styles.questionContent}> How SETS can help you reduce emissions</p>
                </Link>
            </div>
            </Col>
        </Row>
    )
}