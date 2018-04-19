
exports.up = function(knex, Promise) {
    return knex.schema.createTable("customers", customers => {
        customers.increments()
        customers.string("name")
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("customers")
}
