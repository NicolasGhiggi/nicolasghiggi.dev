export type Post = {
    slug: string;
    title: string;
    image?: string;
    date: Date;
}

export type Posts = Post[]