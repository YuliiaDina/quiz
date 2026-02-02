import advisorData from "../data/advisors.json";

export interface Advisor{
    id:string;
    name:string;
    location:string;
    bio:string;
    specialties:Array<string>;
    serviceModel:string;
}

export const advisors: Advisor[] = advisorData as Advisor[];