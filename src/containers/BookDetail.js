import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <div>...click a book to display summary</div>;
    }
    return (
      <div className="col s12 m7">
          <div className="card horizontal">
            <div className="card-image">
              <img src="https://unsplash.it/200/300/?random"></img>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{this.props.activeBook.short}</p>
              </div>
              <div className="card-action right-align">
                  <p> - {this.props.activeBook.author}</p>
              </div>
            </div>
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
