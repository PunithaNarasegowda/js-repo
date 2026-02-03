const gameName=new String('punitha');
const name1='punitha';
console.log(name1)
console.log(gameName);
console.log(name1+' is a good girl');
console.log(name1.toUpperCase());
// console.log(name1.__proto__)
// console.log(name1.concat(' is a good girl'));
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(name1.indexOf('n'));
console.log(gameName.includes('u'));
const newString=gameName.concat(' is a good girl');
console.log(newString);
const stringArray=newString.split(' ');
console.log(stringArray);
console.log(stringArray.join('-')); 
console.log(gameName);
const newstring= new String(gameName.substring(0,4)+" is a good girl");
console.log(newstring.indexOf('o'));
console.log(newstring.length);
console.log(newstring.trim());//removes extra spaces in the start and end
console.log(newstring.trim().length);
console.log(newstring.replace(" ", ""));
console.log(newstring.split(' '));
console.log(newstring.replaceAll(" ",""));
