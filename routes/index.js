/* /home, /san-pham/slug , /danh-muc/giay-nike,... , /gio-hang, /thanh-toan, /login , /register, /admin,  */

var home = require('./home');
var product = require('./product');
var category = require('./category');
var cart = require('./cart');
var pay = require('./pay');
var login = require('./login');
var register = require('./register');
var admin = require('./admin');
var users = require('./users');
/* GET home page. */
function route(app){
  app.use('/', home);
  app.use('/san-pham', product);
  app.use('/danh-muc', category);
  app.use('/gio-hang', cart);
  app.use('/thanh-toan', pay);
  app.use('/dangnhap', login);
  app.use('/dangky', register);
  app.use('/admin', admin);
  app.use('/users', users);
}

module.exports = route;
