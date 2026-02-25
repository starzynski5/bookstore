"use client";

import React, { useEffect, useState } from 'react'
import { Category } from '../types/category';
import axios from 'axios';
import Card from '../components/Card';
import Label from '../components/Label';

const AllCategoriesRender = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const res = await axios.get("/api/categories");

            const data = await res.data;

            setCategories(data);
        }
        fetchCategories();
    }, []);

    if (categories.length === 0) return (
        <></>
    );

    console.log(categories);

    return (
        <div className='container-lg'>
            {categories.map((category) => {
                return (
                    <div key={category.id}>
                        <div className='row mt-3'>
                            <Label text={category.name} bootstrapIcon='bi bi-book' fs={3} />
                        </div>

                        <div className='row'>
                            {category.books.map((book) => (
                                <div key={book.id} className='col-11 col-sm-5 col-md-4 col-lg-3 g-3'>
                                    <Card title={book.title} author={book.author} content={book.content} coverLink={book.coverLink} />
                                </div>
                            )).slice(0, 4)}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllCategoriesRender
