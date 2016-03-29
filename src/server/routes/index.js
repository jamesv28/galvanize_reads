var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

router.get('/', function(req, res, next) {
    res.render('index',
        {
            title: 'Galvanize Eats'
        })
});

router.get('/books', function(req,res,next) {
    knex.select('*').from('books')
        .then(function(data) {
            console.log(data);
            res.render('books',
                {
                    title: 'Galvanize Reads | Books',
                    books: data
                });
        });});

router.get('/authors', function (req, res, next) {
  res.render('authors', { title: 'Authors'});
});


module.exports = router;
