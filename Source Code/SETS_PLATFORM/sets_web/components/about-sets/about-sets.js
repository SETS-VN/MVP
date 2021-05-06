import AboutEmissions from './subcomponents/about-emissions'
import UserRole from './subcomponents/user-role'
import SetsRole from './subcomponents/sets-role'

export default function AboutSets(){
    return (
        <div>
            <AboutEmissions/>
            <UserRole/>
            <SetsRole/>
        </div>
    )
}