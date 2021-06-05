class usersController{
    users(req, res, next) {
        res.send(` I'm Pham Cong Thanh , i'm start new project with Hào Lê`);
      }
}
module.exports = new usersController();