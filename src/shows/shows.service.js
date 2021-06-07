const knex = require('../db/connection');


async function list(){
    return knex("shows")
        .select("*");
}

module.exports = {
    list,
}