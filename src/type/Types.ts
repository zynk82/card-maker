export type User = {
    name?: string;
    email?: string;
    uid?: string;
}

export type Card = {
    id: number|undefined,
    name: string,
    company: string,
    color: string,
    job: string,
    email: string,
    message: string,
    fileName?: string,
    fileURL?: string,
}

export type CardColor = 'Dark' | 'Colorful' | 'Light';