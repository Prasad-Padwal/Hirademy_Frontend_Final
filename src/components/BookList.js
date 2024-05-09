import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BookList.css';

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://softwium.com/api/books')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="book-list">
     <h1 className="border-solid border-2 border-white text-white text-center text-3xl font-bold 
     mb-5 px-4 py-2">
      Book List
    </h1>
      <div className="card-container">
        {books.map((book) => (
          <div key={book.id} className="card">
            <div className="card-inner ">
              <Link to={`/books/${book.id}`} className="book-title">
                {book.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;