module.exports = {
    autentica(req,res){
        const {login,senha} = req.body;
    
        if(login == 'admin'){
            res.json(`Bem vindo ${login}`)
        }else{
            res.json(`Usuario ${login} não encontrado.`)
        }
    },
    listUsers(req,res){
        res.json({
            "usuario" : "admin",
            "senha" : "admin"
        })
    },
    loginHeaders(req,res){
        const response = req.headers.token;
        res.json(response);
    }
}