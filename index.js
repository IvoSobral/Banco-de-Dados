import app from "./config/express.js"
import express from "express"
import db from "./database.js"

const port = 3000;

const router = express.Router();
//http://localhost : 3000

router.get("/", async (req, res, next) => {
  res.json({ola:"mundo"})
})

router.post("/", async (req, res, next) => {
  const corpo_req = req.body;
  try {
    if(!corpo_req.aluno) {
    throw new Error("Erro de que algo deu ruim.")
    }
    res.status(201).json({ola: corpo_req.aluno})
  }catch (err){
    next(err)
  }
})

app.use("/", router);

app.use(
  (err, req, res, next) => {
    res
      .status(500)
      .json({
      mensagem: "Deu ruim, amigão!"
    })
  }
)

try {
  await db.authenticate();
  console.log("conexão estabelecida!");
}

app.listen(
  port,
  () => console.log("servidor funcionando")
)