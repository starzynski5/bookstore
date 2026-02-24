"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get('/api/categories');
                setBooks(res.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        fetchBooks();
    }, []);

    console.log(books);

    return (
        <div className='col-11 col-md-10 bg-dark' style={{height: "350px"}}>
            
        </div>
    )
}

export default Hero
