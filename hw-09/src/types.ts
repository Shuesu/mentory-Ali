export type Course = {
    id: string;
    title: string;
    category: 'frontend' | 'fullstack' | 'quality';
    seats: number;
    version: number;
};