//Assign a funtion to a variable

// const topic =(t)=>{
//   return `You are learning ${t}`
// }
// display(topic("First class function"))

// const number=[1,2,3,4,5];
// const multiplyby2=(num)=>num*2;
// const result=number.map(multiplyby2);
// display(result);

// const firstClass=()=>()=>display(2);
// let displayFunc=firstClass();

// displayFunc();

//outer function
// const outerFunctions=()=>{
//   const name='Loe';
// //inner function
//   const innerFunctions=()=>'Hello '+name+' Welcome to the team!';
// //return innerFunctions
//   return innerFunctions;

// }

// const p=outerFunctions();
// display(p());


// const counter=()=>{
//   let count=0;

//   const innerFunctions=()=>count++;

//   return innerFunctions;
// }
// let p=counter();
// display(p());
// display(p());
// display(p());
// display(p());
// display(p());

// Map function creates and return new array 

let arI=[1,2,3,4,5,6,7,8,9,10,11,12];

// let newAr=arI.map((e)=>e+2);

const add2=(n)=>{
  return n+2;
}
let newAr=arI.map(add2);//it increases readibility of code
display("Iniatial: "+arI)
display("New Array: "+newAr)


//Filter function creates and return new array

let course=['Kali', 'Loca','Remis','Hoisnr'];

let isFour=course.filter((c)=>c.length==4);

display('Courses: '+course);
display('Contains four letter: '+isFour);


//Using reducer

let ar=[1,3,4,5,6];

let newRedAr=ar.reduce((ac,c)=>ac+c);

display("Reducer Function")
display("Initial Array: "+ar)
display("New Array: "+newRedAr)