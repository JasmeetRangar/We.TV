const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const logger = require('morgan');
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const commentsRouter = require('./routes/comments');
const showsRouter = require('./routes/shows');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));
app.use('/api/posts', postsRouter(dbHelpers));
app.use('/api/comments', commentsRouter(dbHelpers));
app.use('/api/shows', showsRouter(dbHelpers));


module.exports = app;
