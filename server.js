const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Serve static files
app.use(express.static('.'));

// Handle clean URLs - serve .html files without extension
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'profile.html'));
});

app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Redirect .html URLs to clean URLs
app.get('/dashboard.html', (req, res) => {
    res.redirect('/dashboard');
});

app.get('/profile.html', (req, res) => {
    res.redirect('/profile');
});

app.get('/auth.html', (req, res) => {
    res.redirect('/auth');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Clean URLs available:');
    console.log('- http://localhost:8000/');
    console.log('- http://localhost:8000/dashboard');
    console.log('- http://localhost:8000/profile');
    console.log('- http://localhost:8000/auth');
});
