import React from "react";
import BookItem from "./BookItem";

const GetBooks = ({ searchedBooks, fetchedBooks, changeBookShelf }) => {
	return (
		<ol className='books-grid'>
			{searchedBooks.length > 0 &&
				searchedBooks.map((book) => {
					const bookShelf = fetchedBooks.find(
						(foundShelfBook) => foundShelfBook.id === book.id
					);
					bookShelf ? (book.shelf = bookShelf.shelf) : (book.shelf = "none");
					return (
						<BookItem
							key={book.id}
							book={book}
							onShelfChange={changeBookShelf}
						/>
					);
				})}
			{searchedBooks.length === 0 && <h1>No books found</h1>}
		</ol>
	);
};

export default GetBooks;
