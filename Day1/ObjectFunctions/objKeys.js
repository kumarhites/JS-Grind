function customObjectKeys(obj) {
  // Handle null and undefined
  if (obj == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  
  // Convert to object (handles primitives like strings, numbers, booleans)
  const object = Object(obj);
  
  const keys = [];
  
  // Iterate through all properties
  for (const key in object) {
    // Only include own properties (not inherited from prototype)
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  
  return keys;
}

// Test examples
console.log(customObjectKeys({ a: 1, b: 2, c: 3 }));
// Output: ['a', 'b', 'c']

console.log(customObjectKeys([1, 2, 3]));
// Output: ['0', '1', '2']

console.log(customObjectKeys('hello'));
// Output: ['0', '1', '2', '3', '4']

console.log(customObjectKeys({ x: 10, y: 20 }));
// Output: ['x', 'y']