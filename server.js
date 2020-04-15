const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3001;
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.get('*', (req, res) => {
        return handler(req, res);
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on port ${port}`);
    })
})