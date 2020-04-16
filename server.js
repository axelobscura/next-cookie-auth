const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3001;
const app = next({ dev });
const handler = app.getRequestHandler();
const axios = require('axios');

const authenticate = async (email, password) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data.find(user => {
        if (user.email === email && user.website === password) {
            return user;
        }
    })
}

app.prepare().then(() => {
    const server = express();
    server.use(express.json());
    server.post('/api/login', async (req, res) => {
        const { email, password } = req.body;
        const userData = await authenticate(email, password);
    })
    server.get('*', (req, res) => {
        return handler(req, res);
    });
    server.listen(port, err => {
        if (err) throw err;
        console.log(`Listening on port ${port}`);
    })
})