export interface IWilder {
    name: string;
    city: string;
    skills: ISkill[];
}


export interface ISkill {
    title: string;
    votes: number;
}