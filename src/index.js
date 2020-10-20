import React from 'react';
import ReactDOM from 'react-dom';
import books from './books'

 
function BookList(){
  const booksLists = books.map(item => <Book key={item.id} item={item}/>)
  return(
    <>
    {booksLists}
    </>
  )
}

const Book = (props) => {
  const imgStyle = {width: "35%", height:"45%"}
  return(
    <section>
      <article>
  <h2>Title: <i>{props.item.title}</i></h2>
      </article>
      <article>
        <img style={imgStyle} src={props.item.cover}/>
      </article>
      <article>
        <h3>{props.item.author}</h3>
        <h3>{props.item.illustrator}</h3>
        <p>{props.item.summary}</p>
      </article>
      <article>
  <h3>Price: ${props.item.price}</h3>
      </article>
    </section>
  )
}


ReactDOM.render(<BookList/>, document.getElementById('root'))
