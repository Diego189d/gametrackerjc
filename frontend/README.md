# GameTracker Frontend (Vite + React)

## Run locally
1. cd frontend
2. npm install
3. Create .env with: VITE_API_URL=http://localhost:4000/api
4. npm run dev

## Deploy to Vercel
1. Push this frontend folder to GitHub as a repo
2. In Vercel create a new project and connect that repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add Environment Variable `VITE_API_URL` with your backend URL (e.g. https://gametracker-backend.onrender.com/api)
