import {advisors} from "../ts/advisor.ts"
import {Advisor} from "../ts/advisor"
const firstQuestionWeight: number= 2;
const secondQuestionWeight: number = 1;

export function choosingAdvisor(userAns: string[]) : Advisor[]{
    let find: Record<string, number> = {};
    advisors.forEach((advisor) => {
        const id = advisor.id;
        
        if (!find[id]) {
            find[id] = 0;
        }

        if (advisor.specialties.includes(userAns[0])) {
            find[id] += firstQuestionWeight;
        }

        if (advisor.serviceModel === userAns[1]) {
            find[id] += secondQuestionWeight;
        }
    });
    

    return advisorSort(find);
}


function advisorSort(scores: Record<string, number>): Advisor[] {
  const topThree = Object.entries(scores)
  
    .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
    .slice(0, 3)
    .map(([id]) => advisors.find(a => a.id === id))
    .filter((advisor): advisor is Advisor => !!advisor);

  return topThree.sort((a, b) => a.name.localeCompare(b.name));
}
