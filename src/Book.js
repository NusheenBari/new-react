import React from "react"

const Book = ({title, cover,author,illustrator,summary,price}) => {
    const imgStyle = {width: "35%", height:"45%"}
    
    return(
      <section className="books">
        <article>
    <h2>Title: <i>{title}</i></h2>
        </article>
        <article>
          <img alt={title} style={imgStyle} src={cover}/>
        </article>
        <article>
          <h3>{author}</h3>
          <h3>{illustrator}</h3>
          <p>{summary}</p>
        </article>
        <article>
          
    <h3>Price: ${price}</h3>
  
        </article> 
      </section>
    )
  }

export default Book