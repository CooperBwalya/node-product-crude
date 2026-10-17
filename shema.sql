CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL,
    price REAL NOT NULL,
    stock_quantity INTEGER NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (product_name, brand, category, price, stock_quantity, description) VALUES
('Galaxy S21', 'Samsung', 'Smartphones', 499.99, 25, 'Flagship smartphone with high-res camera.'),
('MacBook Pro 14', 'Apple', 'Laptops', 1999.00, 10, 'Powerful laptop for developers and creators.'),
('MX Master 3S', 'Logitech', 'Accessories', 99.99, 50, 'Ergonomic wireless mouse.'),
('UltraFine Monitor', 'LG', 'Displays', 699.50, 15, '4K IPS desktop monitor.'),
('WH-1000XM4', 'Sony', 'Audio', 348.00, 30, 'Wireless noise-canceling headphones.'),
('Keychron K2', 'Keychron', 'Accessories', 79.00, 40, 'Wireless mechanical keyboard.'),
('iPad Air', 'Apple', 'Tablets', 599.00, 20, 'Versatile tablet with M1 chip.'),
('Dell XPS 13', 'Dell', 'Laptops', 1249.99, 12, 'Compact Windows ultrabook.'),
('Kindle Paperwhite', 'Amazon', 'E-Readers', 139.99, 35, 'Waterproof e-reader with adjustable light.'),
('Echo Dot', 'Amazon', 'Smart Home', 49.99, 60, 'Smart speaker with Alexa.');