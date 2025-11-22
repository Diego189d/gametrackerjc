# GameTracker - Backend (for Render)

This backend is an Express + Mongoose API that exposes CRUD endpoints for games and reviews.

## Endpoints
- GET /api/games?search=&platform=&status=
- POST /api/games
- PUT /api/games/:id
- DELETE /api/games/:id
- GET /health

## Run locally
1. Copy .env.example to .env and set MONGO_URI to your MongoDB Atlas connection string.
2. npm install
3. npm run dev

## Deploy to Render (recommended)
1. Create a new Web Service on Render and connect the GitHub repo.
2. Use `npm install` as the build command and `npm start` (or `npm run start`) to start the service.
3. Add an environment variable `MONGO_URI` in Render settings with your connection string.
4. Deploy and note the service URL (e.g. https://gametracker-backend.onrender.com).

Make sure to allow access to your MongoDB Atlas cluster IPs or set IP access to 0.0.0.0/0 for testing.
