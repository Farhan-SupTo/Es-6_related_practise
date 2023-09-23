const Men =[
    {Name: "abul", job:"government", salary : 17000},
    {Name: "Babul", job:"non-government", salary : 55000},
    {Name: "Kabul", job:"government", salary : 23000},
    {Name: "Jabul", job:"government", salary : 40000},
    {Name: "Dabul", job:"non-government", salary : 17000},
    {Name: "Habul", job:"non-government", salary : 67000}
]
const husband = Men.filter(men => (men.job === "non-government" && men.salary>20000) || (men.job === "government" && men.salary >30000))
console.log(husband);