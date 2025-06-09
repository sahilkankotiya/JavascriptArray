// Question1 =>  Write a switch-based calculator supporting +, -, *, /, %, and **. 
function calculator(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error: Division by zero';
    case '%':
      return b !== 0 ? a % b : 'Error: Division by zero';
    case '**':
      return a ** b;
    default:
      return 'Error: Invalid operator';
  }
}

console.log(calculator(1, 4, '+'));  
console.log(calculator(10, 6, '-'));  
console.log(calculator(2, 8, '*'));  
console.log(calculator(15, 3, '/'));  
console.log(calculator(5, 3, '%'));
console.log(calculator(3, 2, '**'));


// Question 2 => Use switch to print the full name of a month when a number (1–12) is given.
function getMName(monthNumber) {
    switch (monthNumber) {
        case 1: 
        return "January";
        case 2:
        return "February";
        case 3:
        return "March";
        case 4:
        return "April";
        case 5: 
        return "May";
        case 6: 
        return "June";
        case 7: 
        return "July";
        case 8: 
        return "August";
        case 9: 
        return "September";
        case 10: 
        return "October";
        case 11: 
        return "November";
        case 12: 
        return "December";
        default: 
        return "Invalid month number";
    }
}
console.log(getMName(2)); 



// Question 3 =>Build a switch block to convert grades (A-F) to performance messages. 
function getMessage(grade) {
    switch (grade.toUpperCase()) { 
        case 'A':
         return "Needs improvement.";
        case 'B': 
        return "Excellent work!";
        case 'C':
        return "Good job!";
        case 'D': 
        return "Fair effort";
        case 'E': 
        return "At risk. Put in more effort!";
        case 'F': 
        return "Failed. Time to work harder.";
        default: 
        return "Invalid grade input.";
    }
}
console.log(getMessage('C')); 

// Question 4 =>Create a switch that checks browser type (Chrome, Firefox, etc.) and prints support message.
function checkBrowserSupport(browser) {
    switch (browser.toLowerCase()) { 
        case 'chrome': 
            console.log("Chrome is fully supported!");
            break;
        case 'firefox': 
            console.log("Firefox has great compatibility!");
            break;
        case 'edge': 
            console.log("Edge offers modern web features!");
            break;
        case 'safari': 
            console.log("Safari is supported but may have some quirks.");
            break;
        case 'opera': 
            console.log("Opera is a valid choice, but ensure compatibility!");
            break;
        default: 
            console.log("Unknown browser. Please check support manually.");
    }
}
checkBrowserSupport('chrome'); 

// Question 5 =>Check whether a number is even or odd using switch and modulo %.
function checkEvenOdd(number) {
  switch (number % 2) {
    case 0:
      console.log(`${number} is even.`);
      break;
    case 1:
      console.log(`${number} is odd.`);
      break;
    default:
      console.log("Invalid input.");
  }
}
checkEvenOdd(13); 
checkEvenOdd(6); 
checkEvenOdd(77); 


// Question 6 =>Nested switch: Check user role (admin, user) and their action (create, edit,delete).
function checkUserAction(role, action) {
    switch (role.toLowerCase()) { 
        case 'admin':
            switch (action.toLowerCase()) { 
                case 'create':
                return "Admin can create content.";
                case 'edit': 
                return "Admin can edit content.";
                case 'delete': 
                return "Admin can delete content.";
                default: 
                return "Invalid action for admin.";
            }
        case 'user':
            switch (action.toLowerCase()) {
                case 'create': 
                return "User can create content.";
                case 'edit': 
                return "User can edit content.";
                case 'delete': 
                return "User cannot delete content.";
                default: 
                return "Invalid action for user.";
            }
          default:
            return "Invalid role.";
    }
}
console.log(checkUserAction('Admin', 'edit')); 
console.log(checkUserAction('User', 'delete')); 


