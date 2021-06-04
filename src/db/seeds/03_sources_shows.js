exports.seed = function (knex) {
    return knex("sources_shows").insert([
        {
            source_id: "",
            show_id: "",
            full_series: true,
            show_url: "",
        }
    ]);
};