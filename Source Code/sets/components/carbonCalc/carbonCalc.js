import { useState, useRef, useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import ItemDisplay from './subComponents/itemsDisplay/ItemDisplay'
import ExtraChoiceDisplay from './subComponents/itemsDisplay/extraChoiceDisplay'
import Items from './subComponents/itemInfo'
import ResultDisplay from './subComponents/resultDisplay'
import ExtraInputDisplay from './subComponents/itemsDisplay/extraInputDisplay'
import CategoryManager from './subComponents/categories/categoryManager'
import FoodDisplay from './subComponents/categories/food'
import HouseEnergyDisplay from './subComponents/categories/houseing-energy'
import EnergyDisplay from './subComponents/categories/energy'
import TransitDisplay from './subComponents/categories/transit'
import GoodsDisplay from './subComponents/categories/goods'
import ServicesDisplay from './subComponents/categories/services'
import WasteDisplay from './subComponents/categories/waste'

export default function CarbonCalc() {

    // item to scroll to once user clicks next category
    const pageStartRef = useRef(null);

    /**
     * Category management
     */
    const categories = ["food", "housing-energy", "transit", "goods", "services", "waste", "result"];
    const [category, setCategory] = useState(0);

    function nextCategory() {
        if (category < 6) {
            setCategory(category + 1);
        }
    }

    function previousCategory() {
        if (category > 0) {
            setCategory(category - 1);
        }
    }

    /**
     * Result management
     */
    const [sum, setSum] = useState(0);
    function updateResult() {
        let reCountingSum = 0;
        items.forEach(item => {
            if (item.category != "typing" && item.category != "input") {
                reCountingSum += item.value * item.fossilConversion * item.outsideFactor;
                reCountingSum += item.value * item.forestConversion * item.outsideFactor;
                reCountingSum += item.value * item.croplandConversion * item.outsideFactor;
                reCountingSum += item.value * item.pastureConversion * item.outsideFactor;
                reCountingSum += item.value * item.fisheriesConversion * item.outsideFactor;
                reCountingSum += item.value * item.fisheriesConversion * item.outsideFactor;
            }
        });
        setSum(reCountingSum);
        setCategory(category + 1)
    }

    /**
     * In-memory item management
     */
    const items = Items;
    function changeValue(id, val) {
        items[id - 1].value = val;
    }

    /**
     * Display management
     */
    const carbonItemList = {
        "food": [],
        "housing-energy": [],
        "transportation": [],
        "goods": [],
        "services": [],
        "waste": [],
    };

    items.forEach((item) => {
        carbonItemList[item.category].push(
            <ItemDisplay
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                measurement={item.measurement}
                value={item.value}
                changeValue={changeValue}
            />
        )
    });

    const Content = () => {
        if (categories[category] === "food") {
            return (
                <FoodDisplay
                    nextCategory={nextCategory}>
                    {carbonItemList["food"]}
                </FoodDisplay>
            )
        }
        else if (categories[category] === "housing-energy") {
            return (
                <HouseEnergyDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}>
                    {carbonItemList["housing-energy"]}
                </HouseEnergyDisplay>
            )
        }
        else if (categories[category] === "transit") {
            return (
                <TransitDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}>
                    {carbonItemList["transportation"]}
                </TransitDisplay>
            )
        }
        else if (categories[category] === "goods") {
            return (
                <GoodsDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}>
                    {carbonItemList["goods"]}
                </GoodsDisplay>
            )
        }
        else if (categories[category] === "services") {
            return (
                <ServicesDisplay
                    previousCategory={previousCategory}
                    nextCategory={nextCategory}>
                    {carbonItemList["services"]}
                </ServicesDisplay>
            )
        }
        else if (categories[category] === "waste") {
            return (
                <WasteDisplay
                    previousCategory={previousCategory}
                    nextCategory={updateResult}>
                    {carbonItemList["waste"]}
                </WasteDisplay>
            )
        }
        else { // should be the result
            return (
                <ResultDisplay
                    value={sum}
                    previousCategory={previousCategory} />
            )
        }
    }

    // scroll to top when change content
    useEffect(() => {
        pageStartRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }, [category]);

    return (
        <>
            <div ref={pageStartRef}></div>
            <Content />
        </>
    )
}