const HomeController = {
    index: (req, res)=>{
            res.render('index', {title: 'Nova Geração'})
        }
}
module.exports = HomeController;