// convert single array object to single object
const person = [
    { id: 'ID01', name:" Farhan", age: 23},
    { id: 'ID02', name:" Hero", age: 23},
    { id: 'ID03', name:" ALam", age: 23},
    { id: 'ID04', name:" Messi", age: 23}   
]

const info ={}

person.map(p => {
    const id =p.id;
    const value =p.name;

     info[id] =value
})
console.log(info );