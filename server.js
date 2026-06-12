'use strict';

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── Middleware ────────────────────────────────────────────────────────────────

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all static assets (HTML, CSS, client-side JS, images) from project root
app.use(express.static(__dirname));

// ─── Home ──────────────────────────────────────────────────────────────────────

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ─── Authentication (stub – wire up MongoDB/sessions later) ───────────────────

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  // TODO: look up user in DB, verify hashed password, create session/JWT
  console.log('[auth] login attempt:', email);
  res.redirect('/index.html');
});

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email and password are required.' });
  }

  // TODO: hash password (bcrypt), save user to DB
  console.log('[auth] signup attempt:', { name, email });
  res.redirect('/login.html');
});

// ─── Contact form ──────────────────────────────────────────────────────────────

app.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  // TODO: wire up nodemailer once SMTP credentials are available
  console.log('[contact]', { name, email, message });
  res.redirect('/submit_contact.html');
});

// ─── Flights ───────────────────────────────────────────────────────────────────

app.get('/flights', (req, res) => {
  res.sendFile(path.join(__dirname, 'flights.html'));
});

app.get('/flight-results', (req, res) => {
  res.sendFile(path.join(__dirname, 'flight-results.html'));
});

// Flight seat selection & payment
app.get('/seat-selection', (req, res) => {
  res.sendFile(path.join(__dirname, 'seat-selection.html'));
});

app.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'payment.html'));
});

app.post('/confirm-flight-payment', (req, res) => {
  const { 'payment-method': method } = req.body;
  console.log('[flights] payment confirmed via:', method || 'unspecified');
  // TODO: record booking in DB, send confirmation email
  res.redirect('/confirmation.html');
});

// ─── Trains ────────────────────────────────────────────────────────────────────

app.get('/train', (req, res) => {
  res.sendFile(path.join(__dirname, 'train.html'));
});

app.get('/trainresults', (req, res) => {
  res.sendFile(path.join(__dirname, 'trainresults.html'));
});

app.get('/trainseatselection', (req, res) => {
  res.sendFile(path.join(__dirname, 'trainseatselection.html'));
});

app.get('/trainpayment', (req, res) => {
  res.sendFile(path.join(__dirname, 'trainpayment.html'));
});

app.post('/confirm-train-payment', (req, res) => {
  const { 'payment-method': method } = req.body;
  console.log('[trains] payment confirmed via:', method || 'unspecified');
  // TODO: record booking in DB
  res.redirect('/trainconfirmation.html');
});

app.get('/trainconfirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'trainconfirmation.html'));
});

// ─── Buses ─────────────────────────────────────────────────────────────────────

app.get('/buses', (req, res) => {
  res.sendFile(path.join(__dirname, 'buses.html'));
});

app.get('/busresults', (req, res) => {
  res.sendFile(path.join(__dirname, 'busresults.html'));
});

app.get('/busseatselection', (req, res) => {
  res.sendFile(path.join(__dirname, 'busseatselection.html'));
});

app.get('/buspayment', (req, res) => {
  res.sendFile(path.join(__dirname, 'buspayment.html'));
});

// QR code for UPI/blockchain payment
app.get('/generate-qr-code', (req, res) => {
  // TODO: generate a real QR code (e.g. with the `qrcode` package)
  const qrCodeUrl = 'https://randomqr.com/assets/images/rickroll-qrcode.webp';
  res.json({ qrCodeUrl });
});

app.post('/confirm-payment', (req, res) => {
  const { paymentMethod } = req.body;
  console.log('[buses] payment confirmed via:', paymentMethod || 'unspecified');
  // TODO: record booking in DB
  res.redirect('/busconfirmation.html');
});

app.get('/busconfirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'busconfirmation.html'));
});

// ─── Movies ────────────────────────────────────────────────────────────────────

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'movies.html'));
});

app.get('/movietheatre', (req, res) => {
  res.sendFile(path.join(__dirname, 'movietheatre.html'));
});

app.get('/movieseatreservation', (req, res) => {
  res.sendFile(path.join(__dirname, 'movieseatreservation.html'));
});

app.get('/moviepayment', (req, res) => {
  res.sendFile(path.join(__dirname, 'moviepayment.html'));
});

app.post('/confirm-movie-payment', (req, res) => {
  const { 'payment-method': method } = req.body;
  console.log('[movies] payment confirmed via:', method || 'unspecified');
  // TODO: record booking in DB
  res.redirect('/movieconfirmation.html');
});

app.get('/movieconfirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'movieconfirmation.html'));
});

// ─── Restaurants ───────────────────────────────────────────────────────────────

app.get('/restaurants', (req, res) => {
  res.sendFile(path.join(__dirname, 'restaurants.html'));
});

app.get('/restaurantresults', (req, res) => {
  res.sendFile(path.join(__dirname, 'restaurantresults.html'));
});

app.post('/confirm-restaurant-booking', (req, res) => {
  const { name, date, time, guests } = req.body;

  if (!name || !date || !time || !guests) {
    return res.status(400).send('All booking fields are required.');
  }

  console.log('[restaurants] booking:', { name, date, time, guests });
  // TODO: record reservation in DB, send confirmation email
  res.redirect('/restconfirmation.html');
});

app.get('/restconfirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'restconfirmation.html'));
});

// ─── Offers ────────────────────────────────────────────────────────────────────

app.get('/offers', (req, res) => {
  res.sendFile(path.join(__dirname, 'offers.html'));
});

// ─── 404 fallback ──────────────────────────────────────────────────────────────

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// ─── Start ─────────────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`BookItAll running → http://localhost:${PORT}`);
});
