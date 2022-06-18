import React from "react";
import Bookshelf from "./Bookshelf";

const Shelves = ({ books, onShelfChange }) => {
	const currentlyReading = books.filter(
		(fetchedBook) => fetchedBook.shelf === "currentlyReading"
	);
	const wantToRead = books.filter(
		(fetchedBook) => fetchedBook.shelf === "wantToRead"
	);
	const read = books.filter((fetchedBook) => fetchedBook.shelf === "read");

	return (
		<div className='list-books-content'>
			<div>
				<Bookshelf
					fetchedBooks={currentlyReading}
					shelfTitle='Currently Reading'
					onShelfChange={onShelfChange}
				/>
				<Bookshelf
					fetchedBooks={wantToRead}
					shelfTitle='Want to Read'
					onShelfChange={onShelfChange}
				/>
				<Bookshelf
					fetchedBooks={read}
					shelfTitle='Read'
					onShelfChange={onShelfChange}
				/>
			</div>
		</div>
	);
};

export default Shelves;
