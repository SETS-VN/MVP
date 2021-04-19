import 'react';
import {GiFruiting, GiSlicedBread, GiNoodles, GiCorn, GiCoffeeBeans, GiMilkCarton,
    GiIceCreamCone, GiFriedEggs, GiPig, GiChickenOven, GiCow, GiFishCooked, GiPowderBag, GiButter,
    GiBeerBottle, GiCoffeeMug, GiFlowers, GiHouse, GiCoalWagon, GiAirplaneArrival,
    GiCottonFlower, GiWool, GiGlowingHands, GiWoodenChair, GiEmptyMetalBucket, GiPapers,
    GiCarWheel,GiMetalPlate, GiLeatherBoot, GiGlassShot, GiCigarette, GiVacuumCleaner, GiMailbox, 
    GiPaperBomb,GiMetalDisc,GiCheeseWedge, GiWoodBeam, GiWoodenFence, GiElectric, GiKitchenKnives,
    GiMedicines, GiBeachBucket} from 'react-icons/gi'
import {FaBlender, FaBeer, FaWineBottle, FaBusAlt, FaCar, FaTaxi, FaMotorcycle, FaPhotoVideo, FaHotel, 
    FaTrash, FaPhone, FaMusic, FaBookReader} from 'react-icons/fa'
import {IoMdTrain, IoMdRestaurant} from 'react-icons/io'
import {WiSmoke} from 'react-icons/wi'
import {MdLocalLaundryService, MdComputer} from 'react-icons/md'

// Holds the data of every item to consider, and the values to calculate their output in fossil, cropland, ...
// Even has the icon
class CarbonItemsData {
    constructor(id, category, name, icon, measurement, fossilConversion, croplandConversion, pastureConversion,
        forestConversion, builtUpLandConversion, fisheriesConversion, outsideFactor){
            this.id = id;
            this.category = category;
            this.name = name;
            this.icon = icon;
            this.measurement = measurement;
            this.fossilConversion = fossilConversion;
            this.croplandConversion = croplandConversion;
            this.pastureConversion = pastureConversion;
            this.forestConversion = forestConversion;
            this.builtUpLandConversion = builtUpLandConversion;
            this.fisheriesConversion = fisheriesConversion;
            this.outsideFactor = outsideFactor;

            this.value = 0;
        }
}

// For certain items where a type is needed to generate the output (such as business vs first-class
// in airplanes), we add this to modify the "outside factor"
class CarbonItemsExtraTypes {
    constructor(id, associatedID, category, name, valueList){
        this.id = id;
        this.associatedID = associatedID;
        this.category = category;
        this.name = name;
        this.valueList = valueList;
    }
}


// For certain items where an extra input is needed (such as "age of house"),
// we use this to modify the "outside factor" of the object with associated ID
class CarbonItemsExtraInput{
    constructor(id, associatedID, category, name,  defaultValue){
        this.id = id;
        this.associatedID = associatedID;
        this.category = category;
        this.name = name;
        this.defaultValue = defaultValue;
    }
}

