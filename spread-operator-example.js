// let variablename1 = [...value];
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = [...cars1];
// const cars3 = [...cars1,"NISSAN","TOYOTA"];
// console.log(cars1);
// console.log(cars2);
// console.log(cars3);
// const cars1 = ["AUDI","BMW","TATA","MERCEDES"];
// const cars2 = ["NISSAN","TOYOTA"];
// // copied elements from cars1 and cars2 to cars3 here
// const cars3 = [...cars1, ...cars2];
//
// console.log(cars3);
const cars1 = {
    Brand : "BMW",
    Color : "RED"
}
// copy cars1 object using spread
// operator to create cars2 object
const cars2 = { ...cars1,Brand : "Toyota", Color: "Blue"};
console.log(cars2);