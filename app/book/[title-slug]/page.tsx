"use client";

import BigCard from '@/app/components/BigCard';
import { Book } from '@/app/types/book';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { OrbitProgress } from 'react-loading-indicators';

type Props = {
    params: {
        "title-slug": string;
    }
}

const page = ({params}: Props) => {
    const title = params["title-slug"];

    const [book, setBook] = useState<Book>();
    const [loaded, setLoaded] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [checkedLogin, setCheckedLogin] = useState(false);
    
    useEffect(() => {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('isLoggedIn='));
    if (cookieValue) {
        const value = cookieValue.split('=')[1];
        setIsLoggedIn(value === 'true');
        setCheckedLogin(true);
    } else {
        setIsLoggedIn(false);
        setCheckedLogin(true);
    }
    }, [])

    useEffect(() => {
        const fetchBook = async () => {
            const res = await axios.get(`/api/books/url`, {
                params: {
                    titleSlug: title
                }
            });
            
            const data = await res.data;
            setBook(data);
            setLoaded(true);
        }
        fetchBook();
    }, [])

    return (
        <div>
            {
                loaded && book && checkedLogin ? (
                    <div className='row mt-5'>
                        <BigCard id={book.id} title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} url={book.url} isUserLogged={isLoggedIn} />
                    </div>
                ) : (
                    <div className='row mt-5'>
                        <div className='col-12 d-flex justify-content-center'>
                            <OrbitProgress size="large" color="#000" textColor="" />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default page
