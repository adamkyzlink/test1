const { getJson } = require("serpapi")

async function getResults(query) {

    return new Promise((resolve, reject) => {

        getJson({
            engine: "google",
            q: query,
            api_key: "2065ff1d6a02e0a1ea676f1e461fb6b725ed83df794bd0b5aa34f914ee7bf620",
        }, (json) => {

            const results = json.organic_results.slice(0, 10).map(r => ({
                title: r.title,
                link: r.link,
                snippet: r.snippet
            }))

            resolve(results)
        })
    })
}

module.exports = { getResults }