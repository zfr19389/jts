const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    billYear: {
        type: Number,
        required: true
    },
    billDate: {
        type: Date,
        required: true
    },
    billNo: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    advanceAmount: {
        type: Number,
        required: true
    },
    balanceAmount: {
        type: Number,
        required: true
    },
    waivedOff: {
        type: Number,
        required: true
    },
    partyName: {
        type: String,
        required: true
    },
    LRNos: {
        type: Array
    }
});

const Bills = module.exports = mongoose.model("Bills", billSchema);