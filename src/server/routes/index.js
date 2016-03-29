var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');

/*********************
 * Getter Routes for books
 **********************/

router.get('/', function(req, res, next) {
    res.render('index',
        {
            title: 'Galvanize Reads | Home'
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
        title: 'Galvanize Reads | Add a new Book'
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

router.get('/book/:id/edit', function(req,res,next) {
    knex('books').where('id', req.params.id)
        .then(function(data) {
            console.log('edit data', data);
            res.render('bookEdit',
                {
                    title: 'Galvanize Reads | Edit Books',
                    books: data
                })
        })
});

router.get('/book/:id/delete', function(req,res,next) {
    knex.select('*').from('books').where('id', req.params.id)
        .then(function(data){
            res.render('bookDelete',
                {
                    title: 'Galvanize Reads | Delete Author',
                    books: data
                });
        });
});

/*************************
 * CRUD for Books
 ************************/

router.post('/books/new', function(req,res,next) {

    knex('books').insert({
        Book_Title: req.body.Book_Title,
        Book_Genre: req.body.Book_Genre,
        Book_Cover: req.body.Book_Cover,
        Book_Description: req.body.Book_Description

    }).then(function() {
        res.redirect('/books');
    });
});

router.post('/book/:id/delete', function (req, res, next) {
    knex.select('*').from('books').where('id', req.params.id).del()
        .then(function () {
            console.log('requirements', req.params.id);
            res.redirect('/books');
        });
});

router.post('/book/:id/edit', function(req, res, next) {

    knex('books').where('id', req.params.id).update(
        {
            Book_Title: req.body.Book_Title,
            Book_Genre: req.body.Book_Genre,
            Book_Cover: req.body.Book_Cover,
            Book_Description: req.body.Book_Description
        }).then(function() {
                res.redirect('/books');
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

router.get('/author/:id/delete', function(req,res,next) {
    knex.select('*').from('authors').where('id', req.params.id)
        .then(function(data){
            console.log('author info', req.params.id);
           res.render('authorDelete',
               {
                   title: 'Galvanize Reads | Delete Author',
                   authors: data
               });
        });
});

router.get('/authors/new', function(req,res, next) {
    res.render('newAuthor',
        {
            title: 'Galvanize Reads | Add an Author'
        })
});

/********************
 *  CRUD for authors
 ********************/

router.post('/author/:id/delete', function(req,res,next) {
    knex.select('*').from('authors').where('id', req.params.id).del()
        .then(function() {
            res.redirect('/authors');
        });
});

router.post('/authors/new', function(req,res, next) {
    knex('authors').insert({
        author1_First_Name: req.body.author1_First_Name,
        author1_Last_Name: req.body.author1_Last_Name,
        author1_portrait_url: req.body.author1_portrait_url,
        author1_Biography: req.body.author1_Biography
    }).then(function( ) {
        res.redirect('/authors');
    });
});


module.exports = router;
