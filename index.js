const express = require("express")
const app = express()
const port = process.env.PORT || 5000

function greeting(req, res) {
    const object = {
        greeting: 'Hello again'
    }
    return res.json(object)
}

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/greeting', greeting);

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));