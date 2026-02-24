"use client";

import React, { useEffect, useState } from 'react'
import { Book } from '../types/book';
import axios from 'axios';
import Card from '../components/Card';

const page = () => {

    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            var res = await axios.get("/api/books");
            var data = await res.data;
            setBooks(data);
        }
        fetchBooks();
    }, []);

    console.log(books);

    if (books.length === 0) return (
        <></>
    )
    
    return (
        <div className='container-lg'>
            <div className='row justify-content-center mt-2'>

                {
                    books.map((book) => (
                        <div key={book.id} className='col-11 col-sm-5 col-md-4 col-lg-3 g-4'>
                            <Card title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default page
