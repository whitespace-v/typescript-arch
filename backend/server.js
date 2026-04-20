const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: "*"
}))

app.get('/api/hello', (req, res) => {
    res.json({message: "Hello !"})
})

app.listen(3000, () => {
    console.log("Server running on ", 3000);
})
// route: http://localhost:3000/api/hello