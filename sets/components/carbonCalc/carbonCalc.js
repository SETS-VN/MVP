import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import ItemDisplay from './subComponents/ItemDisplay'
import ExtraChoiceDisplay from './subComponents/extraChoiceDisplay'
import Items from './subComponents/itemInfo'
import ResultDisplay from './subComponents/resultDisplay'
import ExtraInputDisplay from './subComponents/extraInputDisplay'

export default function CarbonCalc() {
    const [sum, setSum] = useState(0);
    const [items, setItems] = useState(Items);

    function changeOutsideValue(id, val) {
        items[id-1].outsideFactor = val;
    }

    function changeValue(id, val){
        items[id-1].value = val;
    }

    function updateDisplay(){
        let reCountingSum = 0;
        items.forEach(item => {
            if (item.category != "typing" && item.category != "input"){
                reCountingSum += item.value * item.fossilConversion * item.outsideFactor;
                reCountingSum += item.value * item.forestConversion * item.outsideFactor;
                reCountingSum += item.value * item.croplandConversion * item.outsideFactor;
                reCountingSum += item.value * item.pastureConversion * item.outsideFactor;
                reCountingSum += item.value * item.fisheriesConversion * item.outsideFactor;
                reCountingSum += item.value * item.fisheriesConversion * item.outsideFactor;
            }
        });
        setSum(reCountingSum);
    }

    const carbonItemList = [];
    items.forEach((item) => {
        if (item.category === "typing") {
            carbonItemList.push(
                <ExtraChoiceDisplay 
                key = {item.id}
                associatedID = {item.associatedID}
                valueList = {item.valueList} 
                name = {item.name}
                changeOutsideFactor = {changeOutsideValue}
                />
            )
        } else if (item.category === "input"){
            carbonItemList.push(
                <ExtraInputDisplay 
                key = {item.id}
                associatedID = {item.associatedID}
                name = {item.name}
                changeOutsideFactor = {changeOutsideValue}
                />
            )
        } else {
            carbonItemList.push(
                <ItemDisplay
                key = {item.id}
                id = {item.id}
                name = {item.name}
                icon = {item.icon}
                measurement = {item.measurement}
                changeValue = {changeValue}
                />
            )
        }
    });

    return (
        <>
            {carbonItemList}
            <br></br>
            <ResultDisplay updateDisplay = {updateDisplay} value = {sum}/>
        </>
    )
}