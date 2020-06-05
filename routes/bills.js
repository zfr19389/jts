let express = require('express');
let router = express.Router();

const Bill = require('../model/billSchema');

router.get('/totalBills', (req, res, next) => {
    let today = new Date(req.query.date);
    let startDate = new Date(today.getFullYear(), 3, 1);
    let endDate = new Date(today.getFullYear(), 3, 1);
    if(today.getMonth() < 3) {
        startDate.setYear(startDate.getFullYear() - 1);
    } else {
        endDate.setYear(endDate.getFullYear() + 1);
    }
    Bill.count({
        billDate: {$gte: new Date(startDate), $lt: new Date(endDate)}
        },(err, count) => {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.get('/allBills', (req, res, next) => {
    Bill.find((err, bills) => {
        if(err) {
            res.json(err);
        } else {
            res.json(bills);
        }
    });
});

router.get('/bill', (req, res, next) => {
    Bill.find({billNo: req.query.billNo, LRNos: parseInt(req.query.LRNo)}, (err, bill) => {
        if(err) {
            res.json(err);
        } else {
            res.json(bill);
        }
    });
});

router.put('/update', (req, res, next) => {
    Bill.find({billNo: {$in: req.body.billNos}}, (err, results) => {
        if(err) {
            res.send(err);
        } else {
            results.forEach((result) => {
                req.body.billDetails.forEach((billDetail) => {
                    if(result.billNo === billDetail.billNo && result.billYear === billDetail.billYear && billDetail.totalAmount === result.totalAmount) {
                        Bill.update({_id: result.id},{
                            $set: {
                                balanceAmount: billDetail.balanceAmount,
                                waivedOff: billDetail.waivedOff
                            }}, (err, result) => {
                                if(err) {
                                    //console.log(err);
                                } else {
                                    //console.log(result);
                                }

                        })
                    }
                })
            });
            res.json("Updated succesfully");
        }
    });
});

router.get('/unpaidBill', (req, res, next) => {
    Bill.find(
        {partyName: req.query.name, balanceAmount: {$ne : 0}},{ billNo: 1, billYear: 1,balanceAmount: 1, totalAmount:1, waivedOff:1, _id:0 },
        (err, bills) => {
            if(err) {
                res.json(err);
            } else {
                res.json(bills);
            }
        });
});

router.get('/unpaidBillFullDetails', (req, res, next) => {
    Bill.find(
        {balanceAmount: {$ne : 0}},{ _id:0 , LRNos:0 , billYear:0, advanceAmount:0, waivedOff:0, __v:0},
        (err, bills) => {
            if(err) {
                res.json(err);
            } else {
                res.json(bills);
            }
        });
});

router.post('/bills', (req, res, next) => {
    let newList = new Bill({
        billYear: req.body.billYear,
        billDate: req.body.billDate,
        billNo: req.body.billNo,
        totalAmount: req.body.totalAmount,
        advanceAmount: req.body.advanceAmount,
        balanceAmount: req.body.balanceAmount,
        waivedOff: req.body.waivedOff,
        partyName: req.body.partyName,
        LRNos: req.body.LRNos
    });
    newList.save((err, item) => {
        if(err) {
            res.json(err);
        } else {
            res.json({msg: "Item added successfully"});
        }
    });
});

router.delete('/entry', (req, res, next) => {
    Entry.remove({billNo: req.query.billNo}, (err, result) =>{
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;