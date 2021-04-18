"use strict";

class CarbonCalculation{

    constructor(metric, num_of_people){

        //check variable
        if(typeof metric != "string" || (metric != "us" && metric != "m")){
            throw "Damn, man, metric format is wrong. It has to be string and be either \"us\" or \"m\" \n";
        }

        if(typeof num_of_people != "number"){
            throw "Man, num_of_people has to be number";
        }

        this.metric = metric;
        this.num_of_people = num_of_people;
    }

    //get constant value from json file
    getConst(){

    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateFoodTotal(val){

    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateHousingTotal(val){

    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateTransportationTotal(val){

    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateGoodsTotal(val){

    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateServicesTotal(val){

    }

    //input as two - dimensional array with row of variable size and col of size 8
    //returned as array of double of size 7
    calculateWasteTotal(val){

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

export default CarbonCalculation;