export interface IWilder {
    _id: string;
    name: string;
    city: string;
    image: string;
    skills: ISkill[];
}

export interface ISkill {
    title: string;
    votes: number;
}