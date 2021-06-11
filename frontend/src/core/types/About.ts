export type AboutResponse = {
    content: About[];
}

export type About = {
    id: number;
    imgUrl: string;
    description: string;
}
