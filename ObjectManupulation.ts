/*2. Task: Object Manipulation

Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result. */

const books = {
  books: [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ],
};

const filterTitle = (arr) => {
  const result = arr.map((book) => book.title);

  return result;
};

console.log(filterTitle(books.books));
