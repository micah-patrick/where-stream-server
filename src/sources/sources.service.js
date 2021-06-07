const knex = require('../db/connection');


async function list(){
    return knex("sources")
        .select("*");
}

module.exports = {
    list,
}