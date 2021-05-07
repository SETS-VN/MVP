import AboutEmissions from './subcomponents/about-emissions'
import UserRole from './subcomponents/user-role'
import SetsRole from './subcomponents/sets-role'

// basically the content for the entire /about-sets page
// composed of subcomponents
export default function AboutSets(){
    return (
        <div>
            <AboutEmissions/>
            <UserRole/>
            <SetsRole/>
        </div>
    )
}