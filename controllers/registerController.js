class registerController{
    register(req, res, next){
        res.send('register');
    }
}
module.exports = new registerController();