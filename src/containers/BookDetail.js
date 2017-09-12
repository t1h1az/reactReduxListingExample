import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div>...click a book to display summary</div>;
    }
    return (
      <div>
        <div className="bookDetailShort">
          {this.props.activeBook.short}
        </div>
        <div className="bookDetailSeperator"></div>
        <div className="bookDetailAuthor">
          -  {this.props.activeBook.author}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
