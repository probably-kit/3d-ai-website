// server.js
import express from 'express';
import cors from 'cors'; // Enable CORS for development

const app = express();
app.use(cors()); 
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express using import!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
