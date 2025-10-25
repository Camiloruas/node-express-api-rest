import app from "./app";

const port = 3001;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
  console.log(`Clique aqui para acessar o servidor http://localhost:${port}`);
});
