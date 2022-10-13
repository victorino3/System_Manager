const profitColl = require("../../schemas/ManageCollProfit")
class ControllerBusiness {
    #ProfitSchema
    constructor(){
        this.#ProfitSchema = profitColl
    }
    async Read() {
        let dataProfit = await this.#ProfitSchema.find();
        let dataTest = dataProfit ? true : false
        return dataTest;
        
    }
}

module.exports = new ControllerBusiness();