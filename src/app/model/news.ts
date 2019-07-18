export interface News {
    business: Array<NewsItem>;
    entertainment: Array<NewsItem>;
    health: Array<NewsItem>;
    science: Array<NewsItem>;
    sports: Array<NewsItem>;
    technology: Array<NewsItem>;
}

export interface NewsItem {
    author: string;
    content: string|null;
    description: string|null;
    publishedAt: string|Date;
    source: object|null;
    title: string;
    url: string;
    urlToImage: string|null;
}
