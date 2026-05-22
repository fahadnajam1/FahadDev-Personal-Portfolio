# Fahad Najam - 3D Animated MERN Portfolio

A complete, production-ready 3D personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring Three.js, React Three Fiber, and Framer Motion. 

# Open in browser
https://fahadnajam.netlify.app/
## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion, Three.js (@react-three/fiber, @react-three/drei, maath), React Router DOM.
- **Backend**: Node.js, Express.js, MongoDB + Mongoose, Nodemailer, express-validator.

## Project Structure
```text
portfolio/
├── client/          # Vite React App
├── server/          # Express API Backend
└── README.md
```

## Local Development Setup

### 1. Backend Setup
1. Open terminal and cd into the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your connection details:
   - `MONGO_URI`: Your MongoDB connection string.
   - `EMAIL_USER`: Your Gmail address.
   - `EMAIL_PASS`: Your Gmail App Password (not your regular password).
4. Run the server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Open a new terminal and cd into the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Note: Ensure `maath` is installed if not already added by drei:
   ```bash
   npm install maath
   ```
4. Run the React app:
   ```bash
   npm run dev
   ```

## Deployment Guide
- **Frontend (Netlify/Vercel)**: Connect your GitHub repo, set the root directory to `client`, and use the build command `npm run build` with the publish directory `dist`.
- **Backend (Render/Heroku/Railway)**: Connect your repo, set the root directory to `server`, build command `npm install`, and start command `npm start`. Add your Environment Variables in the provider's dashboard.

## Customization
All personal data (projects, skills, experience, etc.) is located in `client/src/constants/index.js`. Update this file to modify the text content without needing to dig through component code.

📬 Contact
Fahad Najam — Frontend Developer
📧 Reach me via the contact form on the site
🔗 LinkedIn · GitHub

📄 License
Open source for learning and inspiration. If you use this as a base for your own portfolio, a credit or star would be appreciated. 🙂