// Question 7 =>Use switch with true to categorize age groups: Child, Teen, Adult, Senior.
function getAgeGroup(age) {
  switch (true) {
    case (age >= 0 && age <= 11):
      return "Child";
    case (age >= 12 && age <= 17):
      return "Teen";
    case (age >= 18 && age <= 64):
      return "Adult";
    case (age >= 65):
      return "Senior";
    default:
      return "Invalid age";
  }
}
console.log(getAgeGroup(18));   
console.log(getAgeGroup(55));  
console.log(getAgeGroup(13));  
console.log(getAgeGroup(-9));  
console.log(getAgeGroup(9));  
  

// Question 8 =>What happens when break is missing in a switch? Explain with example.
// ANSWER => The break statement prevents execution from falling through to subsequent cases.If break is missing, execution continues into the next case(s) until a break is encountered or the switch block ends. This behavior is called fall-through and can be intentional in some cases.
let fruit = 'kiwi';
switch (fruit) {
    case 'apple':
        console.log('Apple is selected.');
    case 'orange':
        console.log('orange is selected.');
    case 'kiwi':
        console.log('kiwi is selected.');
        break; 
    default:
        console.log('No fruit selected.');
}


// Question 9 =>Can we place default at the top of the switch block? Show with code.
//ANSWER => Yes, in JavaScript, you can place the default case at the top of a switch block. The position of the default clause doesn't affect its functionality; it will execute if none of the case labels match the switch expression. However, if you place default before other cases and omit a break statement, execution will continue into the subsequent cases—a behavior known as "fall-through."
let color = 'blue';

switch (color) {
    default:
        console.log('No matching color found.');
        break;
    case 'red':
        console.log('Red color selected.');
        break;
    case 'green':
        console.log('Green color selected.');
        break;
    case 'blue':
        console.log('Blue color selected.');
        break;
}



// Question 10 => Explain fall-through in switch with a multi-case example.
// ANSWER => In JavaScript, fall-through occurs when a switch statement lacks break statements, causing execution to continue into subsequent cases until a break is encountered or the switch block ends.
let day = 5; 
switch (day) {
    case 1:
    case 2:
    case 3:
        console.log('It is a weekday.');
    case 4:
    case 5:
        console.log('It is a workday.');
        break;
    case 6:
    case 7:
        console.log('It is the weekend.');
        break; 
    default:
        console.log('Invalid day.');
}


// Question 11 => Use map() to convert an array of numbers into their squares.
const nums = [1, 2, 3, 4, 5];
const squaredNum = nums.map(num => num ** 2);
console.log(squaredNum);

// Question 12 => Use filter() to return only the names longer than 5 characters.
const names = ["RobertDowney", "Bob", "Chris", "TomCruise", "Smith", "MarkRuffalo","vin","alice"];
const longNames = names.filter(name => name.length > 5);
console.log(longNames); 

// Question 13 => Use reduce() to find the sum of all odd numbers in an array.
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddsum = num.reduce((accumulator, currentValue) => {
    if (currentValue % 2 !== 0) {
        return accumulator + currentValue; 
    }
    return accumulator; 
}, 0); 
console.log(oddsum); 

// Question 14 => Implement your own version of map() called customMap(). 
Array.prototype.customMap = function(callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i], i, this));
    }
    return resultArray;
};
// customMap function
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.customMap(num => num ** 2);
console.log(squaredNumbers); 

// Question 15 =>Create a function repeat(fn, n) to call any function n times.
function repeat(fn, n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}
const sayHello = () => {
    console.log("Hello!");
};
repeat(sayHello, 3);


// Question 16 =>Use forEach() to print the index and value of each array element.
const indexnum = [10, 20, 30, 40, 50];
indexnum.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});


// Question 17 =>Use reduce() to convert an array of strings into a sentence. 
const words = ["Welcome", "to", "Parul", "University"];
const sentence = words.reduce((acc, word) => acc + " " + word, "");
console.log(sentence); 

// Queestion 18 => Filter out all palindromes from a string array.
const wds = ["racecar", "hello", "madam", "world", "level", "javascript"];
const nonPalindromes = wds.filter(word => word !== word.split("").reverse().join(""));
console.log(nonPalindromes); 

