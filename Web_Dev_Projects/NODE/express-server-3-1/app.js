import express from "express"
const app = express();
const port = 4000;

// Rota principal
app.get('/about', (req, res) => {
  res.send('<h1 style="color:red;">Olá, Derson! Seu servidor Express está funcionando!</h1> <br/> <h2>And that is the about section.<h2/>');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
