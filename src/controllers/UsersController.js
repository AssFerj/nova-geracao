const UsersController = {
    index: (req, res)=>{
            res.render('users', {title: 'Nova Geração | Login'})
        }
}
module.exports = UsersController;