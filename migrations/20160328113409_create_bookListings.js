
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bookListings',function(table) {
        table.integer('book_id');
        table.integer('author_id');
        table.foreign('book_id').references('id').inTable('books');
        table.foreign('author_id').references('id').inTable('authors');


    });

    };

exports.down = function(knex, Promise) {
  
};
