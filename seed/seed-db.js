const mongoose = require("mongoose");
const db = require("../models");
const Schema = mongoose.Schema;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/virtuviodb"
);

const retailSeed = [
    {
        name: 'some boots',
        category: 'feet',
        quantity: 5,
        price: 15,
        img: 'asdf'
    }
]
