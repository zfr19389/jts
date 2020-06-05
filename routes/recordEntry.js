let express = require('express');
let router = express.Router();

const Entry = require('../model/entrySchema');

router.get('/partyNames', (req, res, next) => {

    Entry.distinct('name',
        (err, names) => {
            if(err){
                res.json(err);
            } else {
                res.json(names);
            }
        });
});

router.get('/generatedBill', (req, res, next) => {
    req.query.LRNos = req.query.LRNos.split(',');
    Entry.find({LRNo: {$in: req.query.LRNos}, billNo: req.query.billNo, billGenerated: true},
        (err, entries) => {
            if(err){
                res.json(err);
            } else {
                res.json(entries);
            }
        });
});

router.get('/entries', (req, res, next) => {

    if(req.query.lrno) {
        getPartyName(req.query.lrno,  (name) => {
            getEntries(req, res, name);
        });
    } else {
        getEntries(req, res);
    }
});

router.get('/nonGeneratedEntries', (req, res, next) => {

    let endDate = new Date(req.query.endDate);
    endDate = endDate.setDate(endDate.getDate() + 1);
    // endDate.setHours(18,30,0,0);
    let startDate = new Date(req.query.startDate);
    /* startDate.setDate(startDate.getDate() - 1);
    startDate.setHours(18,30,0,0); */
    /* console.log(startDate);
    console.log(endDate); */
    Entry.find({name: req.query.name,
        date: {$gte: new Date(startDate), $lt: new Date(endDate)},
        billGenerated: false},
    function (err, entries) {
        if (err) {
            res.json(err);
        } else {
            res.json(entries);
        }
    });
});

router.get('/nonGeneratedLRs', (req, res, next) => {
    Entry.find({billGenerated: false},
    function (err, entries) {
        if (err) {
            res.json(err);
        } else {
            res.json(entries);
        }
    });
});

router.get('/paidOnBooking', (req, res, next) => {

    Entry.find({
        date: {$gte: new Date(req.query.startDate), $lt: new Date(req.query.endDate)},
        billGenerated: true, billNo: -1},
    function (err, entries) {
        if (err) {
            res.json(err);
        } else {
            res.json(entries);
        }
    });
});

router.get('/nonGeneratedEntriesAmount', (req, res, next) => {

    Entry.find({name: req.query.name, billGenerated: false},{'amount': 1, '_id': 0},
    function (err, entries) {
        if (err) {
            res.json(err);
        } else {
            res.json(entries);
        }
    });
});

router.post('/entry', (req, res, next) => {
    req.body.paymentDetails.paymentDate = new Date(req.body.paymentDetails.paymentDate);
    let newList = new Entry({
        name: req.body.name,
        date: req.body.date,
        LRNo: req.body.LRNo,
        area: req.body.area,
        rate: req.body.rate,
        item: req.body.item,
        weight: req.body.weight,
        amount: req.body.amount,
        billNo: req.body.billNo,
        billGenerated: req.body.billGenerated,
        paymentDetails: req.body.paymentDetails
    });
    newList.save((err, item) => {
        if(err) {
            res.json(err);
        } else {
            res.json({msg: "Item added successfully"});
        }
    });
});

router.put('/entry', (req, res, next) => {
    req.body.entry.paymentDetails.paymentDate = new Date(req.body.entry.paymentDetails.paymentDate);
    Entry.findOneAndUpdate({_id: req.body.id}, {
        $set: {
            name: req.body.entry.name,
            date: req.body.entry.date,
            LRNo: req.body.entry.LRNo,
            area: req.body.entry.area,
            rate: req.body.entry.rate,
            item: req.body.entry.item,
            weight: req.body.entry.weight,
            amount: req.body.entry.amount,
            billNo: req.body.entry.billNo,
            billGenerated: req.body.entry.billGenerated,
            paymentDetails: req.body.entry.paymentDetails
        }
    }, function(err, result) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.json("Updated Successfully");
        }
    });
});

