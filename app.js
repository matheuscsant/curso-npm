import tabela2024 from "./tabela.js";
import express from "express";

const app = express();

app.get("/getTimes", (req, res) => {
  console.log(req.url);
  console.log(req.statusCode);
  res.send(tabela2024);
});

app.listen(300, () => console.log("Servidor rodando com sucesso"));
