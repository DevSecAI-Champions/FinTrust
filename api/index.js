const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Deliberate: no rate-limiting, no global auth middleware
app.use('/users', usersRouter);

app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Deliberate: stack traces in development for training
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
  });
});

app.listen(PORT, () => console.log(`FinTrust API on port ${PORT}`));
