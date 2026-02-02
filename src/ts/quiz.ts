import quizData from "../data/quiz.json";

export interface Quiz{
    steps:Array<step>;
}
interface step{
    id:string;
    title:string;
    type:string;
    options:Array<option>
}

interface option{
    id:string;
    label:string;
}


export const quiz: Quiz = quizData as Quiz;
