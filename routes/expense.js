let express = require('express');
let router = express.Router();

const Expense = require('../model/expenseSchema');

router.get('/expense', (req, res, next) => {
    Expense.find({date: req.query.date},(err, expense) => {
        if(err) {
            res.json(err);
        } else {
            res.json(expense);
        }
    });
});

router.post('/addExpense', (req, res, next) => {
    let newList = new Expense({
        date: req.body.expense.date,
        Diesel: req.body.expense.Diesel,
        load: req.body.expense.load,
        Misc: req.body.expense.Misc
    });
    newList.save((err, item) => {
        if(err) {
            res.json(err);
        } else {
            res.json({msg: "Item added successfully"});
        }
    });
});

router.put('/updateExpense', (req, res, next) => {
    Expense.findOneAndUpdate({_id: req.body.id}, {
        $set: {
            date: req.body.expense.date,
            Diesel: req.body.expense.Diesel,
            load: req.body.expense.load,
            Misc: req.body.expense.Misc
        }
    }, function(err, result) {
        if(err) {
            res.status(500).json(err);
        } else {
            res.json("Updated Successfully");
        }
    });
});


module.exports = router;