const BlogController = {
    index: (req, res, next)=>{
            res.render('blog', { title: 'Nova Geração | Blog'})
    }
}
module.exports = BlogController;