//array concatenation

const ar1=[2,3,4,4];
const ar2=["ironman","spiderman","thor"];

const ar3=ar1.concat(ar2)

const newar=[...ar1,...ar2];
console.log(newar);