import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));

app.listen(PORT, () => console.log(`Serving static files on port ${PORT}`));

