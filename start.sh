#!/bin/bash

echo "🚀 Starting RNG Luxe App with Clean URLs..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🌐 Starting server..."
echo ""
echo "✅ Clean URLs available:"
echo "   • http://localhost:8000/ (Home)"
echo "   • http://localhost:8000/dashboard"
echo "   • http://localhost:8000/profile"
echo "   • http://localhost:8000/auth"
echo ""
echo "🔗 Old .html URLs will automatically redirect to clean URLs"
echo ""

# Start the server
node server.js
