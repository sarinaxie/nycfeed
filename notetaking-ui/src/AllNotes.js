import React from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { notify } from "react-notify-toast";


import "./AllNotes.css";
const ARTICLES_QUERY = gql`
 {
  getSiteArticles(site: "dep") {
    title
    content
    _id
    date
    site
  }
 }
 `;
const NOTES_QUERY = gql`
  {
    allNotes {
      title
      content
      _id
      date
    }
  }
`;

const DELETE_NOTE_QUERY = gql`
  mutation deleteNote($_id: ID!) {
    deleteNote(_id: $_id) {
      title
      content
      _id
      date
    }
  }
`;

const AllNotes = () => {
  // const { loading, error, data } = useQuery(NOTES_QUERY);
  const { loading, error, data } = useQuery(ARTICLES_QUERY);

  // const [deleteNote] = useMutation(DELETE_NOTE_QUERY, {
  //   update(
  //     cache,
  //     {
  //       data: { deleteNote }
  //     }
  //   ) {
  //     const { allNotes } = cache.readQuery({ query: NOTES_QUERY });
  //     const newNotes = allNotes.filter(note => note._id !== deleteNote._id);

  //     cache.writeQuery({
  //       query: NOTES_QUERY,
  //       data: { allNotes: newNotes }
  //     });
  //   }
  // });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className="container m-t-20">
      
      <div className="allarticles">
        {data.getSiteArticles.map(article => (
          <div className="columnidk" key={article._id}>
            <p>{article.title}</p>
            <p>{article.content}</p>
            
            <p>{article.date}</p>
            <p>{article.site}</p>
          </div>
        ))}
      </div>

      {/* <div className="allnotes-page">
          {data.allNotes.map(note => (
            <div className="column is-one-third" key={note._id}>
              <div className="card-placeholder">
                <a href="https://stackoverflow.com/questions/54915333/react-open-link-in-a-new-tab">
                <header className="card-header-placeholder">
                  <p className="card-header-title-placeholder">{note.title}</p>
                </header>
                <div className="date">Date brackets note.date?</div>
                <div className="card-content-placeholder">
                  <div className="content-placeholder">
                    {note.content}
                    <br />
                  </div>
                </div>
                </a>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default AllNotes;
