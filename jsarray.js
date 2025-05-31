// Question 1
let num = [10,20,30,40]
num.push(50);
num.unshift(6);
console.log(num)

// Question2 
let fruits = ["Apple", "Mango", "Pineapple", "Guava","Pomegranate"];
fruits.pop()
fruits.shift()
console.log(fruits);


// Question 3 
let arr1 = [10, 20, 30, 40];
arr1.splice(1,1,25)
console.log(arr1)


// Question 4 
let colors = ["red", "blue", "green", "yellow"];
let res = colors.join();
console.log(res);

// Question5
  let str = [100, 200, 300]
  console.log(str.toString());


// Question6
let array = [5,10,15,20];
let array2 = array.at(-1)
console.log(array2)

// Question7
let copy = [1,2,3,4,5]
let cpy = copy.copyWithin(3,0,2)
console.log(cpy)

// Question8
let nestedarrray = [1, [2,3],[4,[5]]];
let flatmethod = nestedarrray.flat(2);
console.log(flatmethod) 


// Question9
let Smethod = [10,20,30,40,50];
let middlearray = Smethod.slice(2,4);
console.log(middlearray)

// Question10
let Array1 = [1,2]
let Array2 = [3,4]
let Array3 = Array1.concat(Array2);
console.log(Array3)

// Question11
let numArray = [1, 2, 3, 4, 5];
delete numArray[2];
console.log(numArray);
console.log(numArray.length);

// Question12
let originalArr1 = [9, 8, 7, 6];
let newArray = originalArr1.toSpliced(1,1,10,11);
console.log(originalArr1)
console.log(newArray)

// Question13
let numbers = [1,2,3,4,5];
numbers.splice(-2,2);
console.log(numbers)

// Question14
let OriginArray = [7,8,9];
let copyArray = [...OriginArray];
copyArray.unshift(6);
console.log(OriginArray);
console.log(copyArray);

// Question15
function arrToString(arr) {
    return arr.join(' | ');
}
let number = [1, 2, 3, 4, 5];
console.log(arrToString(number));

// Question16
function getLastItem(arr) {
    return arr[arr.length - 1];
}
let number1 = [10, 20, 30, 40, 50];
console.log(getLastItem(number1)); 

// Question17
function getSecondLast(arr) {
    return arr.at(-2);
}
let number2 = [10, 20, 30, 40, 50];
console.log(getSecondLast(number2)); 

// Question18
function reverseArray(arr) {
let reversed = []; 
for (let i = 0; i < arr.length; i++) {
reversed.unshift(arr[i]); 
    }
return reversed;
}
let number3 = [1, 2, 3, 4, 5];
console.log(reverseArray(number3)); 

// Question19
let nestedArr = [[1, 2], [3, 4]];
let flatArray = nestedArr.flat();
console.log(flatArray); 

// Question20
function nameAndarray(names, marks) {
let combinedArr = [];
for (let i = 0; i < names.length; i++) {
combinedArr.push(names[i] + ": " + marks[i]);
}
return combinedArr;
}
let names = ["Ram", "Shyam", "Mohan"];
let marks = [80, 90, 85];
console.log(nameAndarray(names, marks));
