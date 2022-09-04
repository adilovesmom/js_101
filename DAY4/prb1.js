//Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var dob=2018;
var cy=2022;
var age=(cy-dob);
if(age>=13 && age<=19){
  console.log("Tennage");
}
else if(age>=20 && age<=29){
  console.log("Twenties");