# Together-AI
API Testing with Playwright (JavaScript)

This project contains automated API tests written in **Playwright** using **JavaScript** to verify the functionality and reliability of the **Top Stories and Items APIs**.

Test Cases Covered

1.	Top Stories and Items API Tests
Fetch top hackernews stories from the endpoint 
https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
2.	Using the Top Stories API to retrieve the current top story from the Items API
3.	Using the Top Stories API to retrieve a top story, retrieve its first comment using the Items API
4.	Edge Case Handling
-	Invalid endpoint and Id


Install Dependencies
npm install
Run the Tests
npx playwright test
Tech Stack
•	Playwright – Browser and API automation
•	JavaScript (ES6)
•	Node.js


Project Structure
•	.
•	├── tests/
•	│   └── api/
•	│       └── topStoresAPI.spec.js
•	├── playwright.config.js
•	├── package.json
•	└── README.md

Configuration
playwright.config.js or modify the request timeout and parallel calls in the test accordingly.

