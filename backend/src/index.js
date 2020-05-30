const express = require('express')

const app = express()

app.get('/', (request, response) => {
    return response.json({ ok: true })
})

app.listen(3333, () => [
    console.log('Server listening on port 3333')
])