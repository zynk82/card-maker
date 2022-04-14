export type User = {
    name?: string;
    email?: string;
    uid?: string;
}

export type Card = {
    id: number,
    name: string,
    company: string,
    color: CardColor,
    job: string,
    email: string,
    message: string,
    fileName?: string,
    fileURL?: string,
}

export type CardColor = 'Dark' | 'Colorful' | 'Light';