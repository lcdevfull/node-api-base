import express from "express";
import helmet from "helmet";
import router from "./routes/main";
import path from "path";

const server = express();
const port = 3000;

//Configuração
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);
server.use(express.static(path.join(__dirname, "../public"))); // Configurar pasta "public" como estática

server.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
});
