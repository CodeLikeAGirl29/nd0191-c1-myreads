import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Shelves from "./components/Shelves";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const BooksApp = () => {
	const [fetchedBooks, setFetchedBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const response = await BooksAPI.getAll();
			if (response.error) {
				console.log("Network Error");
			}
			setFetchedBooks(response);
		};
		getBooks();
	}, []);

	const changeBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf);
		if (shelf === "none") {
			setFetchedBooks(fetchedBooks.filter((b) => b.id !== book.id));
		} else {
			book.shelf = shelf;
			setFetchedBooks(
				fetchedBooks.filter((b) => b.id !== book.id).concat(book)
			);
		}
	};

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/search'>
						<SearchPage
							changeBookShelf={changeBookShelf}
							fetchedBooks={fetchedBooks}
						/>
					</Route>
				</Switch>
				<div className='list-books'>
					<Switch>
						<Route exact path='/'>
							<div className='list-books-title'>
								<h1>MyReads</h1>
							</div>
							<Shelves books={fetchedBooks} onShelfChange={changeBookShelf} />
						</Route>
					</Switch>

					<div className='open-search'>
						<Link to='/search'>
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</div>
		</Router>
	);
};

export default BooksApp;
