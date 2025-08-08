const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from Zensar, we're testing CI/CD pipeline",
    description: 'Testing complete GCP CI/CD pipeline',
    version: '1.0.0'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(`user-api is running on port ${port}`);
});

