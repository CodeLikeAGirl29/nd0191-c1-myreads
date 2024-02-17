# MyReads Project

Link to demo site can be found [here](https://myreads-react.vercel.app/).

Built with:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Udacity](https://img.shields.io/badge/Udacity-grey?style=for-the-badge&logo=udacity&logoColor=15B8E6)

This started as the React Fundamentals project for Udacity's Nanodegree. This is
my implementation of the MyReads Book Lending site.

Of course, you are free to start this project from scratch if you wish! Just be
sure to use [Create React
App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the
project.

---

![](https://res.cloudinary.com/codelikeagirl29/image/upload/v1708174712/MyReads_dmw8lx.png)

---

## TL;DR

To get started developing right away:

- install all project dependencis with `npm install`
- start the development server with `npm start`

## 🤔What You're Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── .gitignore
├── node_modules/
├── public/
│   ├── ├─ favicon.ico
│   └── └─ index.html
└── src/
    ├── components/
    │   ├── SearchPage.js
    │   ├── BooksList.js
    │   └── BookItem.js
    ├── icons/
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── App.css
    └── index.js # Used for DOM rendering only
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
