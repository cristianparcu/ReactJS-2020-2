import React from 'react';
import Book from '../Book/Book';

var Posts = (props) => {
    return(
        <section>
            {props.libros.map((book, bookIndex) => {
                console.log(props.libros[bookIndex])
                console.log(book.title)
                return (
                    
                    <Book
                        // book = {book}
                        // bookIndex = {bookIndex}
                        // key = {bookIndex}
                        
                        titulo= {book.title}
                        Autor= {book.author}
                        precio={book.price}
                        ima={book.photo}
                    />
                )
            })}
        </section>
    );
}

export default Posts;