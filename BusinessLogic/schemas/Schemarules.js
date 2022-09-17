const Server = require("../../Database/conn")
const mongoose = require('mongoose');
const { Schema } = mongoose;
class Shemas extends Server {
    #conn
    constructor() {
        super();
        this.ManageCollProd();
        this.ManageCollProfit();
        this.ManageCollTech();
    }
    async ManageCollTech() {
        this.#conn = await this.connection()
        const Tech = new Schema({
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

        const TechSchema = this.#conn.model('Tech', Tech);
        return TechSchema
    }

    async ManageCollProd() {
        this.#conn = await this.connection()
        const infoProd = new Schema({
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

        const infoProdSchema = this.#conn.model('infoProd', infoProd);
        return infoProdSchema
    }

    async ManageCollProfit() {
        this.#conn = await this.connection()
        const ProfitColl = new Schema({
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
          
          
          );

        const ProfitSchema = this.#conn.model('ProfitColl', ProfitColl);
        return ProfitSchema
    }

};

new Shemas();
