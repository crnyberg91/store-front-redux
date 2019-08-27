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
        img: 'boots.jpg'
    }
];

const RentalSeed = [
    {
        name: 'Burton Board',
        category: 'board',
        quantity: 3,
        price: 20,
        img: 'board.jpg',
        available: true
    }
];
