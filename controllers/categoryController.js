class categoryController{
    category(req, res, next){
        res.send('category');
    }
}
module.exports = new categoryController();