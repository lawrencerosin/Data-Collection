// console.log("hello world")

// let numOfRows = 0;

// console.log(csv.length)

// for (let i = 0; i <= (csv.length-1); i++){

// }

// Part 1

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows=csv.split("\n")
// console.log(rows)

// Part 2

const cells=[];
for(let row of rows)
cells.push(row.split(","))

// console.log(cells[0],cells[1],cells[2],cells[3])

let superCell = [cells[0],cells[1],cells[2],cells[3],cells[4]];

console.log(superCell)

// Part 3

let obj1 = {
    ID: superCell[1][0],
    Name: superCell[1][1],
    Occupation: superCell[1][2],
    Age: 41
}

let obj2 = {
    ID: superCell[2][0],
    Name: superCell[2][1],
    Occupation: superCell[2][2],
    Age: 19
}
let obj3 = {
    ID: superCell[3][0],
    Name: superCell[3][1],
    Occupation: superCell[3][2],
    Age: 58
}
let obj4 = {
    ID: superCell[4][0],
    Name: superCell[4][1],
    Occupation: superCell[4][2],
    Age: 26
}

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

let arrObject = [obj1,obj2,obj3,obj4]

console.log(arrObject)

// Part 4

arrObject.pop();
// let newObject = {
//     id: "48",
//     name: "Barry",
//     occupation: "Runner",
//     age: "25"
// }

// arrObject.make ={
//     id: "48",
//     name: "Barry",
//     occupation: "Runner",
//     age: "25"
// }
const added={ 
    Id: "48", 
    Name: "Barry", 
    Occupation: "Runner", 
    Age: 25 
}
arrObject.splice(1, 0, added)

arrObject.push({ 
    Id: "7", 
    Name: "Bilbo", 
    Occupation: "None", 
    Age: 111 
})
let total=0
console.log("person"+ obj1["Age"])
for(let person of arrObject){
    
    total+=person["Age"]
}
let reverted="";
function ReplaceWithNewLine(){
    reverted=reverted.slice(0, reverted.length-1)
    reverted+="\n"
}
const average=total/arrObject.length
console.log("Average "+average);
for(let key in arrObject[0]){
    reverted+=key+", "
}
for(let position=0; position<arrObject.length; position++){
    for(let property in arrObject[position]){
        reverted+=arrObject[position][property]+", "
    }
    ReplaceWithNewLine()
}
console.log("CSV "+reverted)


// let columns = {
    
// }