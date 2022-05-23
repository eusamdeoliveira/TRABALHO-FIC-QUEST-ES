const app = require('./src/app');
const PORT = 27017;

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));