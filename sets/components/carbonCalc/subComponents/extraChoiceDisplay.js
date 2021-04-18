import 'tailwindcss/tailwind.css'
import 'react';

export default function ExtraChoiceDisplay(props){
    const options = props.valueList;
    const selectOptionsDisplay = []
    options.forEach((item) => {
        selectOptionsDisplay.push(<option key = {item.value} value={item.value}>{item.name}</option>)
    })

    function handleChange(event) {
        props.changeOutsideFactor(props.associatedID, event.target.value);
        event.preventDefault();
    }

    return(
        <div className = "flex flex-row p-2 m-2">
            <label>{props.name}: </label>
            <select name = {props.name} onChange = {handleChange}>
                {selectOptionsDisplay}
            </select>
        </div>
    )
}