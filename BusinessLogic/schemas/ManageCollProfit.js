const db = require("../../Database/conn")
const connection = db.connection()
const {Schema}= require("mongoose")
const ManageCollProfit = new Schema({
        _id: { type: Number, required: true},
        name:  {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /[a-zA-Z]$/.test(v);
                },
                message: props => `${props.value} is not a valid name!`
            },
            required: [true, 'Name is required']


        },
        brand: {
            type: String,
            validate: {
                validator: function (v) {
                    return /[a-zA-Z]$/.test(v);
                },
                message: props => `${props.value} is not a valid brand!`
            },
            required: [true, 'Brand is required']


        },
        author: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /[a-zA-Z]$/.test(v);
                },
                message: props => `${props.value} is not a valid producer name!`
            },
            required: [true, 'Name of Producer is required']


        },
        price: {
            type: Number,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[0-9]{1,4}$/g.test(v);
                },
                message: props => `${props.value} is not a valid Price!`
            },
            required: [true, 'Price is required']


        },
        avaliable: {
            type:Boolean,
            required: true,
        },
        avaliable_qtd: {
            type: Number,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[0-9]{1,2}$/g.test(v);
                },
                message: props => `${props.value} is not a valid quantity!`
            },
            required: [true, 'Quantity is required']


        },
        profit: {
            type: Number,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[0-9]{1,2}$/g.test(v);
                },
                message: props => `${props.value} is not a valid profit!`
            },
            required: [true, 'Profit is required']


        },
       
      },
      { collection: 'ProfitColl' },
)
module.exports = connection.model('ProfitColl', ManageCollProfit);

