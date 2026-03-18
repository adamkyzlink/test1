const express = require("express")
const { getResults } = require("./scraper")

const app = express()
app.use(express.static("public"))

app.get("/search", async (req, res) => {
    const query = req.query.q
    const results = await getResults(query)
    res.json(results)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index.html")
})

module.exports = app
