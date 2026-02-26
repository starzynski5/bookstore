"use client";

import React, { useEffect, useState } from 'react'
import Hero from './modules/Hero'
import Label from './components/Label'
import Card from './components/Card'
import GoToAction from './modules/GoToAction'
import { Book } from './types/book';
import axios from 'axios';
import { OrbitProgress } from 'react-loading-indicators';

const Home = () => {
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
                    loaded ? (
                        books.map((book) => (
                            <div key={book.id} className='col-11 col-sm-5 col-md-4 col-lg-2 g-4'>
                                <Card title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} url={book.url} />
                            </div>
                        )).slice(0, 5)
                    ) : (
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-center'>
                                <OrbitProgress size="large" color="#000" textColor="" />
                            </div>
                        </div>
                    )
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

