import React from 'react';
import { connect } from 'react-redux';

const applyFilter = searchTerm => article =>
  article.title.toLowerCase().includes(searchTerm.toLowerCase());

const App = ({ articles, searchTerm, onSearch }) =>
  <div>
    <Search value={searchTerm} onSearch={onSearch}>
      <p>Search</p>
    </Search>

    <Articles articles={articles.filter(applyFilter(searchTerm))} />

    <p>Take the journey to learn Redux in <a href={'https://roadtoreact.com/'}>Taming the State in React</a></p>
  </div>

const Search = ({ value, onSearch, children }) =>
  <div>
    {children} <input
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
    />
  </div>

const Articles = ({ articles }) =>
  <ul>
    {articles.map(article =>
      <li key={article.id}>
        <Article article={article} />
      </li>
    )}
  </ul>

const Article = ({ article }) =>
  <a href={article.url}>{article.title}</a>

// connecting view layer to state layer with react-redux

const mapStateToProps = state => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
