# CineFinder

A movie search site built with React.

The site is called "Cinefinder" and it is a movie search site built using ReactJS. The site uses a custom hook "useSearchParams" from the "react-router-dom" library to retrieve the query term from the URL search parameters. The "useFetch" custom hook is then used to retrieve movie data based on the query term and the API path provided. The "useTitle" custom hook is utilized to set the document title to display the search results for the query term. The movie data is then displayed as a list of cards, each containing information about a specific movie, using the "Card" component.

Cinemate is a library that makes it easy to interact with the TMDB API. To use it in your project, you'll need to obtain your own API key from TMDB. The recommended way to store the API key is to use a .env file in the root directory of your project. This will allow you to keep the API key separate from your source code and prevent it from being accidentally committed to source control. Once you have obtained your API key, you can add it to the .env file in the following format:

```javascript
REACT_APP_API_KEY=<your api Key>
```

With the API key properly configured, you should be able to use Cinemate in your project to retrieve movie and TV show data from TMDB.

## Features

- Use of `useSearchParams` hook from `react-router-dom` to fetch query parameters from the URL
- Use of `useFetch` custom hook to fetch data from an API
- Use of `useTitle` custom hook to dynamically set the page title
- Display of movie search results in a grid of cards, each card displaying movie information

## Getting Started

1. Clone this repository:

```powershell
git clone https://github.com/<your-github-username>/cinefinder.git
```

2. Install dependencies:

```powershell
cd cinefinder
npm install
```

3. Start the development server:

```powershell
npm start
```

4. Open `http://localhost:3000` in your browser.

## Built With

- [React](https://reactjs.org)
- [Create React App](https://create-react-app.dev)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)

## License

This project is licensed under the MIT License.
