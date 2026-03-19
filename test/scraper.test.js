const { getResults } = require("../api/scraper")

test("should return results array", async () => {

    const results = await getResults("Lorem ipsum")

    expect(Array.isArray(results)).toBe(true)
    expect(results.length).toBeGreaterThan(0)

    expect(results[0]).toHaveProperty("title")
    expect(results[0].title).toBe("Lipsum generator: Lorem Ipsum - All the facts")
    
    expect(results[0]).toHaveProperty("link")
    expect(results[0].link).toBe("https://www.lipsum.com/")

    expect(results[0]).toHaveProperty("snippet")
    expect(results[0].snippet).toBe("Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.")
})
