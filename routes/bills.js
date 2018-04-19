const express = require("express")
const router = express.Router()
const knex = require("../databaseConnection")

const queries = require("../queries/billQueries")

router.get("/", (req, res) => {
    queries.getAllBills()
    .then(bills => {
        res.json({bills: bills})
    })
})

router.get("/:id", (req, res) => {
    queries.getBillById(req.params.id)
        .then(bills => {
            res.json({bills: bills})
        })
})

router.post("/", (req, res) => {
    queries.addBill(req.body)
    .then(bill => {
        res.json({posted: bill[0]})
    })
})


router.delete("/:id", (req, res) => {
    queries.deleteBill(req.params.id)
        .then(bill => {
            res.json({deleted: bill[0]})
        })
})

router.put("/:id", (req, res) => {
    queries.changeBill(req.params.id, req.body)
        .then(bill => {
            res.json({updated: bill[0]})
        })
})

module.exports = router