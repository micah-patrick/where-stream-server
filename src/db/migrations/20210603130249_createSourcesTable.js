
exports.up = function(knex) {
  return knex.schema.createTable("sources", (table) => {
    table.increments("source_id").primary();
    table.string("source_name");
    table.string("source_url");
    table.string("source_img_url");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("sources");
};
