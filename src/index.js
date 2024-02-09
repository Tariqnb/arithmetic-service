const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});
app.get('/add/:n/:m', (req, res) => {
    res.json({ calculationResult: Number(req.params.n) + Number(req.params.m) });
});
app.get('/subtract/:n/:m', (req, res) => {
    res.json({ calculationResult: Number(req.params.n) - Number(req.params.m) });
});
app.get('/multiply/:n/:m', (req, res) => {
    res.json({ calculationResult: Number(req.params.n) * Number(req.params.m) });
});
app.get('/divide/:n/:m', (req, res) => {
    res.json({ calculationResult: Number(req.params.n) / Number(req.params.m) });
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
