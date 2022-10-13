const assert = require("assert")
const profit = require("../BusinessLogic/controller/helpers/ControllerBusiness")


describe("Suite of Profit Test",async()=>{
      
    it.only("Should return true if return data",async ()=>{
        const result = await profit.Read()
        console.log(result)
        assert.deepEqual(result,true)
        
    })
})