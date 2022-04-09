const InstrutoresController = {
    index: (req, res)=>{
            res.render('instrutores', {title: 'Nova Geração | Instrutores'})
        }
}
module.exports = InstrutoresController;