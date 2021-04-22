import CategoryManager from './categoryManager'
import {GiHouse} from 'react-icons/gi';

export default function HouseEnergyDisplay(props){
    return (
        <CategoryManager
        icon = {<GiHouse size = {80}/>}
        iconColor = "text-blue-900"
        header = "Housing"
        previous = {true}
        previousCategory = {props.previousCategory}
        previousText = "Food Consumption"
        next = {true}
        nextCategory = {props.nextCategory}
        nextText = "Transportation"
        >
            {props.children}
        </CategoryManager>
    )    
}