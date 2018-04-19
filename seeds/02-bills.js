
exports.seed = function(knex, Promise) {
  return knex("bills").del()
    .then(function () {
      return knex("bills").insert([{
        user_id: 1, 
        type: "rent",
        amount: 1000.00,
        due_date: "2018-05-01"
      },{
        user_id: 2, 
        type: "rent",
        amount: 1000.00,
        due_date: "2018-05-01"
      },{
        user_id: 2, 
        type: "electricity",
        amount: 25.00,
        due_date: "2018-04-25"
      },{
        user_id: 3, 
        type: "electricity",
        amount: 45.00,
        due_date: "2018-05-07"
      }])
    })
}
