
exports.up = function(knex, Promise) {
    return knex.schema.createTable("bills", bills => {
        bills.increments()
        bills.integer("user_id")
        bills.string("type")
        bills.float("amount")
        bills.date("due_date")
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("bills")
}
