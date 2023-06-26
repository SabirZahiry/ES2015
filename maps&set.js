// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]) 
// it will return 1,2,3,4

// Quick Question #2
// What does the following code return?

//[...new Set("referee")].join("")// ref  (Set is skipping the dublicates)

// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
/* 
{Array(3) => true}
{Array(3) => false}
*/

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns 
// true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = Array => new Set(Array).size !== Array.length;

// vowelCountMap
// Write a function called vowelCountMap which accepts a string and returns a map 
// where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowels(char){
    // defined the vowels
    return 'aeiou'.includes(char);
}

function vowelCount(str){
    const vowelMap = new Map();
    //loop all over the string 
    for (let char of str) {
        // convert to string to lowercasw handel with both lower and upercase
        let lowerCaseChar = char.toLowerCase()
        if(isVowels(lowerCaseChar)){
            if(vowelMap.has(lowerCaseChar)){
                vowelMap.Set(lowerCaseChar, vowelMap.get(lowerCaseChar)  + 1);
            }
            else{
                vowelMap.Set(lowerCaseChar, 1);
            }
        } 
    }
    return vowelMap;
};

/*
function vowelCount(str) {
    // Convert the string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
  
    // Define the vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Initialize the vowel count map
    var vowelCountMap = {};
  
    // Loop through each character in the string
    for (var i = 0; i < str.length; i++) {
      var char = str[i];
  
      // Check if the character is a vowel
      if (vowels.indexOf(char) !== -1) {
        // If the vowel count exists in the map, increment it
        if (vowelCountMap[char]) {
          vowelCountMap[char]++;
        } else {
          // If the vowel count doesn't exist, initialize it to 1
          vowelCountMap[char] = 1;
        }
      }
    }
  
    return vowelCountMap;
  }
  var str = "Hello, World!";
  var result = vowelCount(str);
  console.log(result);
*/