// Question 19 => Map through an array of numbers and return strings like “Even” or “Odd”.
const numArray = [1, 2, 3, 4, 5, 6];
const oddeven = numArray.map(num => (num % 2 === 0 ? "Even" : "Odd"));
console.log(oddeven); 

// Question 20 => Use reduce() to count how many times each number appears in an array.
const NumArr = [2, 2, 3, 5, 5, 8, 8, 8, 6, 6, 1, 4, 4, 4, 4];
const countOccurrence = NumArr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
console.log(countOccurrence); 


// Question 21 =>. Create a function that accepts another function and applies delay using setTimeout().
function delayFunction(callback, delay) {
    setTimeout(callback, delay);
}
function greet() {
    console.log("Welcome to Parul University");
}
delayFunction(greet, 2000); 

// Question 22 => Filter an array of user objects (with name, age) to return only adults (age > 18).
let user = [
    { name: "Smith", age: 28 },
    { name: "Jack", age: 12 },
    { name: "Tim", age: 20 },
    { name: "Harry", age: 40 },
    { name: "Mark", age: 17 },
    { name: "Peter", age: 55 }
];
const adults = user.filter(user => user.age > 18);
console.log(adults);

// Question 23 => What's the difference between map() and forEach()? Show code example.
// ANSWER => MAP -> Returns a new array with transformed elements based on the callback function.
// ForEach -> Executes a function on each element but does not return a new array.

const num1 = [1, 2, 3, 4];
const double = num1.map(num => num * 2);
console.log(double);
numbers.forEach(num => 
    console.log(num * 2));

  
// Question 24 => Why is reduce() called powerful in functional programming? Explain with one-liner code.
// 1.The reduce() function is considered powerful in functional programming for several reasons:
// Aggregation of Data: reduce() allows you to take a collection of items (like a list or an array) and combine them into a single cumulative result. This is particularly useful for operations like summing numbers, concatenating strings, or finding the maximum value.
// 2.Higher-Order Function: It is a higher-order function, meaning it takes another function as an argument. This allows for great flexibility, as you can define custom logic for how the items in the collection should be combined.
// 3.Immutability: In functional programming, immutability is a key concept. reduce() does not modify the original collection; instead, it produces a new result based on the input. This aligns with functional programming principles and helps avoid side effects.
//4. Conciseness: Using reduce() can lead to more concise and readable code. Instead of writing loops to accumulate results, you can express the same logic in a single line, making the code easier to understand.
//5.Composability: reduce() can be easily composed with other functional programming constructs, such as map() and filter(). This allows for the creation of complex data transformations in a clear and declarative manner.
//6. Parallelism: In some implementations, reduce() can be parallelized, allowing for more efficient processing of large datasets. This can lead to performance improvements in data-intensive applications.
const sum1 = [1, 2, 3, 4, 5]
let sum2 =  sum1.reduce((acc, num) => acc + num, 0);
console.log(sum2); 


// Question 25 => Explain what makes a function “Higher Order” with real code example
// Higher-order function that takes a function as an argument
function applyOperation(number, operation) {
  return operation(number);
}
// Regular function to be passed as an argument
function square(x) {
  return x * x;
}

// Regular function to be passed as an argument
function cube(x) {
  return x * x * x;
}
// Call the higher-order function with a number and a function
console.log(applyOperation(5, square));
console.log(applyOperation(3, cube)); 

// Question 26 => Create a bankAccount object with deposit() and withdraw() methods using this.
function bankAccount(accNumber, initialBalance) {
  this.accNumber = accNumber;
  this.balance = initialBalance;

  this.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  };

  this.withdraw = function(amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient balance.");
      }
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  };
}
const myAccount = new bankAccount("SB-123", 1500);
myAccount.deposit(500);   
myAccount.withdraw(400);  
myAccount.withdraw(1800); 


