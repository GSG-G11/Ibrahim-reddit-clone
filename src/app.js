const { join } = require('path');
require('env2')('.env');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./routes');
const { pageNotFound, serverError } = require('./controllers');

const app = express();
app.disable('etag');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(router);
app.use(pageNotFound);
app.use(serverError);

app.set('port', process.env.PORT || 3000);

module.exports = app;
