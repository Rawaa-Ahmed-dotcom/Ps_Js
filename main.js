
// Solving First Problem
/*
Example:
printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]
*/
function printArray(number) {
    let newArray = [];
    for(let i = 1; i <= number ; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(printArray(6)); // [1, 2, 3, 4, 5, 6]


// Solving Problem [2]
/*Example :
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

*/

function findIndex(arr, str) {
	for(let i = 0; i < arr.length; i++ ) {
		if(arr[i] === str) {
			return i;
		}
	}
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"],"fgh"));  // 2

// Solving Problem [3]: 
/*Example :
arrayValuesTypes([1, 2, "null", []])
➞ ["number", "number", "string", "object"]

arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
➞ ["number", "string", "string", "object", "object", "boolean", "number"]
*/

function arrayValuesTypes(arr) {
	let  typesArray = [];
	for (let i = 0; i < arr.length; i++ ) {
		typesArray.push(typeof arr[i]);
	}
	return typesArray;
}

console.log(arrayValuesTypes([1, 2, "null", []])) // ["number", "number", "string", "object"]


// solving Problem [4] :
/*Example :
getSumOfItems([2, 7, 4]) ➞ 13

getSumOfItems([45, 3, 0]) ➞ 48

getSumOfItems([-2, 84, 23]) ➞ 105
*/

function getSumOfItems(arr) {
	let result = 0;
	for(let i = 0; i < arr.length ; i++) {
		result += arr[i];
	}
	return result;
}

console.log(getSumOfItems([2, 7, 4]));


// Solving Problem [5] 
/* Examples :
addOddToN(5) ➞ 9
// 1 + 3 + 5 = 9

addOddToN(13) ➞ 49

addOddToN(47) ➞ 576
*/

function addOddToN(n) {
	let result = 0;
	for(let i = n; i > 0 ; i = i - 2) {
			result += i;
	}
	return result;
}

console.log(addOddToN(5));