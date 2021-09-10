export type AboutResponse = {
    content: About[];
}

export type About = {
    id: number;
    imageURL: string;
    description: string;
}
