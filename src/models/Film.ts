import Director from "./Director";

export default interface Film {
    id: number;
    title: string;
    releaseYear: number;
    genre: string;
    directors: Director[];
}