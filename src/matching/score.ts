/*
import {advisor} from "../ts/advisor"
import { answer } from "../ts/answer";
const firstQuestionWeight: number= 2;
const secondQuestionWeigt: number = 1;

export function a(userAns:answer,advisorsData:advisor[]){
    let find:Record<string, number> = {};
    advisorsData.forEach((advisor) =>{
        for(let i = 0;i<advisor.specialties.length;i++){
            if(userAns.firstAnswer === advisor.specialties[i]){
                find.set({[advisor.id]:firstQuestionWeight})
            }
        }
        if(advisor.serviceModel === userAns.secondAnswer){
            find[advisor.id] += secondQuestionWeigt;
        }
    
    })
    return advisorSort(find);
}
function advisorSort(find: { [x: string]: number; }[]) {
    return find.sort();
}
*/