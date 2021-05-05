import Navibar from '../components/navbar/navbar'
import ContactForm from '../components/contact-form/contact-form'
import ContactInfo from '../components/contact-info/contact-info'
import Footer from '../components/footer/footer'

export default function ContactPage(){
    return(
        <div>
            <Navibar/>
            <ContactInfo/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}