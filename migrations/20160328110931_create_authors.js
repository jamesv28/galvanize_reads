
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors',function(table) {
       table.increments();
        table.string('author1_First_Name');
        table.string('author1_Last_Name');
        table.text('author1_Biography');
        table.string('author1_portrait_url');
        table.string('author2_first_name');
        table.string('author2_last_name');
        table.text('author2_biography');
        table.string('author2_portrait_url');
        table.string('author3_first_name');
        table.string('author3_last_name');
        table.text('author3_biography');
        table.string('author3_portrait_url');

    });

    };

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
