
exports.up = function(knex) {
    return knex.schema.createTable("shows", (table) => {
      table.increments("show_id").primary();
      table.string("show_name");
      table.string("show_description");
      table.string("show_img_url");
      table.string("show_type");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("shows");
  };
  