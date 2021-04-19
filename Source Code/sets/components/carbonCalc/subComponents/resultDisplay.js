import 'tailwindcss/tailwind.css'

export default function ResultDisplay(props){
    return(
        <div className = "flex flex-row p-2 m-2">
            <button onClick = {props.updateDisplay}>Calculate!</button>
            <p>Total emissions: {props.value}</p>
        </div>
    )
}