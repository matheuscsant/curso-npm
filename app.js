import express from "express";
import tabela2024 from "./tabela.js";

const app = express();

app.get("/", (req, res) => {
  res.send(tabela2024);
});

app.get("/:sigla", (req, res) => {
  let param = req.params.sigla;
  let timeSelecionado = tabela2024.filter((time) => time.sigla == param);
  if (timeSelecionado.length == 0) {
    console.log("NENHUM TIME ENCONTRADO");
    res.send("NENHUM TIME ENCONTRADO");
  } else {
    console.log("TIME ENCONTRADO: " + timeSelecionado.sigla);
    res.send(timeSelecionado);
  }
});

app.listen(300, () => console.log("Servidor rodando com sucesso"));
