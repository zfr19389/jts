const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
        name: String,
        paymentDetails: [{
            date: Date,
            mode: String,
            amount: Number,
            chequeNumber: String,
            bankName: String
        }],
        advanceAmount: Number
});

const Payments = module.exports = mongoose.model("Payments", paymentSchema);