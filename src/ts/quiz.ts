export interface quiz{
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