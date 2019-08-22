const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
    category: {
        type: String,
        trim: true,
        index: {
            unique: true
        },
    },
    name: {
        type: String,
        trim: true,
        index: {
            unique: true
        }
    },
    quantity: {
        type: String,
        trim: true,
        index: {
            unique: true
        }
    },
    price: {
        type: String,
        trim: true,
        index: {
            unique: true
        }
    },
    img: {
        type: String
    },
    available: {
        type: Boolean
    }
});

module.exports = mongoose.model("Rental", RentalSchema)