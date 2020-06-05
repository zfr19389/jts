const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    date: String,
    Diesel: Number,
    load: Number,
    Misc: Number
});

const Expense = module.exports = mongoose.model("Expense", expenseSchema);