// Question 27 => Write an object with name and a method sayHello() that uses this correctly.
const person = {
    name: "Sahil",
    sayHello() {
    console.log(`Hello, my name is ${this.name}`);
    }
};
person.sayHello(); 

// Question 28 => Use Object.keys() to print only the keys of an object dynamically.
const persondetails = {
    name: "Sahil",
    age: 22,
    profession: "Developer"
};
console.log(Object.keys(persondetails)); 
// Object.keys(person) returns an array containing all the keys of the person object.
// This method is useful when you need to iterate over an object's properties dynamically.


// Question 29 =>Use Object.values() to sum all values of a numeric object.
const totalsum = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};
const sum = Object.values(totalsum).reduce((acc, num) => acc + num, 0);
console.log(sum); 


// Question 30 =>Merge two objects using Object.assign() and print the merged result.
    name: "Sahil",
const obj1 = { name: "Sahil", age: 22 };
const obj2 = { profession: "Developer", location: "Vadodara" };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);


// Question 31 => Freeze an object using Object.freeze() and try modifying it — verify the result.
const userinfo = {
    name: "Sahil",
    age: 21
};
Object.freeze(user);
userinfo.age = 23; 
userinfo.location = "Vadodara"; 
delete userinfo.name; 
console.log(userinfo); 



// Question 32 => Seal an object using Object.seal() and test adding & updating keys.
const userInformation = {
    name: "Sahil",
    age: 22
};
Object.seal(userInformation);
userInformation.age = 25; 
userInformation.location = "Gujarat"; 
delete userInformation.name; 
console.log(userInformation); 


// Question 33 =>Check if a key exists in an object using hasOwnProperty().
const developerdetails = {
    name: "Sahil",
    age: 25,
    profession:"Developer",    
};
console.log(developerdetails.hasOwnProperty("age")); 
console.log(developerdetails.hasOwnProperty("location")); 


// Question 34 => Build an object with custom methods: add(), subtract(), and call them.
const calculate = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log(calculate.add(9, 8));     
console.log(calculate.subtract(27, 10)); 

// Question 34 =>Create a student object with method getDetails() that returns a formatted string.
const student = {
    name: "Sahil",
    age: 22,
    course: "Computer Science",
        getDetails() {
        return `Student Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`;
    }
};
console.log(student.getDetails());


// Question 36 =>Make a method that removes keys with null or undefined values from an object.
function clearObject(obj) {
    return Object.fromEntries(
        Object.entries(obj).filter(([_, value]) => value != null)
    );
}
const data = { name: "Sahil", age: null, location: "Gujarat", profession: undefined };
const clearedData = clearObject(data);
console.log(clearedData);


// Question 37 => Explain the difference between Object.freeze() and Object.seal() with examples.
// // ANSWER =>Object.freeze() completely locks the object—no changes allowed.
// Object.seal() allows modifications to existing properties but prevents additions or deletions.

// Object seal
const userdata = {
    name: "Sahil",
    age: 22
};
Object.seal(userdata);
userdata.age = 25; 
userdata.location = "Gujarat"; 
delete userdata.name; 
console.log(userdata); 
//Object freeze 
const userfacts = {
    name: "Sahil",
    age: 21
};
Object.freeze(userfacts);
userfacts.age = 23; 
userfacts.location = "Vadodara"; 
delete userfacts.name; 
console.log(userfacts); 

// Question 38 => What happens if we use arrow function as object method and access this? Show output.
const obj = {
  name: "Sahil",
  sayHello: () => {
  console.log(`Hello, ${this.name}!`);
  }
};
obj.sayHello();


// Question 39 =>Show an example where method is passed as callback and loses this context.
const informartion = {
  name: 'Sahil',
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
setTimeout(user.greet, 1000); 


// Question 40 => Explain Object.entries() and its use in converting object to array of key-value pairs.
const mydetails = {
  name: "Sahil",
  age: 22,
  city: "Vadodara"
};
const entries = Object.entries(mydetails);
console.log(entries);
