const knex = require('../db/connection');
const reduceProperties = require('../utils/reduce-properties');

const reduceShows = reduceProperties("source_id", {
    show_id: ["shows", null, "show_id"],
    show_name: ["shows", null, "show_name"],
    show_description: ["shows", null, "show_description"],
    show_img_url: ["shows", null, "show_img_url"],
    show_type: ["shows", null, "show_type"],
    show_url: ["shows", null, "show_url"],
    full_series: ["shows", null, "full_series"],
})


async function list(){
    return knex("sources")
        .select("*");
}

async function read(source_id){
    return knex("sources as so")
    .join("sources_shows as ss", "so.source_id", "ss.source_id")
    .join("shows as sh", "ss.show_id", "sh.show_id")
    .select("*")
    .where({source_id})
    .first()
    .then((result) => reduceShows(result));
}

module.exports = {
    list,
    read,
}