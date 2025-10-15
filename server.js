const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Load profiles from JSON
const profiles = require('./data.json');

// Routes

// Home / list of profiles
app.get('/', (req, res) => {
  res.render('index', { profiles });
});

// Individual profile page
app.get('/profile/:id', (req, res) => {
  const id = req.params.id;
  const profile = profiles.find(p => String(p.id) === id);
  if (!profile) {
    // render 404 template for not found
    res.status(404).render('404', { path: req.path });
  } else {
    res.render('profile', { profile });
  }
});

// Catch-all 404 for other routes
app.use((req, res) => {
  res.status(404).render('404', { path: req.path });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
