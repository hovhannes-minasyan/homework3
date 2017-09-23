/*

				
				Homework of Hovhannes Minasyan


*/

//-A function that takes no arguments and returns something - 5 points
const Main=function (){
	
	return 0;
	
};


//-A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points
const ArithmeticMean = function (num1,num2,num3){
	return (num1 + num2 + num3)/3;
}

//-A function that takes arguments, does something but does not return anything - 5 points
const DoSomething= function (x,y){
	if(y!==0){const z = x%y;}	
};


//-A function called fullName that takes as argument first name and last name and returns the full name of the person
const fullName= function(fname, lname){
	return fname + " " + lname;
};


//-A function that takes three strings and returns the string that is the longest. - 5 points
const longestString = function (str1,str2,str3) {
	if(str1.length>=str2.length && str1.length >= str3.length){
	return str1;}
	else if (str2.length>=str1.length && str2.length >= str3.length){
	return str1;}
	else if (str3.length>=str1.length && str3.length >= str2.length){
	return str3;}
};


//-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 5 points
const Compare1 = function (num1, num2 ){
	
	return (num1-num2) && (Math.abs(num1-num2)/(num1-num2));
	
};

// Same task as previous but with "if"s

 const Compare2 = function (num1, num2 ){
	if(num1>num2) {return 1;}
	else if(num1===num2){return 0;}
	else {return -1;}
 };
 
 
//-A function that takes three inputs and returns the first truethy value
const FirstTruthy = function (thing1, thing2,thing3){
	return thing1 || thing2 || thing3 || false; 
};

