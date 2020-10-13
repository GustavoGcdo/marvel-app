import { Thumbnail } from './thumbnail';

export interface Comic {
    id: number;
    title: string;
    description: string;
    pageCount: number;
    thumbnail: Thumbnail;
    images: Thumbnail[];
    creators: any[];
    characters: any[];
    stories: any[];
    events: any[];
}
