import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className="list-group-item"
          key={book.title}
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      )
    })
  }

  render() {
     return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props from the BookList container
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should be passed to all our reducers 
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

// Promote BookList from a Component to a Container - it needs to know about his new dispatch method,
// selectBook. Make it availabe as a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
