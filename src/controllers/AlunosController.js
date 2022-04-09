const AlunosController = {
    index: (req, res)=>{
            res.render('alunos', {title: 'Alunos | Nova Geração'})
        }
}
module.exports = AlunosController;