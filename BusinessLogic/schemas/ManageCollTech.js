const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = require("../../Database/conn")
const connection = db.connection()

const ManageCollTech =new Schema({
            _id: { type: Number, required: true, },
            name: {
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
                required: true,
                validate: {
                    validator: function (v) {
                        return /[a-zA-Z]$/.test(v);
                    },
                    message: props => `${props.value} is not a valid brand!`
                },
                required: [true, 'Brand is required']


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
            quantity: {
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

        },
        { collection: 'Tech' },
        );


module.exports = connection.model('Tech', ManageCollTech);

    





