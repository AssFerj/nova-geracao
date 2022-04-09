const PainelController = {
    index: (req, res)=>{
            res.render('painel', {title: 'Nova Geração | Gestor'})
        }
}
module.exports = PainelController;