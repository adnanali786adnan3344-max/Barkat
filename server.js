
// Simple Express backend (Ready to Deploy)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running successfully!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
