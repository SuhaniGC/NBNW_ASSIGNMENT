# News Article Viewer

This project is a simple news article viewer built using React and the News API. It allows users to view top headlines and filter news articles by category.

# Getting Started

To get started with this project, follow these steps:

### 1. Clone the repository to your local machine:

```
git clone https://github.com/SuhaniGC/NBNW_ASSIGNMENT.git
```

### 2. Install dependencies:
```
cd NBNW_ASSIGNMENT
npm install
```
Obtain an API key from [News API](https://newsapi.org/docs/endpoints/top-headlines) and replace the newsapi variable in App.js with your API key.

### 3. Start the development server:
```
npm start

```
Open your browser and navigate to http://localhost:3000 to view the app.

# Usage

Upon opening the app, you'll see the latest news headlines.
You can click on the category names in the navigation bar to view news articles specific to that category.
Clicking on the "Load More" button will load additional news articles.
Clicking on a news article card will redirect you to the full article.

# How News Headlines are Fetched

News headlines are fetched using the [News API](https://newsapi.org/docs/endpoints/top-headlines).

The useEffect hook in App.js makes a GET request to the [News API](https://newsapi.org/docs/endpoints/top-headlines) endpoint to retrieve top headlines.

The fetched articles are then displayed in the app.

# Error Handling

If the API request fails (e.g., due to an invalid API key or rate limiting), an error message will be displayed to the user.

Error handling is implemented in App.js to handle API request failures gracefully.

Users will be alerted if there's an issue with fetching news articles, and no articles will be displayed until the issue is resolved.

# Running from the Command Line

To run the project from the command line, you can use the following commands:

```
git clone https://github.com/SuhaniGC/NBNW_ASSIGNMENT.git
```

```
cd NBNW_ASSIGNMENT
npm install
npm start
```

After running these commands, open your browser and navigate to http://localhost:3000 to view the app.

# Dependencies

React: A JavaScript Framework for building user interfaces.

News API: An API for accessing news articles from various sources.

# Credits
This project was created by [SUHANI_GUPTA]. 
Special thanks to News API for providing the news data.