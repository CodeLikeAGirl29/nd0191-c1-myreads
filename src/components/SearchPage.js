import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import * as BooksAPI from "../BooksAPI";

class SearchPage extends Component {
	state = {
		books: [],
		query: "",
	};

	handleUpdateQuery(query) {
		BooksAPI.search(query).then((books) =>
			books ? this.setState({ books }) : []
		);
		this.setState({ query });
	}

	handleBookShelf(book, shelf) {
		BooksAPI.update(book, shelf)
			.then(() =>
				shelf !== "none"
					? console.log(`${book.title} has been added to your library!`)
					: null
			)
			.catch(() => alert("Oops! That was our fault somehow.."));
	}

	renderSearchResults() {
		const { books, query } = this.state;

		if (query) {
			return books.error ? (
				<div>Nothing found</div>
			) : (
				books.map((book, index) => {
					return (
						<BookItem
							key={index}
							book={book}
							handleBookShelf={this.handleBookShelf.bind(this)}
						/>
					);
				})
			);
		}
	}

	render() {
		return (
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/' className='close-search'>
						Close
					</Link>
					<div className='search-books-input-wrapper'>
						<input
							type='text'
							placeholder='Search by title, author, or subject'
							value={this.state.query}
							onChange={(e) => this.handleUpdateQuery(e.target.value)}
						/>
					</div>
				</div>
				<div className='search-books-results'>
					<ol className='books-grid'>{this.renderSearchResults()}</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;
