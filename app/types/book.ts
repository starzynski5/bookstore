import { Category } from "./category";

export interface Book {
    id: number;
    title: string;
    author: string;
    content: string;
    coverLink: string;
    url: string;
    categoryId: number;
    category: Category;
}