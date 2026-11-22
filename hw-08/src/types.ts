export type Category = 'frontend' | 'fullstack' | 'quality';

export type Course = {
    id: string;
    title: string;
    category: Category;
    seats: number;
    version: number;
};