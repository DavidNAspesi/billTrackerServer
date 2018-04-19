const express = require("express")
const router = express.Router()
const knex = require("../databaseConnection")

const queries = require("../queries/customerQueries")

router.get("/", (req, res) => {
    queries.getAllCustomers()
    .then(customers => {
        res.json({customers: customers})
    })
})

router.get("/:id", (req, res) => {
    queries.getOneCustomer(req.params.id)
        .then(customer => {
            res.json(customer)
        })
})

router.post("/", (req, res) => {
    queries.addCustomer(req.body)
    .then(customer => {
        res.json({posted: customer[0]})
    })
})


router.delete("/:id", (req, res) => {
    queries.deleteCustomer(req.params.id)
        .then(customer => {
            res.json({deleted: customer[0]})
        })
})

router.put("/:id", (req, res) => {
    queries.changeCustomer(req.params.id, req.body)
        .then(customer => {
            res.json({updated: customer[0]})
        })
})

module.exports = router