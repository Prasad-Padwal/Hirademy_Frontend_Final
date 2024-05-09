import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow container mx-auto py-6 px-4">
        <Routes>
         
          
          <Route path="/" element={<BookList />} />

 
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 py-4 text-center">
       <p className="text-white">
         Made By @Prasad Padwal
        </p>
      </footer>
    </div>
  );
}

export default App;