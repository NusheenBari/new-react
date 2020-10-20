import React from 'react';
import ReactDOM from 'react-dom';
import books from './books'
import Book from './Book'
import './index.css'
 
function BookList(){
  const booksLists = books.map(item => <Book key={item.id} {...item}/>)
  return(
    <section className="bookList">
      {booksLists}
    </section>
  )
}




ReactDOM.render(<BookList/>, document.getElementById('root'))
