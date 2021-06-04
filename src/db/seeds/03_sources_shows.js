exports.seed = function (knex) {
    return knex("sources_shows").insert([
        {
            source_id: "1",
            show_id: "1",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "1",
            show_id: "2",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "2",
            show_id: "2",
            full_series: false,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "2",
            show_id: "3",
            full_series: false,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "2",
            show_id: "1",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "3",
            show_id: "4",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "4",
            show_id: "5",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "1",
            show_id: "6",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "2",
            show_id: "4",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "3",
            show_id: "5",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "4",
            show_id: "6",
            full_series: false,
            show_url: "https://github.com/micah-patrick",
        },
        {
            source_id: "3",
            show_id: "1",
            full_series: true,
            show_url: "https://github.com/micah-patrick",
        },
    ]);
};