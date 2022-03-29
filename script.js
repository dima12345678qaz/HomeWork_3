//task1
// let sum=1
// const arr=[2,3,4,5]
// for (let i=0;i<arr.length;i++) {
//     sum*=arr[i]
   
      
// }

// console.log(sum)


//task2

// for (let i=0;i<=15;i++) {
//     if (i%2===0) {
//         console.log(i + ' is odd')
//     } else {
//         console.log(i + ' is even')
//     }

// }



//task3

// function randArray(k) {
//   let arr=[]
//   for (let index = 0; index < k; index++) {
//       arr.push(Math.floor(Math.random()*500))

    
//   }
//   return arr
// }

// console.log(randArray(5))


//task4

// let a=prompt('enter a')
// let b=prompt('enter b')
// function raiseToDegree(a,b) {
//     let result=a**b
//     return result
    
// }

// console.log(raiseToDegree(a,b))


//task5
// function findMin() {
//     let min=arguments[0]
//     for (let i=1;i<arguments.length;i++) {
//         if (min>arguments[i]) {
//             min=arguments[i]
//         }
//     }
//     return min
   
    
// }
// console.log(findMin(1,2,3,-1,0))

//task6

// function findUnique(arr) {
//     let result=[]
//     for (let i=0;i<arr.length;i++) {
//         if (!result.includes(arr[i])) {
//             result.push(arr[i])
//         } else {
//             return false
//         }
//     }
//     return true
// }
// console.log(findUnique([1,2,3,4,5,6,3,5]));


//task7
//  function lastElement(arr,count) {
//      arr[arr.length-1]
//      for (let i=arr.length-1;i<count;i--) {

//      }
//  }



//task8

// function textTransform(str) {
//     let words=str.split(' ');
//     let result='';
//     for (let index = 0; index < words.length; index++) {
//          result+=words[index].charAt(0).toUpperCase() + words[index].slice(1) + ' '
        
//     }
//     return result
// }
// console.log(textTransform('javascript is my language'))





function min() {
    return Math.min(arguments);
}

console.log(min(1,2,3,4,5))





