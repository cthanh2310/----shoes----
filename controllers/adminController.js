class adminController{
    admin(req, res, next){
        res.send('admin');
    }
}
module.exports = new adminController();