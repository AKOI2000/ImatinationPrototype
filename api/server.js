import express from 'express';
import getImages from './getImages.js';
import cors from 'cors';

const app = express();

app.use(cors({origin: "http://localhost:5173"}))

app.get('/api/get-images', getImages);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
