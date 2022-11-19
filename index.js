const express = require('express');
const nunjucks = require("nunjucks");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(nunjucks.render("index.njk"));
});
app.get('/:year', (req, res) => {
    res.send(nunjucks.render("year.njk", req.params));
});
app.get('/:year/:day', (req, res) => {
    res.send(nunjucks.render("day.njk", req.params));
});
app.get('/:year/:day/:part', (req, res) => {
    res.send(nunjucks.render("part.njk", req.params));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});