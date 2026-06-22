const express = require('express');
const usersRouter = require('./routes/users');
const transfersRouter = require('./routes/transfers');
const paymentsRouter = require('./routes/payments');
const chatbotRouter = require('./routes/chatbot');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
jpoefopwefjsd
