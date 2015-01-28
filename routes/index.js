var express = require('express');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.redirect('/');
}

module.exports = function(passport){

  /* GET login page. */
  router.get('/', function(req, res) {
    res.render('index', { message: req.flash('message') });
  });

  /* Handle Login POST */
  router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true  
  }));

  /* GET Registration Page */
  router.get('/signup', function(req, res){
    res.render('register',{message: req.flash('message')});
  });

  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/home',
    failureRedirect: '/signup',
    failureFlash : true  
  }));

  /* GET Home Page */
  router.get('/home', isAuthenticated, function(req, res){
    res.render('home', { user: req.user });
  });

  /* Handle Logout */
  router.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  /***********************************************************************************  
  *   Lists all Projects
  */
  router.get('/projects', isAuthenticated, function(req, res) {
    res.render('projects', { title: 'Projects', user: req.user });
  });

  router.get('/about', isAuthenticated, function(req, res) {
    res.render('about', { title: 'About', user: req.user });
  });

  router.get('/s3', isAuthenticated, function(req, res) {
    res.render('s3', { title: 'S3 Buckets', user: req.user });
  });

  router.get('/profile', isAuthenticated, function(req, res) {
    res.render('s3', { title: 'Profile', user: req.user });
  });



  /**
  *   @Submit: Upload Drag and Drop Photos
  *   @Redirect: /projects
  */
  router.post('/target', function(req, res) {
    console.log(req.body) // form fields
    console.log(req.files) // form files

    res.redirect("projects");
  });


  return router;
}





