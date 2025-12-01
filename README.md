# RNG Luxe - AI Job Assistant

A modern web application with clean URLs for job search assistance.

## 🚀 Quick Start

### Option 1: Using the Startup Script (Recommended)
```bash
./start.sh
```

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start the server
npm start
```

## 🌐 Clean URLs

The application now uses clean URLs without file extensions:

- **Home**: `http://localhost:8000/`
- **Dashboard**: `http://localhost:8000/dashboard`
- **Profile**: `http://localhost:8000/profile` (Empty page ready for custom content)
- **Authentication**: `http://localhost:8000/auth`

## 🔄 URL Redirects

Old `.html` URLs automatically redirect to clean URLs:
- `dashboard.html` → `/dashboard`
- `profile.html` → `/profile`
- `auth.html` → `/auth`

## 📁 File Structure

```
rng_luxe_full/
├── index.html          # Home page
├── dashboard.html       # Dashboard page
├── profile.html         # Profile page
├── auth.html           # Authentication page
├── server.js           # Express server with clean URLs
├── package.json        # Node.js dependencies
├── .htaccess          # Apache URL rewriting (if using Apache)
├── start.sh           # Quick start script
└── README.md          # This file
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **URL Handling**: Express.js routing

## 🔧 Development

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Running in Development Mode
```bash
npm run dev
```

This uses nodemon for automatic server restarts on file changes.

## 📝 Notes

- The server runs on port 8000 by default
- All static files are served from the root directory
- Clean URLs are handled by Express.js routing
- Firebase configuration is included in `firebase-config.js`
