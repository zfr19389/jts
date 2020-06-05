const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    LRNo: {
        type:Number,
        required: true
    },
    date : {
        type: Date,
        required: true
    },area: {
        type:String,
        required: true
    },item: {
        type:String,
        required: true
    },weight: {
        type:Number,
        required: true
    },rate: {
        type:Number,
        required: true
    },amount: {
        type:Number,
        required: true
    },billNo: {
        type:Number,
        required: true
    },billGenerated: {
        type:Boolean,
        required: true
    },
    paymentDetails: {
        type:Object,
        required: true
    }
});

const Entry = module.exports = mongoose.model("Entry", entrySchema);