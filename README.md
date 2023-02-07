# CineFinder

A movie search site built with React.

The site is called "Cinefinder" and it is a movie search site built using ReactJS. The site uses a custom hook "useSearchParams" from the "react-router-dom" library to retrieve the query term from the URL search parameters. The "useFetch" custom hook is then used to retrieve movie data based on the query term and the API path provided. The "useTitle" custom hook is utilized to set the document title to display the search results for the query term. The movie data is then displayed as a list of cards, each containing information about a specific movie, using the "Card" component.

## Features

- Use of `useSearchParams` hook from `react-router-dom` to fetch query parameters from the URL
- Use of `useFetch` custom hook to fetch data from an API
- Use of `useTitle` custom hook to dynamically set the page title
- Display of movie search results in a grid of cards, each card displaying movie information

## Getting Started

1. Clone this repository:

```powershell

Write-Output "Hello, World!"

```

git clone https://github.com/<your-github-username>/cinefinder.git

2. Install dependencies:

cd cinefinder
npm install

3. Start the development server:

npm start

4. Open `http://localhost:3000` in your browser.

## Built With

- [React](https://reactjs.org)
- [Create React App](https://create-react-app.dev)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)

## License

This project is licensed under the MIT License.

```

```
