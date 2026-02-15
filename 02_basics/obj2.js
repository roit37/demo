const tinderuser={}
tinderuser.id="123"
tinderuser.name="hello"
//console.log(tinderuser);
const regularuser={
    email:"rohit@gmail.com",
    fullname :{
        userfullname :{
            firstname:"rohit",
            lastname:"mahato"
        }
    }
}
//console.log(regularuser);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));



//destructure
const course={
    name:"js in hindi",
    price:"999",
    instructor:"java"
}
const {instructor:ins}=course
console.log(ins)

//APIs
// {
//     "name":"rohiyt",
//     "coursename":"js in hindi",
//     "price":"free"

// }