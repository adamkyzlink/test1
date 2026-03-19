const express = require("express")
const { getResults } = require("./api/scraper")

const app = express()
app.use(express.static("public"))

app.get("/search", async (req, res) => {
    const query = req.query.q
    const results = await getResults(query)
    res.json(results)
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

module.exports = app

// For local development
if (process.env.NODE_ENV !== "production") {
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000")
    })
}
