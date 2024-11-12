const express = require('express');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
