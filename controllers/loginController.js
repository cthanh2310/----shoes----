class loginController{
    login(req, res, next){
        res.send('login');
    }
}
module.exports = new loginController();