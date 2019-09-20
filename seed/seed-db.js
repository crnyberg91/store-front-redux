const mongoose = require("mongoose");
const db = require("../models");
const Schema = mongoose.Schema;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/virtuviodb"
);

const retailSeed = [
    {
        name: 'Burton Snowboard Boots',
        category: 'footware',
        quantity: 5,
        price: 300,
        img: 'boots.jpg'
    },
    {
        name: 'Salamon Ski Boots',
        category: 'footware',
        quantity: 11,
        price: 450,
        img: 'boots.jpg'
    },
    {
        name: 'Thirtytwo Snowboard Boots',
        category: 'footware',
        quantity: 5,
        price: 240,
        img: 'boots.jpg'
    },
    {
        name: 'Burton Board',
        category: 'snowboard',
        quantity: 5,
        price: 500,
        img: 'board.jpg'
    },
    {
        name: 'Bataleon Board',
        category: 'snowboard',
        quantity: 4,
        price: 340,
        img: 'bataleon.jpg'
    }

];

const rentalSeed = [
    {
        name: 'Burton Board',
        category: 'board',
        quantity: 3,
        price: 20,
        img: 'board.jpg',
        available: true
    }
];


db.Retail
    .remove({})
    .then(() => db.Retail.collection.insertMany(retailSeed))
    .then(data => {
        console.log(data.result.n + " retail products inserted!");
        console.log("db.Retail data: " + data)
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Rental
    .remove({})
    .then(() => db.Rental.collection.insertMany(rentalSeed))
    .then(data => {
        console.log(data.result.n + " rental products inserted!");
        console.log("db.Rental data: " + data)
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

