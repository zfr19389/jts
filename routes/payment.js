let express = require('express');
let router = express.Router();

const Payment = require('../model/paymentSchema');

router.get('/payments', (req, res, next) => {
    Payment.find({name: req.query.name},{paymentDetails: 1, _id: 0},(err, items) => {
        if(err) {
            res.json(err);
        } else if(items[0]){
            res.json(items[0].paymentDetails);
        } else {
            res.json(false);
        }
    });
});

router.get('/allPayments', (req, res, next) => {
    Payment.find({
        paymentDetails: {
            $elemMatch: {date: { $gte: new Date(req.query.startDate), $lt: new Date(req.query.endDate)}}
        }
    },(err, items) => {
        if(err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

router.get('/advance', (req, res, next) => {
    Payment.find({name: req.query.name},{advanceAmount: 1, _id: 0},(err, advanceAmount) => {
        if(err) {
            res.json(err);
        }  else {
            res.json(advanceAmount);
        }
    });
});

router.put('/updateAdvance', (req, res, next) => {
    Payment.update({name: req.body.name},
        {$set: {advanceAmount : req.body.advanceAmount}},(err, result) => {
        if(err) {
            res.json(err);
        }  else {
            res.json(result);
        }
    });
});

/*router.post('/payments', (req, res, next) => {
    let newList = new Payment({
        name: req.body.name,
        paymentDetails: req.body.paymentDetails,
        totalAmount: req.body.totalAmount,
        balanceAmount: req.body.balanceAmount,
        waivedOff: req.body.waivedOff
    });
    newList.save((err, item) => {
        if(err) {
            res.json(err);
        } else {
            res.json({msg: "Item added successfully"});
        }
    });
});*/

/*router.put('/payments', (req, res) => {
    Payment.update(
        { name: req.body.name },
        { $inc: { totalAmount: req.body.totalAmount, balanceAmount: req.body.totalAmount } },
        {upsert: true}, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})*/

router.put('/addPayments', (req, res, next) => {
    Payment.update(
        {name: req.body.name},
        { $push: { paymentDetails: {
                date: req.body.paymentDetails.date,
                mode: req.body.paymentDetails.mode,
                amount: req.body.paymentDetails.amount,
                chequeNumber: req.body.paymentDetails.chequeNumber || "NA",
                bankName: req.body.paymentDetails.bankName || "NA" } },
         $inc: {advanceAmount : req.body.advanceAmount || 0}},
        {upsert: true}, (err, result) => {
        if(err) {
            res.send(err);
        } else {
            res.json("Updated Successfully");
        }
    });
});

/*router.delete('/payments/:id', (req, res, next) => {
    Payment.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});*/

module.exports = router;