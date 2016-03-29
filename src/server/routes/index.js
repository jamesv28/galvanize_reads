var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

/*********************
 * Getter Routes for books
 **********************/

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
        });
});

router.get('/books/new', function(req,res,next) {
    res.render('newBooks', {
        index: 'Galvanize Reads | Add a new Book'
    });
});

router.get('/book/:id', function(req,res,next) {
    knex.select('*').from('books').where('id', req.params.id)
        .then(function (data) {
            res.render('book',
                {
                    title: 'Galvanize REads | Individual Book',
                    books: data
                });
        });
});

/*************************
 * Getter for authors
 *************************/

router.get('/authors', function (req, res, next) {
    knex.select('*').from('authors')
        .then(function(data) {
            console.log(data);
            res.render('authors',
                {
                    title: 'Galvanize Reads | Authors',
                    authors: data
                });
        });
});

router.get('/author/:id', function(req,res,next) {
    knex.select('*').from('authors').where('id', req.params.id)
        .then(function (data) {
            console.log('hello', data);
            res.render('author',
                {
                    title: 'Galvanize REads | Individual Author',
                    authors: data
                });
        });
});
module.exports = router;
