exports.seed = function (knex) {
    return knex("shows").insert([
        {
            show_name: "",
            show_description: "",
            show_img_url: "",
            show_type: ""
        }
    ]);
};