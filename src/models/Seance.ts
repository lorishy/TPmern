import Film from "./Film";

export default interface Session {
    id: number;
    film: Film;
    date: Date;
    time: string;
    availableSeats: number;
}