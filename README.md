### Bookstore

This project is a frontend application developed using ReactJs to interact with the Softwium Fake API for managing books. It includes UI pages to display a list of books and their details, fetched dynamically from the provided APIs.

*Technology Stack*
- [React.js]
- [React Router]
- Axios (for API requests)

*Understanding and Testing APIs*
To understand and test the APIs provided by Softwium, follow these steps:
1. Familiarize yourself with the APIs provided at softwium.com/fake-api/.
2. Test the following APIs using Postman:
   - GET /Books - softwium.com/api/books
   - GET /Books/id - softwium.com/api/books/23

*Frontend Application Requirements*
*Books Page* (http://localhost:<port>/books)
- Display links to all books, with each book name as a clickable link.
- Load books dynamically into the UI by making an API call to the GET /Books API.

*Book-Details Page* (http://localhost:3000/books/id)
- Display the following details of the selected book by making a call to the GET /Books/id API:
  - Title
  - ISBN
  - PageCount
  - Authors
- Create a link from the Books Page to navigate to the Book-Details Page for each book.

*Implementation Guidelines*
- Use component-based architecture and state management best practices.
- Implement routing functionality to navigate between different pages.
- Ensure proper error handling and loading states when fetching data from APIs.
- Follow responsive design principles to make the application mobile-friendly.

*Installation and Setup*
1. Clone the repository:

   git clone https://github.com/Prasad-Padwal/Hirademy_Frontend.git
   
3. Install dependencies:
  
   cd softwium-bookstore-frontend
   npm install
   
4. Start the development server:
   
   npm start
  
5. Access the application:
   Open your browser and go to [http://localhost:<port>/books](http://localhost:3000/books) to view the Books Page."
