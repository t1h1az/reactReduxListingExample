import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderBookList() {
    return this.props.books.map((book) => {
      return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="collection-item">
            {book.title}
          </li>
      );
    });
  }

  render() {
    return (
      <ul className="collection ">
        {this.renderBookList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
