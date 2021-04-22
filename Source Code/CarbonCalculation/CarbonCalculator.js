"use strict"
import CarbonFactors from "./CarbonFactors.json"

class CarbonCalculation{

    /**
     * constructor 
     * @param {Number} num_of_people 
     */
    constructor(num_of_people){
        //check params
        if(typeof num_of_people != 'number') throw "num_of_people has to be number";

        this.num_of_people = num_of_people;
        this.total_co2 = 0;
        this.#findElectricityShare();
    }

    /**
     * find electricity share
     */
    #findElectricityShare(){
        let eco_keys = CarbonFactors["ElectricitySource"].keys();
        
        // find total
        this.elec_total = 0;
        eco_keys.forEach(function(ele){
            this.elec_total += CarbonFactors.ElectricitySource[ele];
        });

        // find  percentage
        this.elec_percentage = new Object();
        eco_keys.forEach(function(ele){
            this.elec_percentage[ele] = CarbonFactors.ElectricitySource[ele]/total;
        });
    }

    /**
     * generic finding total method
     * @param {Object} value_obj 
     * @param {String} subsection 
     */
    #findGenericTotal(value_obj, subsection_factor){
        let result = 0;
        let value_keys = this.value_obj.keys();
        value_keys.forEach(function(ele){
            result += value_obj[ele]*CarbonFactors[subsection_factor][ele];
        });

        this.total_co2 += result;
        return result;
    }

    /**
     * find total electricity
     * @param {Number} total_elec 
     */
    findTotalElec(total_elec){
        let result = 0;
        let elec_keys = this.elec_percentage.keys();
        elec_keys.forEach(function(ele){
            result += this.elec_percentage[ele]*total_elec*CarbonFactors.ElectricityFactor[ele];
        });

        this.total_co2 += result;
        return result;
    }

    /**
     * find total other home energy emission
     * @param {Object} value_obj 
     */
    findTotalOtherHomeEnergy(value_obj){
        return this.#findGenericTotal(value_obj, "OtherHomeEnergyFactor");
    }

    /**
     * find total travel emission
     * @param {Object} value_obj 
     */
    findTotalTravel(value_obj){
        return this.#findGenericTotal(value_obj, "TravelFactor");
    }

    /**
     * find total food emission
     * @param {Object} value_obj 
     */
    findTotalFood(value_obj){
        return this.#findGenericTotal(value_obj, "FoodFactor");
    }

    /**
     * find total consumer goods emission
     * @param {Object} value_obj 
     */
    findTotalConsumerGoods(value_obj){
        return this.#findGenericTotal(value_obj, "ConsumerGoodsFactor");
    }

    /**
     * find total services emission
     * @param {Object} value_obj 
     */
    findTotalServices(value_obj){
        return this.#findGenericTotal(value_obj, "ServicesFactor");
    }

    /**
     * find total waste emission
     * @param {Object} value_obj 
     */
    findTotalWaste(value_obj){
        return this.#findGenericTotal(value_obj, "WasteFactor");
    }

    /**
     * find total emission
     */
    findTotal(){
        return this.total_co2;
    }
}

export default CarbonCalculation;