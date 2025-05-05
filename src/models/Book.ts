interface Person {
    birth_year?: number;
    death_year?: number;
    name: string;
}
export interface Book {
    title: string;
    subjects: Array<string>;
    authors: Array<Person>;
    summaries: Array<string>;
    translators: Array<Person>;
    bookshelves: Array<string>;
    languages: Array<string>;
    copyright?: boolean;
    media_type: string;
    formats: Object;
    download_count: number;
}
