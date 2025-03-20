const express = require('express');
const { Pool } = require('pg');
const cors = require('cors'); // Ajoutez cette ligne
const app = express();
const port = 3000;

app.use(cors()); // Ajoutez cette ligne

const pool = new Pool({
    user: 'user',
    host: 'postgres',
    database: 'mydb',
    password: 'password',
    port: 5432,
});

app.get('/users', async (req, res) => {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});