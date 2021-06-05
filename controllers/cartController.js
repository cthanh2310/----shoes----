class cartController{
    cart(req, res, next){
        res.send('cart');
    }
}
module.exports = new cartController();