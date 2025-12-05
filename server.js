const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the built/static assets if any under /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// Root serves the mobile HTML (we created `mobile_itinerary.html` in repo root)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'mobile_itinerary.html'));
});

// Provide a simple health check
app.get('/_health', (req, res) => res.json({ok:true, ts: Date.now()}));

app.listen(PORT, () => {
  console.log(`Trip2-2026 webapp listening on http://localhost:${PORT}`);
});
