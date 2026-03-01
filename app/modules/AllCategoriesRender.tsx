"use client";

import React, { useEffect, useState } from 'react'
import { Category } from '@/app/types/category';
import axios from 'axios';
import Card from '@/app/components/Card';
import Label from '@/app/components/Label';
import { OrbitProgress } from 'react-loading-indicators';

const AllCategoriesRender = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get("/api/categories");

            const data = await res.data;

            setCategories(data);

            setLoaded(true);
        }
        fetchCategories();
    }, []);

    return (
        <div className='container-lg'>
            {
                loaded ? (
                    categories.map((category) => {
                        return (
                            <div key={category.id}>
                                <div className='row mt-3'>
                                    <Label text={category.name} bootstrapIcon='bi bi-book' fs={3} />
                                </div>

                                <div className='row'>
                                    {category.books.map((book) => (
                                        <div key={book.id} className='col-11 col-sm-5 col-md-4 col-lg-3 g-3'>
                                            <Card title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} url={book.url} />
                                        </div>
                                    )).slice(0, 4)}
                                </div>
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
    )
}

export default AllCategoriesRender
