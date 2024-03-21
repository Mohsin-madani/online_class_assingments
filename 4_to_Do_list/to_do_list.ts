import inquirer from "inquirer";
import { todo } from "node:test";

let todos:string[] = [];
let loop = true;

while(loop){
    const answers:{
        TODO: string,
        addmore : boolean
    } = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message: "what do you want to add in your todo list?"
        },
        {
            type:"confirm",
            name:"addmore",
            message: "do you want to add more todo? ",
            default:false
        }
    ])
    const {TODO,addmore} = answers;
    console.log(answers)
    loop = addmore
    if (TODO){
        todos.push(TODO)
    }else {
        console.log("kindly add valid input")
    }

}

if (todos.length > 0 ){
    console.log("your to do list:")
    todos.forEach(todo => {
        console.log(todo)
    });
}else{
    console.log("no todos found")
}

