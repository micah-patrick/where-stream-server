module.exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sources_shows")
    .del()
    .then(() => knex("shows").del())
    .then(() => knex("sources").del())
};
