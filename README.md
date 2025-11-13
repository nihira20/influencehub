# InfluenceHub - Complete Setup Guide

##  Table of Contents
1. [Prerequisites](#prerequisites)
2. [Frontend Setup](#frontend-setup)
3. [Backend Setup](#backend-setup)
4. [Database Setup](#database-setup)
5. [Running the Application](#running-the-application)
6. [Remaining Components](#remaining-components)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before starting, ensure you have installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Python** (3.8 or higher) - [Download](https://www.python.org/)
- **MySQL** (8.0 or higher) - [Download](https://dev.mysql.com/downloads/)

## Frontend Setup

### Step 1: Create Project Directory
```bash
mkdir influencehub
cd influencehub
mkdir frontend
cd frontend
```

### Step 2: Copy package.json
Create `package.json` with the content provided in the artifacts above.

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Configure Tailwind & Vite
Create the following files with content from artifacts:
- `tailwind.config.js`
- `vite.config.js`
- `postcss.config.js` (create with: `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }`)

### Step 5: Create File Structure
```bash
# Create directories
mkdir -p src/components/layout
mkdir -p src/components/shared
mkdir -p src/pages
mkdir -p src/utils
mkdir -p public

# Create files
touch src/index.js
touch src/index.css
touch src/App.jsx
touch public/index.html
```

### Step 6: Copy All Component Files
Copy the content from the artifacts above into their respective files:
- `src/index.js`
- `src/index.css`
- `src/App.jsx`
- `public/index.html`
- `src/utils/mockData.js`
- `src/components/layout/Sidebar.jsx`
- `src/components/shared/StatCard.jsx`
- `src/components/shared/Modal.jsx`
- `src/pages/Login.jsx`
- `src/pages/Dashboard.jsx`
- `src/pages/Influencers.jsx`
- `src/pages/Campaigns.jsx`

## Backend Setup

### Step 1: Create Backend Structure
```bash
cd ..  # Back to influencehub root
mkdir backend
cd backend
```

### Step 2: Create requirements.txt
```
fastapi==0.104.1
uvicorn[standard]==0.24.0
mysql-connector-python==8.2.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
pydantic==2.5.0
```

### Step 3: Install Dependencies
```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
```

### Step 4: Create Backend Files

**app/main.py**
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import auth, influencers, campaigns, payments, contracts


app = FastAPI(title="InfluenceHub API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(influencers.router, prefix="/api/influencers", tags=["influencers"])
app.include_router(campaigns.router, prefix="/api/campaigns", tags=["campaigns"])
app.include_router(payments.router, prefix="/api/payments", tags=["payments"])
app.include_router(contracts.router, prefix="/api/contracts", tags=["contracts"])

@app.get("/")
def read_root():
    return {"message": "Welcome to InfluenceHub API"}
```

## Database Setup

### Step 1: Create MySQL Database
```sql
CREATE DATABASE influencehub;
USE influencehub;

-- Create tables (see init.sql in artifacts)
```

## Running the Application

### Terminal 1: Start Backend
```bash
cd backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn app.main:app --reload --port 8000
```

### Terminal 2: Start Frontend
```bash
cd frontend
npm run dev
```

### Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Default Login Credentials
- Username: admin
- Password: admin123

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (frontend)
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Kill process on port 8000 (backend)
# Similar steps for port 8000
```

### Module Not Found
```bash
# Reinstall dependencies
cd frontend
rm -rf node_modules package-lock.json
npm install

cd ../backend
pip install -r requirements.txt --force-reinstall
```

### Database Connection Error
1. Ensure MySQL is running
2. Check credentials in `.env` file
3. Verify database exists: `SHOW DATABASES;`

## Next Steps
1. Implement authentication
2. Connect frontend to backend API
3. Add data validation
4. Implement file uploads
5. Add user management
6. Deploy to production

## Support
For issues, check the troubleshooting section or review the console logs in both frontend (browser) and backend (terminal).
