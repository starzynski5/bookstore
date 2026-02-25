"use client";

import React, { useEffect, useState } from 'react'
import Hero from './modules/Hero'
import Label from './components/Label'
import Card from './components/Card'
import GoToAction from './modules/GoToAction'
import { Book } from './types/book';
import axios from 'axios';

const Home = () => {
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
        <>
            <div className='row justify-content-center my-5'>
                <Hero />
            </div>

            <div className='row justify-content-center'>
                <div className='col-11 col-md-10 px-0'>
                    <Label text='Recommended Books' bootstrapIcon='bi bi-stars' fs={5} />
                </div>
            </div>

            <div className='row justify-content-center mt-2'>

                {
                    books.map((book) => (
                        <div key={book.id} className='col-11 col-sm-5 col-md-4 col-lg-2 g-4'>
                            <Card title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} />
                        </div>
                    )).slice(0, 5)
                }
            </div>

            <div className='row justify-content-center mt-5'>
                <div className='col-11 col-md-10 px-0'>
                    <GoToAction />
                </div>              
            </div>
        </>
    )
}

export default Home

