const romanNumeralToArabic = {
    'I' : 1,
    'IV': 4,
    'V' : 5,
    'IX': 9,
    'X' : 10,
    'XL': 40,
    'L' : 50,
    'C' : 100,
    'CD': 400,
    'D' : 500,
    'CM' : 900,
    'M' : 1000
}

const romanNumeralPriorityOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
const romanNumeralPriorityOrderNotLazy = ['M','CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'V', 'IV', 'I']


function toRomanCommon(num, arr) {
    let output = "";
 
    for (const numeral of arr) {
       
         const division = num / romanNumeralToArabic[numeral]
         const floored = Math.floor(division)
        //  console.log(num, "/", romanNumeralToArabic[numeral], " = ", division)
        //  console.log(floored)
         if (floored > 0) {
            // console.log("this is the numeral", numeral)
            output+= numeral.repeat(floored)
            num -= floored * romanNumeralToArabic[numeral]
            // if the number is 4, add IV to output
         }
    }
  console.log(output)
  return output;
}


// Now that we have the common function, we can remove these two functions that are almost exactly the same. We used the DRY principle (do not repeat yourself)

// function toRomanLazy(num) {
//     let output = "";
//     for (const numeral of romanNumeralPriorityOrder) {
       
//          const division = num / romanNumeralToArabic[numeral]
//          const floored = Math.floor(division)
//         //  console.log(num, "/", romanNumeralToArabic[numeral], " = ", division)
//         //  console.log(floored)
//          if (floored > 0) {
//             // console.log("this is the numeral", numeral)
//             output+= numeral.repeat(floored)
//             num -= floored * romanNumeralToArabic[numeral]
            
//          }
   
//     }

// //   console.log(output)
//   return output;
// }

// function toRoman(num) {
//     let output = "";
 
//     for (const numeral of romanNumeralPriorityOrderNotLazy) {
       
//          const division = num / romanNumeralToArabic[numeral]
//          const floored = Math.floor(division)
//         //  console.log(num, "/", romanNumeralToArabic[numeral], " = ", division)
//         //  console.log(floored)
//          if (floored > 0) {
//             // console.log("this is the numeral", numeral)
//             output+= numeral.repeat(floored)
//             num -= floored * romanNumeralToArabic[numeral]
//             // if the number is 4, add IV to output
//          }
         
//     }

//   console.log(output)
//   return output;
// }

function toRoman(num) {
    return toRomanCommon(num, romanNumeralPriorityOrderNotLazy)
}
function toRomanLazy(num) {
    return toRomanCommon(num, romanNumeralPriorityOrder)
}

module.exports = { toRoman, toRomanLazy };

// toRomanLazy(4); // 'IIII'
// toRomanLazy(150); // 'CL'
toRomanLazy(944); // 'DCCCCXXXXIIII'

// toRoman(4); // 'IV'
// toRoman(150); // 'CL'
toRoman(944); // 'CMXLIV'


