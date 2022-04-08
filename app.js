const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/index');
const usersRouter = require('./src/routes/users');
const painelRouter = require('./src/routes/painel');
const sobreRouter = require('./src/routes/sobre');
const blogRouter = require('./src/routes/blog');
const contatoRouter = require('./src/routes/contato');
const alunosRouter = require('./src/routes/alunos');
const instrutoresRouter = require('./src/routes/instrutores');
const pagamentosRouter = require('./src/routes/pagamentos');
const contasRouter = require('./src/routes/contas');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/painel', painelRouter);
app.use('/sobre', sobreRouter);
app.use('/blog', blogRouter);
app.use('/contato', contatoRouter);
app.use('/alunos', alunosRouter);
app.use('/instrutores', instrutoresRouter);
app.use('/pagamentos', pagamentosRouter);
app.use('/contas', contasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
