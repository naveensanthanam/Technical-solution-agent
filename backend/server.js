const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const frontendPath = path.join(__dirname, '..', 'frontend');

app.use(express.static(frontendPath));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`TechDoc backend running at http://localhost:${port}`);
});