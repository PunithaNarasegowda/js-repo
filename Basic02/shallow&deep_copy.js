//shallow copy-->Copies only the top level of an object/array.
//If the object contains other nested objects, those nested objects are NOT copied, only their references are copied.
const obj1 = {
  name: "John",
  details: { city: "Delhi" }
};

const obj2 = { ...obj1 }; // shallow copy

obj2.name = "Hi";  // top-level change
console.log(obj1.name); // "John"  ← remains unchanged
obj2.details.city = "Mumbai";
console.log(obj1.details.city); // "Mumbai" ← reflected!
//Deep copy--> Copies all levels of an object/array.
//All nested objects are also copied, not just their references.
const obj3 = {
  name: "John",
  details: { city: "Delhi" }
};

const obj2 = structuredClone(obj3); // deep copy
obj2.details.city = "Mumbai";
console.log(obj3.details.city); // "Delhi" ✔ stays same
