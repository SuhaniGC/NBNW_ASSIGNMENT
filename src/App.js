import React, { useState, useEffect } from "react";
import NewsArticleCard from "./widgets/news_article_card";
import "./App.css";

let currentArticle = 6;
let title = "Latest News";

function App() {
  const newsapi = "334fcd3ac55c461187cfcf595a791931";
  // const newsapi = "c44cc5331f984fc5aaee23b46ffff369";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapi}`).then((response) => {
        if (response.status !== 200) {
          alert("Your api key limit has been reached. Please use another api key.");
          return;
        }
      response.json().then((data) => {
        setArticles(data.articles.slice(0, currentArticle));
        setLoading(false);
      });
    }
    );
  }
  , [
    
  ]);

  const onLoadMore = () => {
    console.log("Load More");
    currentArticle += 3;
    console.log(title);
    if (title === 'Latest News'){
      fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapi
    }`).then((response) => {
      response.json().then((data) => {
        setArticles(data.articles.slice(0, currentArticle));
        setLoading(false);
      });
    }
    );
  }
    else{
      fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${title}&apiKey=${newsapi
    }`).then((response) => {
      response.json().then((data) => {
        setArticles(data.articles.slice(0, currentArticle));
        setLoading(false);
      });
    }
    );
  }
  };

  const onCategorySelect = (category) => {
    title = category;
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsapi
    }`).then((response) => {
      response.json().then((data) => {
        setArticles(data.articles.slice(0, currentArticle));
        setLoading(false);
      });
    }
    );
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <nav>
          <ul>
            <li onClick={() => onCategorySelect("business")}>Business</li>
            <li onClick={() => onCategorySelect("entertainment")}>Entertainment</li>
            <li onClick={() => onCategorySelect("general")}>General</li>
            <li onClick={() => onCategorySelect("health")}>Health</li>
            <li onClick={() => onCategorySelect("science")}>Science</li>
            <li onClick={() => onCategorySelect("sports")}>Sports</li>
            <li onClick={() => onCategorySelect("technology")}>Technology</li>
          </ul>
        </nav>
      </header>
      <div className="news-articles">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          articles.map((article, index) => {
            if (!article.urlToImage || !article.title || !article.description || !article.url) {
              
              return null;
            }
            return (
              <NewsArticleCard
                key={index}
                image={article.urlToImage}
                title={article.title}
                description={article.description}
                url={article.url}
              />
            );
          })
        )}
      </div>
      <button className="load-more-button" onClick={onLoadMore}>Load More</button>
    </div>
  );
}

export default App;