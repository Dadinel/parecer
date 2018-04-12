let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Default');
});

app.get('/modelos', function(req, res) {
    let modelos;
    modelos = [
                {id: 1, modelo: "parecer"},
                {id: 2, modelo: "declaração"},
                {id: 3, modelo: "relatório"},
                {id: 4, modelo: "parecer psicológico"}
              ];
    res.json(modelos);
});

app.get('/relatorio', function(req, res) {
    res.send('Aqui será o cadastro do relatório');
});

app.get('/relatorio/:id', function(req, res) {
    res.send('Aqui será o cadastro do relatório');
});

app.post('/relatorio', function(req, res) {
});

app.get('/impressao/:id', function(req, res) {
    res.send('Aqui será a impressão do relatório cadastrado, conforme o modelo');
});

app.get('/usuarios', function(req, res) {
    res.send('Aqui será o cadastro de usuários');
});

app.post('/usuarios', function(req, res){

});

let port = process.env.PORT || 3000;

app.listen( port , function() {
    if(!process.env.PROD) {
        console.log(`Servidor rodando na porta ${port}`);
    }
});