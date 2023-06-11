//whenever we write a piece of code which needs to be executed some sort of condition , that's we use the conditional statement  
// if - else the example of the conditional statement 

// 1.if(condition){
  // code that needs to be executed
  //}
 // if statement
 var age = 10;
 if(age >= 18){
   console.log("eligible to give votes")
 }
 if(age < 18){
   console.log("not eligible")
 }
 if(age == 18){
   console.log("barely eligible")
 }

 // 2.if-else statement if used to check one particular condition and execute the block of code based on the condition
 // if(condition){
//     code
//   }else{
//     code
//   }
  age = 55
 if(age > 18){
   console.log("eligible")
 }else{
   console.log("not eligible")
 }
//3. if ,else-if else-if,.....else-if...else statement use to check multiply condition
  
//if(condition){
//     code
//  }
//  else if(2nd condition){
//     code
//  }
//  else if(3rd condition){
//     code
//  }......{
//     code
//  }
//  else{
//     code
//  }

if(age > 18){
   console.log("yes")
}
else if(age == 18){
   console.log(perfect)
}
else{
   console.log("no")
}