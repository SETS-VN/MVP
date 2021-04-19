import 'tailwindcss/tailwind.css'
import {FaTshirt} from 'react-icons/fa'

export default function ItemDisplay(props){

    function handleChange(event){
        props.changeValue(props.id, event.target.value);
        event.preventDefault();
    }

    return(
        <div className = "flex flex-row p-2 m-2">
            {props.icon}
            <p>{props.name}: </p>
            <input type="text" name = {props.name} onChange = {handleChange}/>
            <p> in {props.measurement} /year</p>
        </div>
    )
}