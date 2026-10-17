const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// GET all
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ data: rows });
    });
});

// GET one
app.get('/api/products/:id', (req, res) => {
    db.get('SELECT * FROM products WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Product not found' });
        res.json({ data: row });
    });
});

// POST create
app.post('/api/products', (req, res) => {
    const { product_name, brand, category, price, stock_quantity, description } = req.body;
    if (!product_name || !brand || !price) {
        return res.status(400).json({ error: 'product_name, brand, and price are required' });
    }
    const sql = `INSERT INTO products (product_name, brand, category, price, stock_quantity, description) VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(sql, [product_name, brand, category, price, stock_quantity, description], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Created successfully', data: { id: this.lastID, ...req.body } });
    });
});

// PUT update
app.put('/api/products/:id', (req, res) => {
    const { product_name, brand, category, price, stock_quantity, description } = req.body;
    const sql = `UPDATE products SET product_name = ?, brand = ?, category = ?, price = ?, stock_quantity = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`;
    db.run(sql, [product_name, brand, category, price, stock_quantity, description, req.params.id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Updated successfully' });
    });
});

// DELETE
app.delete('/api/products/:id', (req, res) => {
    db.run('DELETE FROM products WHERE id = ?', req.params.id, function (err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});