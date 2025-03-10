//JavaScripts Fundamentals

function filterEvenNumbers(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
}

//Testing our script
const numbers = [1,2,3,4,5,6];
const filteredNumbers = filterEvenNumbers(numbers);
console.log(filteredNumbers);

