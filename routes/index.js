var home = require('./home');
var users = require('./users');
/* GET home page. */
function route(app){
  app.use('/', home);
  app.use('/users', users);
}

module.exports = route;
