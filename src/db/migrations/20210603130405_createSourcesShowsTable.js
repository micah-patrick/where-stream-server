
exports.up = function(knex) {
    return knex.schema.createTable("sources_shows", (table) => {
      table.integer("source_id").unsigned().notNullable();
      table
        .foreign("source_id")
        .references("source_id")
        .inTable("sources")
        .onDelete("CASCADE");
      table.integer("show_id").unsigned().notNullable();
      table
        .foreign("show_id")
        .references("show_id")
        .inTable("shows")
        .onDelete("CASCADE");
      table.boolean("full_series").notNullable().defaultTo(true);
      table.string("show_url");
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("sources_shows");
  };
  