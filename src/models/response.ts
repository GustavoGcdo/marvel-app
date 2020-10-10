export interface MarvelResponse<T> {
    data: T;
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
}