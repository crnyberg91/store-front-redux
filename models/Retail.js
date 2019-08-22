const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RetailSchema = new Schema({
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
    }
});

module.exports = mongoose.model('Retail', RetailSchema);