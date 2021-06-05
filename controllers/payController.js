class payController{
    pay(req, res, next){
        res.send('pay');
    }
}
module.exports = new payController();