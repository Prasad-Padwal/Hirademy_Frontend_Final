import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://softwium.com/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return<div class="loading">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  if (!book) {
    return <div className="text-center text-red-500">Book not found</div>;
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-6 text-white">
      <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
      <div> </div>
      <p className="mb-4">
        <span className="font-semibold">ISBN:</span> {book.isbn}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Page Count:</span> {book.pageCount}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Authors:</span> {book.authors.join(', ')}
      </p>
      <p className="text-gray-300">{book.description}</p>
      <div className="mt-6">
        <Link
          to="/"
          className="bg-gray-700 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300"
        >
          Back to Book List
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;