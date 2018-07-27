"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require('morgan');
var path = require("path");
var app = express();
var router = express.Router();
app.use(logger('tiny'));
app.set('views', path.join(__dirname, '..', '/dist/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '..', '/dist')));
app.use('/', router);
router.get('/home', function (req, res) {
    res.render('index');
});
app.listen(8081);
