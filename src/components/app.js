import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';

class App extends Component {
  render() {
    return (
      <div>
        <div className="bookListContainer">
          <BookList />
        </div>
        <div className="bookDetailContainer" >
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
