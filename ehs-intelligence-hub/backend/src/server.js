const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'EHS Backend' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;