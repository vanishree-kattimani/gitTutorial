const arr=['apple','oranges','','mango','','lemon'];
let Map=arr.map(element=>element===''?'Empty String':element)
console.log(Map)