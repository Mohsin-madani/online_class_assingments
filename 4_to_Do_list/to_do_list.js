import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your todo list?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more todo? ",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("your to do list:");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("no todos found");
}
// let addTask = await inquirer.prompt(
// [
//     {
//         name:"todo",
//         type:"input",
//         message:"what you want to add in your Todos?"
//     },
//     {
//         name:"addMore",
//         type:"confirm",
//         message:"do you want to add more",
//         default:"false"
//     }
// ]
// );
// todos.push(addTask.todos);
// console.log(addTask);
