const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omniuser:omniuser@cluster0-yjuyb.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para ediçao, delete)
//req.body = Acessar corpo da requisicao (para criacao e edicao)

app.use(express.json());
app.use(routes);

app.listen(3333);
