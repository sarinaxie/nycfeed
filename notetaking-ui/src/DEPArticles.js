import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


import "./DEPArticles.css";
const ARTICLES_QUERY = gql`
 {
  getSiteArticles(site: "dep") {
    title
    content
    date
    url
  }
 }
 `;


const DEPArticles = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container m-t-20">
      
      <div className="allarticles">
        {data.getSiteArticles.map(article => (
          <div className="columnidk" key={article._id}>
            <div className="card">
              <a href={article.url} target="_blank">
              <div className="card-date">{article.date}</div>
                <div className="card-title">{article.title}</div>          
              <div className="card-cont">
                  {article.content}
              </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DEPArticles;
