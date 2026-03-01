"use client"

import React, { useEffect, useState } from 'react'
import { Book } from '@/app/types/book'
import axios from 'axios';
import SubscribedBookCard from '@/app/components/SubscribedBookCard';
import { OrbitProgress } from 'react-loading-indicators';

const Dashboard = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [bookCount, setBookCount] = useState(0);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get('/api/books/subscribed');
            setBooks(res.data);
            setBookCount(res.data.length);
            setLoaded(true);
        }
        fetchBooks();
    }, [])

    const handleUnsubscribe = async (id: number) => {
        await axios.post(`/api/books/unsubscribe`, { bookId: id });
        setBooks(books.filter(book => book.id !== id));
        setBookCount(bookCount - 1);
    }

    return (
        <>
            <div className='row my-5'>
                <span className='text-center fs-4'>Welcome to the Dashboard</span>
                <span className='text-center fs-6 my-2'>Here you can manage your all subscribed books</span>
                <span className='text-center fs-7'>{`And you subscribe to ${bookCount} books`}</span>
            </div>

            <div className='row justify-content-center'>
                {
                    loaded ? (
                        books.map((book) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-3 my-2'>
                                    <SubscribedBookCard id={book.id} key={book.id} title={book.title} author={book.author} coverLink={book.coverLink} url={book.url} onUnsubscribe={handleUnsubscribe} />
                                </div>
                            )
                        })
                    ) : (
                        <div className='row mt-5'>
                            <div className='col-12 d-flex justify-content-center'>
                                <OrbitProgress size="large" color="#000" textColor="" />
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Dashboard
