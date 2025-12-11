import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const cors = require("cors");

app.use(cors({
  origin: "https://quest-quiz-cyan.vercel.app",  // your frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
