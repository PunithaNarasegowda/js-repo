    // //array is a non primitive data type that enables storing collection of multiple items under a single variable name
    // const arr = [1, 2, 3, 4, 5];
    // arr.splice(2, 0, 10, 20); //adds 10 and 20 at index 2
    // console.log(arr);
    // arr.splice(4, 1); //removes 1 element at index 4
    // console.log(arr);
    // const newarr=arr.slice(1,4); //creates a new array from index 1 to 3
    // console.log(newarr);//slice doesnt mutate the original array
    // //splice mutates the original array
    // const fruits=new Array('apple','banana','grapes');
    // console.log(fruits);
    const numbers=[10,20,30,40,50];
    numbers.unshift(5); //adds 5 at the start of the array
    console.log(numbers);
    numbers.push(60); //adds 60 at the end of the array
    console.log(numbers);
    numbers.shift(); //removes the first element of the array
    console.log(numbers);
    numbers.pop(); //removes the last element of the array
    console.log(numbers);
    console.log(numbers.indexOf(30));
    const myArr=numbers.join();
    console.log(myArr);
    console.log(typeof myArr);
    const revArr=numbers.reverse(); //reverses the array
    console.log(revArr);
    const sortArr=numbers.sort();
    