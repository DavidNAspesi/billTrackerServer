const knex = require("../databaseConnection")

function getAllCustomers() {
   return knex("customers")
}

function getOneCustomer(id) {
   return knex("customers")
        .where("id", id)
        .first()
}

function addCustomer(body) {
    return knex("customers")
        .returning("*")
        .insert(body)
}

function deleteCustomer(id) {
    return knex("customers")
        .where("id", id)
        .del()
        .returning("*")
}

function changeCustomer(id, body) {
    return knex("customers")
        .where("id", id)
        .update(body)
        .returning("*")
}

module.exports = {
    getAllCustomers,
    getOneCustomer,
    addCustomer,
    deleteCustomer,
    changeCustomer
}