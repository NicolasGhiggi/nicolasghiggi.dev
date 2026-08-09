export type Post = {
    slug: string;
    title: string;
    image?: string;
    date: Date;
    readingTime?: string;
    tags: string[];
}

export type Posts = Post[]