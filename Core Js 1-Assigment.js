/*/ Jai Maa Saraswati :

Q1. Write a program that Grades Students based on their marks
* If greater than 90 than A Grade
* If between 70 and 90 than a B Grade
* If between  50 and 70 than a C Grade
* Below 50 than an F grade . 



function calculateGrade(marks) {
    if (marks > 90){
        return 'A';    
    } else if (marks > 70){
        return 'B';
    } else if (marks > 50){
        return 'C';
    } else {
        return 'F'
    }
}

// Example Useage :
let shubhamMark = 85; // Change this Value to test different marks
let studentGrade = calculateGrade(shubhamMark);
console.log('student Grade : ${studentGrade}')
console.log(studentGrade)

**/

/** 
Q2. Generate numbers between any 2 Given numbers.

Example 
Const num1 = 10;
Const num2 = 25;
Output: 11,12,13,......, 25


function genertaeNumbersBetween(num1 , num2){
    // Ensure that Num1 < Num2
    if (num1 > num2){
        [num1 , num2] = [num2,num1] // Swap the Value if num1 is Greater than num2
    }
    let result = [];
    for (let i = num1+1 ; num1 < num2 ; i++){
        result.push(i)
    }

    return result.join(',');   // join Array Element with ',' and Return as a String 
}

// Example Useage :
const num1 = 10;
const num2 = 15;
const numberString = genertaeNumbersBetween(num1,num2)
console.log(numberString);

**/

/** 
Q3. Use a nested ternary operator to check that a number is positive, negative or zero. You have to print
“postive” if the number is positive and Similarly for negative and zero also. 


function checkNumberType(number){
    let result = number > 0 ? "Positive" : (number < 0 ? "Negative" : "Zero")
    return result;
}
// Example Useage ;
console.log(checkNumberType(10)); // Output : Positive
console.log(checkNumberType(-5));  // Output : Negative
console.log(checkNumberType(0)); //  Output : Zero

**/

/** Q7. Describe the usage of the comma operator in JavaScript and provide an example.

Comma(',') Operator => Comma operator is used to Evaluate the Multiple Expression Sequentially And Return 
The Value of the Last Operator . It's is Primarily is used in Place where Multiple Expression is Present
But Only one is Allowed .

Useage of Comma Operator :-

* Sequencing Expressions 
* Variable Declearation 
* For Loop Update

Let us Taking the Example of Comma Operator (',') 

// Example 1:- Sequencing Expressions 
let a = (2+3 , 5+7); // Here 2+3 is Evalueated First , then 5+7 and 12 is Assigned to 'a'
console.log(a); //Output 12 

// Example 2 :- Variable Declearation :
let x = 1 , y = 2 , z = 3  // Declear the Three Variable in one Expression 
console.log(x,y,z)  // Output : 1,2,3

// Example 3 :- For the loop update :
for (let i = 0 , j = 10; i <= j ; i++ , j--){
    console.log(i,j)
}
**/

/**
 * Q5. You're creating a basic login 'system. Make a log in function with two things': a username and a
password. Check if the username is "admin" and the password is "12375". If they're both correct, 'how "Login
Successful"; if not, 'how "Invalid credential'.

let username = "Admin";
let password = 12345;
login Sucessfull

function login(username , password){
// Check if username is "admin" & password is "12345"
  
  if (username.toLowerCase() === "admin" && password === "12345") {
    console.log(" Log in Sucessfull");
  }else {
    console.log( "Invalid Credentials");
  }
}
// Example Useage :
let inputUsername = "admin";
let inputPassword = "12345"
console.log(inputUsername,inputPassword)

**/

/** 
 
Q6. You are working on an e-commerce platform. Write a JavaScript program that takes the payment
method ("credit", "debit", or "paypal") as input and uses a switch Statement to determine and print the
processing fee associated with each payment method. For example, "credit" may have a processing fee of
2%, "debit" 1.5%, and "paypal" 3%.

// ToLowerCase() Function is used when we have Comparison Intensive Case : 

function calculateProcessingFee(paymentMethod){
    let processingFee;

    switch (paymentMethod.toLowerCase()) {
        case "credit":
            processingFee = 2.0;
            break;
        case "debit":
            processingFee = 1.5;
            break;
        case "paypal":
            processingFee = 3;
            break;
        default:
            console.log("Invalid Payment Method Please Try Agin")
            return;                        
    }
    console.log(paymentMethod,processingFee)
}

// Example Useage :
calculateProcessingFee("credit");
calculateProcessingFee("debit");
calculateProcessingFee("paypal");

// Another Case is Handling the Invalid Payment Method like - Bitcoin :
calculateProcessingFee("bitcoin")

**/

/**

Q7. You are building a weather application. Write a JavaScript program that takes the current temperature
as input and uses the conditional (ternary) operator to determine and print the weather condition. If the
temperature is above 30°C, the condition is "Hot"; otherwise, it is "Moderate". 

function determineWeatherCondition(currentTemprature){
    let weatherCondition = (currentTemprature > 30) ? "Hot" : "Moderate";
    console.log(weatherCondition)
}

// Example Useage :
determineWeatherCondition(30);
determineWeatherCondition(40);
determineWeatherCondition(20);

**/

/** 

Q8.You are creating a program to calculate the sum of numbers. Write a JavaScript program that takes a
positive integer as input and uses a do-while loop to calculate and print the sum of all numbers from 1 to the
given integer.  **/

function calculateSumOfNumbers(n){
    // Input Validation : Check input (n) is Positive Number
    if (n <= 0 || !Number.isInteger(n)){
        console.log("Please Enter a Positive Integer")
        return ;    
    }

    let sum = 0;
    let i = 1;

    do {
       sum += 1;
       i++;
    } while (i <= n);
    console.log(sum);
}

// Example Useage :
calculateSumOfNumbers(2);
calculateSumOfNumbers(5);
calculateSumOfNumbers(55);
