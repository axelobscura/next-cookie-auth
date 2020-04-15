const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3001;
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.post('/api/login', (req, res) => {
        const { email, password } = req.body;
        res.json({
            email,
            password,
            success: true
        })
    })
    server.get('*', (req, res) => {
        return handler(req, res);
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on port ${port}`);
    })
})