import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import GetBooks from "./GetBooks";
import { Link } from "react-router-dom";

const SearchPage = ({ changeBookShelf, fetchedBooks }) => {
	const [term, setTerm] = useState("");
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const timerID = setTimeout(() => {
			setDebouncedTerm(term);
		}, 300);

		return () => {
			clearTimeout(timerID);
		};
	}, [term]);

	useEffect(() => {
		const searchBooks = (term) => {
			if (term.length !== 0) {
				BooksAPI.search(term).then((books) => {
					if (!books.error) {
						setBooks(books);
					} else {
						setBooks([]);
					}
				});
			} else {
				setBooks([]);
			}
		};
		searchBooks(term);
	}, [term, debouncedTerm]);

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link to='/'>
					<button className='close-search'>Close</button>
				</Link>
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						placeholder='Search by title or author'
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<GetBooks
					searchedBooks={books}
					fetchedBooks={fetchedBooks}
					changeBookShelf={changeBookShelf}
				/>
			</div>
		</div>
	);
};

export default SearchPage;
