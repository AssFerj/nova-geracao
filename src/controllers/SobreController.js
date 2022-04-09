const SobreController = {
    index: (req, res)=>{
            res.render('sobre', {title: 'Nova Geração | Sobre'})
        }
}
module.exports = SobreController;