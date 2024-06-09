const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{
    res.render('home', {pagename: 'Home'})
});

router.get('/about', (req, res)=>{
    res.render('about', {pagename: 'About'})
});

router.get('/register', (req, res)=>{
    res.render('register', {pagename: 'Register'})
});

router.get('/login', (req, res)=>{
    res.render('login', {pagename: 'Login'})
});

module.exports = router;