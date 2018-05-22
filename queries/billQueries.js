const knex = require("../databaseConnection")

function getAllBills() {
   return knex("bills")
}

function getBillById(id) {
   return knex("bills")
        .where("user_id", id)
        .orderBy("due_date", "desc")
}

function addBill(body) {
    return knex("bills")
        .returning("*")
        .insert(body)
}

function deleteBill(id) {
    return knex("bills")
        .where("id", id)
        .del()
        .returning("*")
}

function changeBill(id, body) {
    return knex("bills")
        .where("id", id)
        .update(body)
        .returning("*")
}

module.exports = {
    getAllBills,
    getBillById,
    addBill,
    deleteBill,
    changeBill
}