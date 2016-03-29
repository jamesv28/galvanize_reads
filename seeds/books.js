
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),

    // Inserts seed entries
    knex('books').insert(
        {
          id: 1,
          Book_Title: 'For Whom the Bell Tolls',
          Book_Genre: 'fiction',
          Book_Description: 'For Whom the Bell Tolls is a novel by Ernest Hemingway published in 1940. It tells the story of Robert Jordan, a young American in the International Brigades attached to a republican guerrilla unit during the Spanish Civil War.',
            Book_Cover: '/images/bell.jpg'
        }),
    knex('books').insert(
        {
            id: 2,
            Book_Title: 'Fight Club',
            Book_Genre: 'fiction',
            Book_Description: 'Fight Club is a 1996 novel by Chuck Palahniuk. It follows the experiences of an unnamed protagonist struggling with insomnia',
            Book_Cover: '/images/club.jpg'
        }),
    knex('books').insert(
        {
            id: 3,
            Book_Title: 'American Gods',
            Book_Genre: 'fiction',
            Book_Description: ' The novel is a blend of Americana, fantasy, and various strands of ancient and modern mythology, all centering on the mysterious and taciturn Shadow.',
            Book_Cover: '/images/gods.jpg'
        })
  );
};
