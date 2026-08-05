export type Project = {
    // Information
    name: string;
    slug: string;
    description: string;
    image: string;
    // status: 'completed' | 'in progress';
    technologies: string[]
    createdAt: Date;

    // External links
    github?: string;
    link?: string;

    featured?: boolean;
}

export type Projects = Project[]
