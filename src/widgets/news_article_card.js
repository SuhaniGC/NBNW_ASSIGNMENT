import React from 'react';
import '../css/news_article_card.css';

function NewsArticleCard(props) {
    return (
        <div className="news-article-card col">
            <img src={props.image || "https://via.placeholder.com/150"} alt="news article" />
            <p>{props.title.length > 30 ? props.title.substring(0, 30) + "..." : props.title}</p>
            <span>{props.description ? props.description.substring(0, 50) + "..." : "Description not available"}</span>
            <a href={props.url}>Read more</a>
        </div>
    );
}

export default NewsArticleCard;