import 'react';
import { FaBusAlt, FaCar, FaGasPump, FaMotorcycle, FaMusic, FaPhotoVideo, FaTaxi, FaWineBottle } from 'react-icons/fa';
import { GiAirplaneArrival, GiBeachBucket, GiBroccoli, GiChemicalTank, GiCoalWagon, GiCottonFlower, GiElectric, GiEmptyMetalBucket, GiFriedEggs, GiFruiting, GiGrain, GiHouse, GiMailbox, GiMeat, GiMedicines, GiMilkCarton, GiPaperBomb, GiPlantsAndAnimals, GiStoneBlock, GiWaterRecycling, GiWoodBeam, GiWoodenChair } from 'react-icons/gi';
import { IoMdTrain } from 'react-icons/io';
import {MdLocalLaundryService, MdComputer} from 'react-icons/md'
import {WiSmoke} from 'react-icons/wi'
// Holds the data of every item to consider, and the values to calculate their output in fossil, cropland, ...
// Even has the icon
class CarbonItemsData {
    constructor(id, category, name, icon, measurement, carbonFactor, outsideFactor){
            this.id = id;
            this.category = category;
            this.name = name;
            this.icon = icon;
            this.measurement = measurement;
            this.carbonFactor = carbonFactor;
            this.outsideFactor = outsideFactor;

            this.value = 0;
        }
}

// For certain items where a type is needed to generate the output (such as business vs first-class
// in airplanes), we add this to modify the "outside factor"
class CarbonItemsExtraTypes {
    constructor(id, associatedID, category, type, name, valueList){
        this.id = id;
        this.associatedID = associatedID;
        this.category = category;
        this.type = type;
        this.name = name;
        this.calcValue = valueList[0].value;
        this.valueList = valueList;
    }
}


// For certain items where an extra input is needed (such as "age of house"),
// we use this to modify the "outside factor" of the object with associated ID
class CarbonItemsExtraInput{
    constructor(id, associatedID, category, type, name, defaultValue){
        this.id = id;
        this.associatedID = associatedID;
        this.category = category;
        this.type = type;
        this.name = name;
        this.value = defaultValue;
        this.defaultValue = defaultValue;
    }
}

// export data to render in React 
const Items = [
    new CarbonItemsData(1, "food", "Grains", <GiGrain size = {40}/> ,"kg"),
    new CarbonItemsData(2, "food", "Vegetables",<GiBroccoli size = {40}/> ,"kg"),
    new CarbonItemsData(3, "food", "Fruits", <GiFruiting size = {40}/>,"kg"),
    new CarbonItemsData(4, "food", "Eggs", <GiFriedEggs size = {40}/>,"kg"),
    new CarbonItemsData(5, "food", "Dairy", <GiMilkCarton size = {40}/>, "kg"),
    new CarbonItemsData(6, "food", "Meat", <GiMeat size = {40}/>, "kg"),

    new CarbonItemsData(7, "housing-energy", "Electricity", <GiElectric size = {40}/> ,"kWh"),
    new CarbonItemsData(8, "housing-energy", "Gas (heating)", <WiSmoke size = {40}/>,"kg"),
    new CarbonItemsData(9, "housing-energy", "Oil (kerosene)", <FaWineBottle size = {40}/>,"liters"),
    new CarbonItemsData(10, "housing-energy", "Oil (gasoil)", <FaGasPump size = {40}/>,"liters"),
    new CarbonItemsData(11, "housing-energy", "Oil (HFO)", <FaGasPump size = {40}/>,"liters"),
    new CarbonItemsData(12, "housing-energy", "GAS (propane/butane)", <GiChemicalTank size = {40}/>,"liters"),
    new CarbonItemsData(13, "housing-energy", "Coal", <GiCoalWagon size = {40}/>, "kg"),
    new CarbonItemsData(14, "housing-energy", "Peat", <GiStoneBlock size = {40}/>, "kg"),
    new CarbonItemsData(15, "housing-energy", "Wood", <GiWoodBeam size = {40}/>, "kg"),

    new CarbonItemsData(16, "transportation", "Bus", <FaBusAlt size = {40}/>,"km"),
    new CarbonItemsData(17, "transportation", "Train", <IoMdTrain size = {40}/>,"km"),
    new CarbonItemsData(18, "transportation", "Car (driver)", <FaCar size = {40}/>, "km"),
    new CarbonItemsData(19, "transportation", "Car (passenger)", <FaTaxi size = {40}/>, "km"),
    new CarbonItemsData(20, "transportation", "Motorcycle", <FaMotorcycle size = {40}/>, "km"),
    new CarbonItemsData(21, "transportation", "Air travel", <GiAirplaneArrival size = {40}/>, "km"),
    new CarbonItemsData(22, "transportation", "", null, "flights"), 
    
    new CarbonItemsData(23, "goods", "Clothing, shoes, accessories", <GiCottonFlower size = {40}/>, "kg"),
    new CarbonItemsData(24, "goods", "Furniture (wooden)",<GiWoodenChair size = {40}/>, "kg"),
    new CarbonItemsData(25, "goods", "Furniture (metal/ mixed)", <GiEmptyMetalBucket size = {40}/>, "kg"),
    new CarbonItemsData(26, "goods", "Appliances", <MdLocalLaundryService size = {40}/>, "kg"),
    new CarbonItemsData(27, "goods", "Electronics", <MdComputer size = {40}/>, "kg"),
    new CarbonItemsData(28, "goods", "Toys and other plastics", <FaPhotoVideo size = {40}/>, "kg"),

    new CarbonItemsData(29, "services", "Healthcare", <GiMedicines size = {40}/>,"VND"),
    new CarbonItemsData(30, "services", "Home repair and maintanence", <GiHouse size = {40}/>, "VND"),
    new CarbonItemsData(31, "services", "Entertainment and Education", <FaMusic size = {40}/>, "VND"),
    new CarbonItemsData(32, "services", "Other services", <GiMailbox size = {40}/>, "VND"),

    new CarbonItemsData(33, "waste", "Waste water",<GiWaterRecycling size = {40}/>, "kg"),
    new CarbonItemsData(34, "waste", "Organic waste", <GiPlantsAndAnimals size = {40}/>, "kg"),
    new CarbonItemsData(35, "waste", "Recycled paper, plastic, glass", <GiPaperBomb size = {40}/>, "kg"),
    new CarbonItemsData(36, "waste", "Non-recycle waste", <GiBeachBucket size = {40}/>, "kg"),
]

export default Items;