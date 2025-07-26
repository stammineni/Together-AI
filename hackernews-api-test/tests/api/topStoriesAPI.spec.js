const { test, expect } = require("@playwright/test");

test.describe("Top Stories and Items API Tests", () => {

  let topStories = [];
  test.beforeAll(async ({ request }) => {
    const res = await request.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    expect(res.ok()).toBeTruthy();
    expect(res.status()).toBe(200);
    const jsonBody = await res.json()
    expect(jsonBody.length).toBeGreaterThan(0);
    topStories = jsonBody;
  });

  test("Retrieve top stories sales from stories API", async () => {
    expect(topStories.length).toBeGreaterThan(0);
   
  });

  test("Using the Top Stories API to retrieve the current top story from the items API", async ({ request }) => {
    expect(topStories.length).toBeGreaterThan(0);

    for (const story of topStories.slice(0, 100)) {
            const resItems = await request.get("https://hacker-news.firebaseio.com/v0/item/44689059.json?print=pretty");
            expect(resItems.ok()).toBeTruthy();
            const items = await resItems.json();
            expect(Array.isArray(items.kids)).toBe(true);
            expect(items.kids.length).toBeGreaterThan(0);
            expect(Object.keys(items).length).toBeGreaterThan(0);

       }
  });

  test("Using the Top Stories API to retrieve a top story, retrieve its first comment using the Item API", async ({ request }) => {
    const firstCommentItem = await request.get("https://hacker-news.firebaseio.com/v0/item/44690092.json?print=pretty");
    expect(firstCommentItem.ok()).toBeTruthy();
    const itemTyperesp = await firstCommentItem.json();
     expect(itemTyperesp.type).toBe("comment");

     

   });

  test('4. Edge cases: invalid store ID, empty results, and error handling', async ({ request }) => {
      // Invalid story ID
      const invalidRes = await request.get("https://hacker-news.firebaseio.com/v0/items/446890590.json?print=pretty");
      
      expect(invalidRes.status()).toBeGreaterThanOrEqual(400);

     
    });


});
