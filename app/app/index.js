const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>MediCloud Lite - Sistema de Citas Médicas Activo</h1><p>Estado: Funcionando correctamente en contenedor.</p>');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'medicloud-lite' });
});

app.listen(PORT, () => {
  console.log(`MediCloud Lite corriendo en el puerto ${PORT}`);
});