router.put('/updateBillNo', (req, res, next) => {
    Entry.update({name: req.body.name, LRNo: {$in: req.body.LRNos},billGenerated: false}, {
        $set: {
            billNo: req.body.billNo,
            billGenerated: true
        }},
        { multi: true }, function(err, result) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.json("Updated Successfully");
        }
    });
});

router.delete('/entry', (req, res, next) => {
    Entry.remove({_id: req.query.id}, (err, result) =>{
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.get('/entry', (req, res, next) => {
    Entry.find({_id: req.query.id}, (err, entry) => {
        if(err){
            res.json(err);
        } else {
            res.json(entry);
        }
    });
});

router.get('/totalEntries', (req, res, next) => {
    Entry.count((err, count) => {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.get('/dailyReport', (req, res, next) => {
    let startDate = new Date(req.query.date);
    let endDate = new Date(req.query.endDate);
    startDate.setDate(startDate.getDate() - 1);
    endDate.setDate(endDate.getDate() - 1);
    startDate.setHours(18,30,0,0);
    endDate.setHours(18,30,0,0);
    Entry.find({date: {$gte: new Date(startDate), $lt: new Date(endDate)}},
        function (err, entries) {
            if (err) {
                res.json(err);
            } else {
                res.json(entries);
            }
        });
});

router.get('/dailyCashReport', (req, res, next) => {
    let startDate = new Date(req.query.date);
    let endDate = new Date(req.query.endDate);
    startDate.setDate(startDate.getDate() - 1);
    endDate.setDate(endDate.getDate() - 1);
    startDate.setHours(18,30,0,0);
    endDate.setHours(18,30,0,0);
    Entry.find({billNo: -1, "paymentDetails.paymentDate": {
        $gte: new Date(startDate), $lt: new Date(endDate)}},
        function (err, entries) {
            if (err) {
                res.json(err);
            } else {
                res.json(entries);
            }
        });
});

function getEntries(req, res, name = '') {
    name = name !== '' ? name : req.query.name;
    if(req.query.dateRangeOption === '1') {
        Entry.find({ name: name },
            function(err, entries){
                if(err){
                    res.json(err);
                } else {
                    res.json(entries);
                }
            });
    } else if (req.query.dateRangeOption === '2') {
        let today = new Date();
        today.setDate(today.getDate() - 1);
        today.setHours(18,30,0,0);
        Entry.find({name: name, date: {$gte:new Date(today)}},
            (err, entries) => {
                if (err) {
                    res.json(err);
                } else {
                    res.json(entries);
                }
            });
    } else {
        let endDate = new Date();        
        let y = endDate.getFullYear(), m = endDate.getMonth();
        let startDate = new Date(y,m,1).setHours(0,0,0,0);
        switch(req.query.dateRangeOption) {
            case '4' : {
                if(m === 0) startDate = new Date(y-1, 10, 30).setHours(18,30,0,0);
                else {
                    startDate = new Date(y, m-1, 1);
                    startDate.setDate(startDate.getDate() - 1);
                    startDate.setHours(18,30,0,0);
                }
                break;
            }
            case '5' : {
                startDate = new Date(parseInt(req.query.startDate));
                startDate.setDate(startDate.getDate() - 1);
                startDate.setHours(18,30,0,0);
                endDate = new Date(parseInt(req.query.endDate));
                endDate = endDate.setDate(endDate.getDate());
                endDate = new Date(endDate).setHours(18,30,0,0);
                break;
            }
        }
        Entry.find({name: name,
                date: {$gte: new Date(startDate), $lt: new Date(endDate)}},
            function (err, entries) {
                if (err) {
                    res.json(err);
                } else {
                    res.json(entries);
                }
            });
    }
}

function getPartyName(lrNo, callback) {
    lrNo = parseInt(lrNo);
    Entry.find({ LRNo: lrNo },
        function(err, entry){
            callback(entry[0].name);
        });
}

module.exports = router;