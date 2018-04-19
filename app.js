const express = require("express")
const app = express()
const knex = require("./databaseConnection")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cors())

const customers = require("./routes/customers")
const bills = require("./routes/bills")
app.use("/customers", customers)
app.use("/bills", bills)

app.use((request, response, next) => {
    response.status(404).send()
}).use((error, request, response, next) => {
    response.status(500).send(error.message)
})

module.exports = app