// export data to render in React 
const Items = [
    new CarbonItemsData(1, "food", "Veggies, potatoes, fruit", <GiFruiting/> ,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(2, "food", "Bread and bakery products",<GiSlicedBread/> ,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(3, "food", "Flour, rice, noodles, cereal products", <GiNoodles/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(4, "food", "Maize", <GiCorn/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(5, "food", "Beans and other dried pulses", <GiCoffeeBeans/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(6, "food", "Milk, cream, yogurt, sour cream", <GiMilkCarton/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(7, "food", "Ice cream, other frozen dairy", <GiIceCreamCone/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(8, "food", "Cheese, butter", <GiCheeseWedge/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(9, "food", "Eggs",<GiFriedEggs/>, "number", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(10, "food", "Pork", <GiPig/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(11, "food", "Chicken, turkey", <GiChickenOven/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(12, "food", "Beef", <GiCow/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(13, "food", "Fish", "kg",  <GiFishCooked/>,1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(14, "food", "Sugar", "kg", <GiPowderBag/>, 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(15, "food", "Vegetable oil (seed or olive oil)", <GiBeerBottle/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(16, "food", "Margarine",<GiButter/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(17, "food", "Coffee and tea", <GiCoffeeMug/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(18, "food", "Juice and wine", <FaBlender/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(19, "food", "Beer", <FaBeer/>, "liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(20, "food", "Garden", <GiFlowers/>, "square meters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(21, "food", "Eating out", <IoMdRestaurant/>,"VND", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(22, "housing", "House or Apartment", <GiHouse/> ,"square meters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsExtraInput(23, 22, "input", "Age of residence", 1),
    new CarbonItemsData(24, "housing", "Construction wood", <GiWoodBeam/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(25, "housing", "Yard", <GiWoodenFence/> , "square meters", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(26, "enery", "Electricity", <GiElectric/> ,"kWh", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(27, "enery", "Natural gas", <WiSmoke/>,"therms", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(28, "enery", "Firewood", <GiWoodBeam/>,"liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(29, "enery", "Fuel oil, kerosene", <FaWineBottle/>,"liters", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(30, "enery", "Coal", <GiCoalWagon/>, "kg", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(31, "transit", "Bus", <FaBusAlt/>,"km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(32, "transit", "Train", <IoMdTrain/>,"km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(33, "transit", "Car", <FaCar/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(34, "transit", "Taxi/ Grab/ others", <FaTaxi/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(35, "transit", "Motorcycle", <FaMotorcycle/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(36, "transit", "Airplane", <GiAirplaneArrival/>, "km", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsExtraTypes(37, 36, "typing", "Airplane Type", 
    [{name: "economy", value: 1}, {name:"business", value:2}, {name: "first-class", value: 3}]),
    

    new CarbonItemsData(38, "goods", "Cotton", <GiCottonFlower/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(39, "goods", "Wool", <GiWool/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(40, "goods", "Synthetic", <GiGlowingHands/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(41, "goods", "Furniture (wooden)",<GiWoodenChair/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(42, "goods", "Furniture (plastic/ metal)", <GiEmptyMetalBucket/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(43, "goods", "Major appliances", <MdLocalLaundryService/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(44, "goods", "Electronic equipment", <MdComputer/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(45, "goods", "Small appliances", <GiKitchenKnives/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(46, "goods", "Durable paper products", <GiPapers/>,"kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(47, "goods", "Car parts for repair", <GiCarWheel/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(48, "goods", "Metal items", <GiMetalPlate/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(49, "goods", "Leather", <GiLeatherBoot/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(50, "goods", "Plastic products and photos", <FaPhotoVideo/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(51, "goods", "Porcelain, glass", <GiGlassShot/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(52, "goods", "Medicine", <GiMedicines/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(53, "goods", "Hygiene products, cleaning stuff", <GiVacuumCleaner/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(54, "goods", "Cigarettes, tobacco products", <GiCigarette/>, "kg", 1, 1, 1, 1, 1, 1, 1),


    new CarbonItemsData(55, "services", "International postal services",<GiMailbox/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(56, "services", "Domestic local services", <GiMailbox/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(57, "services", "Hotels, motels", <FaHotel/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(58, "services", "Water, sewer, garbage service",<FaTrash/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(59, "services", "Dry cleaning and laundry service", <MdLocalLaundryService/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(60, "services", "Telephone", <FaPhone/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(61, "services", "Medical insurance services", <GiMedicines/>,"VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(62, "services", "Household insurance", <GiHouse/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(63, "services", "Entertainment", <FaMusic/>, "VND", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(64, "services", "Education", <FaBookReader/>, "VND", 1, 1, 1, 1, 1, 1, 1),

    new CarbonItemsData(65, "waste", "Paper and household waste",<GiPaperBomb/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(66, "waste", "Aluminum waste", <GiMetalDisc/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(67, "waste", "Other metals", <GiMetalPlate/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(68, "waste", "Glass", <GiGlassShot/>, "kg", 1, 1, 1, 1, 1, 1, 1),
    new CarbonItemsData(69, "waste", "Plastics",<GiBeachBucket/>, "kg", 1, 1, 1, 1, 1, 1, 1),
]

export default Items;

