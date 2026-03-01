import { Book } from "@/app/types/book";

export interface Category {
    id: number;
    name: string;
    books: Book[];
}