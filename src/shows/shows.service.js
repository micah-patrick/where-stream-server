const knex = require('../db/connection');
const reduceProperties = require('../utils/reduce-properties');

const reduceSources = reduceProperties("show_id", {
    source_id: ["sources", null, "source_id"],
    source_img_url: ["sources", null, "source_img_url"],
    show_url: ["sources", null, "show_url"],
    full_series: ["sources", null, "full_series"],
})

async function list(){
    return knex("shows as sh")
        .join("sources_shows as ss", "sh.show_id", "ss.show_id")
        .join("sources as so", "ss.source_id", "so.source_id")
        .select("*")
        .then((result) => reduceSources(result));
}

module.exports = {
    list,
}