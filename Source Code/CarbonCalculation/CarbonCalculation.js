"use strict";
//holyshit, I can import directly from json file. Holyshit.
import factors from "./Factors.json"

class CarbonCalculation{

    /** 
     * constructor
     * @param {String} metric
     * @param {Number} num_of_people
     */
    constructor(metric, num_of_people){

        //check variable
        if(typeof metric != "string" || (metric != "us" && metric != "m")){
            throw "Damn, man, metric format is wrong. It has to be string and be either \"us\" or \"m\" \n";
        }

        if(typeof num_of_people != "number"){
            throw "Man, num_of_people has to be number";
        }

        this.result_size = 6;
        this.metric = metric;
        this.num_of_people = num_of_people;
    }

    #checkParam(val, month){
        if(val.isArray() === false){
            throw "you have to pass array into this method";
        }

        if(typeof month != "boolean"){
            throw "month param has to be boolean";
        }
    }

    #convertToYear(val){
        for(var i=0;i<val.length;i++){
            val[i] = val*12;
        }

        return val;
    }

    //WARNING: val has to passed - by - value object (Immutable)(Copy)
    /**
      * calculateFoodTotal()
      * @param {Array} val
      * @param {Boolean} month
      * @param {String} food_status
      * @returns {Array}
      */
    calculateFoodTotal(val = new Array(21).fill(0), month = false, food_status = "a"){
        //check type
        this.#checkParam(val, month);

        //convert val to year if month = true
        if(month) val = this.#convertToYear(val);

        //calculate result
        let result = new Array(this.result_size).fill(0);
        
        //find Fossil Energy total
        let coff = [10, 25, 20, 20, 10, 10, 20, 65, 1.25, 100, 80, 130, 150, 15, 24, 30, 65, 25, 25, 0, 8];
        let metric_coff = new Array(val.length).fill(1);
        if(this.metric === "us"){
            metric_coff = [0.454,0.454,0.454,0.454,0.454,0.473,0.473,0.454,1,0.454,0.454,0.454,0.454,0.454,0.473,0.454,0.454,0.473,0.473,0,1];
        }
        let food_value = 1.2;
        switch(food_status){
            case "b":
                food_value = 1;
                break;
            case "c":
                food_value = 0.8;
                break;
            case "d":
                food_value = 0.5;
                break;
            case "e":
                food_value = 0.1;
                break;
            default:
                food_value = 0;
        }
        let guestimate = new Array(val.length).fill(food_value);

        for(let i=0;i<val.length;i++){
            result[0] += val[i]*coff[i]*metric_coff[i]*guestimate[i]*factors["Constants and Conversion Factors"]["Pre-purchase food loss"]*factors["Constants and Conversion Factors"]["oil absorption"]*factors["Equivalence and Yield Factors & Footprint"]["Fossil Energy"];
        }

        //find Cropland total
        //find Pasture total
        //find Fisheries total

        return result;
    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateHousingTotal(val){
        //check type
        this.#checkParam(val, month);

        //convert val to year if month = true
        if(month) val = this.#convertToYear(val);
    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateTransportationTotal(val){
        //check type
        this.#checkParam(val, month);

        //convert val to year if month = true
        if(month) val = this.#convertToYear(val);
    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateGoodsTotal(val){
        //check type
        this.#checkParam(val, month);

        //convert val to year if month = true
        if(month) val = this.#convertToYear(val);
    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateServicesTotal(val){
        //check type
        this.#checkParam(val, month);

        //convert val to year if month = true
        if(month) val = this.#convertToYear(val);
    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateWasteTotal(val){
        //check type
        this.#checkParam(val, month);

        //convert val to year if month = true
        if(month) val = this.#convertToYear(val);
    }

    //optionally required calculateWasteTotal(), calculateServicesTotal(), calculateGoodsTotal(), calculateTransportationTotal(), calculateHousingTotal(), calculateFoodTotal()
    //input as two - dimensional array with row of size 6 and col of size 6
    //returned as array of double of size 7
    calculateEcoFootprintPerMem(val){

    }

    //required calculateEcoFootprintPerMem()
    //returned as double
    calculateEcoFootprintResult(){

    }
}

let temp = new CarbonCalculation('m', 5);

export default CarbonCalculation;