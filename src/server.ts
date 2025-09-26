import express from "express";
import helmet from "helmet";
import router from "./routes/main";

const server = express();
const port = 3000;

//Configuração
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", router);

server.listen(port, () => {
  console.log(`Servidor rodando: http://localhost:${port}`);
});
