import express from "express";

const app = express();
const port = 3000;


// Permitir uso de arquivos estáticos (CSS, imagens)
app.use(express.static("public"));

// Rota principal
app.get("/", (req, res) => {
    let tittle = "Blog post system";
    res.render("index.ejs", {
    tittle: tittle
  });
});

app.get("/create", (req, res) => {

});

app.get("/edit", (req, res) => {

});

app.post("/edit", (req, res) => {

});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});