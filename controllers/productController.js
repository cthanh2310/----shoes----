class productController{
    product(req, res, next){
        res.send('product');
    }
}
module.exports = new productController();