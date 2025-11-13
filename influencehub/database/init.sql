-- ============================================
-- database/init.sql
-- ============================================

-- Create Database
CREATE DATABASE IF NOT EXISTS influencehub;
USE influencehub;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(50)    DEFAULT 'User',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Influencers Table
CREATE TABLE IF NOT EXISTS influencers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    platform VARCHAR(100) NOT NULL,
    niche VARCHAR(100) NOT NULL,
    followers INT NOT NULL,
    engagement_rate DECIMAL(5,2) NOT NULL,
    earnings INT NOT NULL,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Campaigns Table
CREATE TABLE IF NOT EXISTS campaigns (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    client VARCHAR(255) NOT NULL,
    platform VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    budget INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    influencer_id INT NOT NULL,
    campaign_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    due_date DATE NOT NULL,
    payment_method VARCHAR(100) NOT NULL,
    status VARCHAR(50) NOT NULL,
    invoice_number VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (influencer_id) REFERENCES influencers(id) ON DELETE CASCADE,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
);

-- Contracts Table
CREATE TABLE IF NOT EXISTS contracts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    influencer_id INT NOT NULL,
    campaign_id INT,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    value INT NOT NULL,
    status VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (influencer_id) REFERENCES influencers(id) ON DELETE CASCADE,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE SET NULL
);

-- Content Calendar Table
CREATE TABLE IF NOT EXISTS content_calendar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    influencer_id INT NOT NULL,
    campaign_id INT NOT NULL,
    platform VARCHAR(100) NOT NULL,
    content_type VARCHAR(100) NOT NULL,
    scheduled_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'Scheduled',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (influencer_id) REFERENCES influencers(id) ON DELETE CASCADE,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE
);

-- Analytics Table
CREATE TABLE IF NOT EXISTS analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    campaign_id INT NOT NULL,
    influencer_id INT NOT NULL,
    views INT DEFAULT 0,
    likes INT DEFAULT 0,
    comments INT DEFAULT 0,
    shares INT DEFAULT 0,
    engagement_rate DECIMAL(5,2) DEFAULT 0,
    recorded_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE CASCADE,
    FOREIGN KEY (influencer_id) REFERENCES influencers(id) ON DELETE CASCADE
);

-- Insert Sample Data
INSERT INTO users (username, password_hash, email, full_name, role) VALUES
('admin', '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5NU3r0cHvz4Pe', 'admin@influencehub.com', 'Admin User', 'Admin');
-- Password: admin123

INSERT INTO influencers (name, platform, niche, followers, engagement_rate, earnings, image_url) VALUES
('Sarah Johnson', 'Instagram', 'Fashion', 250000, 4.5, 15000, 'https://via.placeholder.com/100'),
('Mike Chen', 'YouTube', 'Tech', 500000, 6.2, 28000, 'https://via.placeholder.com/100'),
('Emma Davis', 'TikTok', 'Lifestyle', 1200000, 8.1, 35000, 'https://via.placeholder.com/100');

INSERT INTO campaigns (name, client, platform, start_date, end_date, budget, status, description) VALUES
('Summer Collection Launch', 'Fashion Brand Co.', 'Instagram', '2025-06-01', '2025-06-30', 50000, 'Active', 'Launch campaign for new summer collection'),
('Product Review Series', 'Tech Gadgets Inc.', 'YouTube', '2025-07-01', '2025-08-15', 75000, 'Upcoming', 'Series of tech product reviews');

INSERT INTO contracts (title, influencer_id, campaign_id, start_date, end_date, value, status) VALUES
('Instagram Campaign Q2 2025', 1, 1, '2025-06-01', '2025-06-30', 15000, 'Active'),
('YouTube Review Contract', 2, 2, '2025-07-01', '2025-08-15', 28000, 'Sent');