const PagamentosController = {
    index: (req, res)=>{
            res.render('pagamentos', {title: 'Nova Geração | Pagamentos'})
        }
}
module.exports = PagamentosController;