const ContasController = {
    index: (req, res)=>{
            res.render('contas', {title: 'Nova Geração | Contas'})
        }
}
module.exports = ContasController;