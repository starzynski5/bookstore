import { Category } from "./category";

export interface Book {
    id: number;
    title: string;
    author: string;
    content: string;
    coverLink: string;
    categoryId: number;
    category: Category;
}