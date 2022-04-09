const ContatoController = {
    index: (req, res)=>{
            res.render('contato', {title: 'Nova Geração | Contato'})
        }
}
module.exports = ContatoController;