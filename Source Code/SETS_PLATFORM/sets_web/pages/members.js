import Navibar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Members from '../components/members/members'
import ContactInfo from '../components/contact-info/contact-info'
import Contact from '../components/contact-form/contact-form'

export default function MembersPage() {
    return(
        <>
        <Navibar/>
        <Members/>
        <ContactInfo/>
        <Contact/>
        <Footer/>
        </>
    )
}