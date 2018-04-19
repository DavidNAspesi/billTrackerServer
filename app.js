const express = require("express")
const app = express()
const knex = require("./databaseConnection")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

app.get("/", (req, res) => {
    knex("customers")
        .select()
        .then(customers => {
            res.json({customers: customers})
        })
})

app.use((request, response, next) => {
    response.status(404).send()
}).use((error, request, response, next) => {
    response.status(500).send(error.message)
})

module.exports = app