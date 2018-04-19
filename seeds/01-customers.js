
exports.seed = function(knex, Promise) {
  return knex("customers").del()
    .then(function () {
      return knex("customers").insert([
        {id: 1, name: "David"},
        {id: 2, name: "Abby"},
        {id: 3, name: "Joe"}
      ])
    })
}
