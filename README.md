# MyReads Project

Built with:

![React](https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d)

![React Router](https://camo.githubusercontent.com/a5f1968a99631284ca552953929cff7b6abb375853bb0944fae0dc520c45c73b/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d52656163742b526f7574657226636f6c6f723d434134323435266c6f676f3d52656163742b526f75746572266c6f676f436f6c6f723d464646464646266c6162656c3d)

![Udacity](https://camo.githubusercontent.com/b3f849182e8fe65cf6efcfc36bc941e4af207ac7f08017a33c37ffbe9e2e0219/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d5564616369747926636f6c6f723d323232323232266c6f676f3d55646163697479266c6f676f436f6c6f723d303242334534266c6162656c3d)

This started as the React Fundamentals project for Udacity's Nanodegree. This is
my implementation of the MyReads Book Lending site.

Of course, you are free to start this project from scratch if you wish! Just be
sure to use [Create React
App](https://reactjs.org/docs/create-a-new-react-app.html) to bootstrap the
project.

---

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## 🤔What You're Getting

```bash
├─ node_modules/
├─ public/
│  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ components/
│  │  ├─ SearchPage.js
│  │  ├─ BooksList.js
│  │  ├─ BookItem.js
│  ├─ icons/
│  ├── add.svg
│  ├── arrow-back.svg
│  └── arrow-drop-down.svg
│  ├─ index.css
│  ├─ App.js # This is the root of your app. Contains static HTML right now.
│  ├─ BooksAPI.js  # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
│  ├─ App.css
│  ├─ index.js # This file is used for DOM rendering only.
├─ .gitignore
├─ package.json  # npm package manager file.
├─ README.md # This file.

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
