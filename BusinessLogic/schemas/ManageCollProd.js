const db = require("../../Database/conn")
const connection = db.connection()
const {Schema} = require("mongoose")

const ManageCollProd = new Schema({
        _id: { type: Number, required: true,},
        name: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /[a-zA-Z]$/.test(v);
                },
                message: props => `${props.value} is not a valid name of product!`
            },
            required: [true, 'Name of Product is required']


        },
        author: {
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
        

    },
    { collection: 'infoProd' },
    
    );

module.exports = connection.model('infoProd', ManageCollProd);
    

