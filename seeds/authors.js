
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(),

    // Inserts seed entries
    knex('authors').insert(
        {
            id: 1,
            author1_First_Name: 'Ernest',
            author1_Last_Name: 'Hemingway',
            author1_Biography: 'Ernest Miller Hemingway (July 21, 1899 – July 2, 1961) was an American novelist, short story writer, and journalist. His economical and understated style had a strong influence on 20th-century fiction, while his life of adventure and his public image influenced later generations. Hemingway produced most of his work between the mid-1920s and the mid-1950s, and won the Nobel Prize in Literature in 1954. ',
            author1_portrait_url: '/images/ernest.jpg'
        }),
    knex('authors').insert(
        {
            id: 2,
            author1_First_Name: 'Chuck',
            author1_Last_Name: 'Palahniuk',
            author1_Biography:' born February 21, 1962) is an American novelist and freelance journalist, who describes his work as transgressional fiction. He is the author of the award-winning novel Fight Club, which also was made into an acclaimed film of the same name.',
            author1_portrait_url: '/images/chuck.jpg'
        }),
    knex('authors').insert(
        {
            id: 3,
            author1_First_Name: 'Neil',
            author1_Last_Name: 'Gaiman',
            author1_Biography:' is an English author of short fiction, novels, comic books, graphic novels, audio theatre and films. His notable works include the comic book series The Sandman and novels Stardust, American Gods, Coraline, and The Graveyard Book. He has won numerous awards, including the Hugo, Nebula, and Bram Stoker awards, as well as the Newbery and Carnegie medals.',
            author1_portrait_url: '/images/neil.jpg'
        })
  );
};
