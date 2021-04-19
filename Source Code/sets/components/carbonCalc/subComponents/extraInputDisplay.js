import 'tailwindcss/tailwind.css'

export default function ExtraInputDisplay(props){
    function handleChange(event) {
        props.changeOutsideFactor(props.associatedID, event.target.value);
        event.preventDefault();
    }

    return (
        <div className = "flex flex-row p-2 m-2">
            {props.name}: <input type = "text" value = {props.defaultValue} onChange = {handleChange}/>
        </div>
    )
}