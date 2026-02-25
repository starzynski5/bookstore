"use client";

import React, { useEffect, useState } from 'react'
import { Book } from '../types/book';
import axios from 'axios';
import Card from '../components/Card';
import { OrbitProgress } from 'react-loading-indicators';

const page = () => {

    const [books, setBooks] = useState<Book[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            var res = await axios.get("/api/books");
            var data = await res.data;
            setBooks(data);
            setLoaded(true);
        }
        fetchBooks();
    }, []);
    
    return (
        <div className='container-lg'>
            <div className='row justify-content-center mt-2'>

                {
                    !loaded ? (
                        books.map((book) => (
                            <div key={book.id} className='col-11 col-sm-5 col-md-4 col-lg-3 g-4'>
                                <Card title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} />
                            </div>
                        ))
                    ) : (
                        <div className='row mt-5'>
                            <div className='col-12 d-flex justify-content-center'>
                                <OrbitProgress size="large" color="#000" textColor="" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default page
