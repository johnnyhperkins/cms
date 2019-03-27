# Project Javascript Style Guide
[Google's Javascript Style Guide](https://google.github.io/styleguide/jsguide.html)

## File Naming
- File names must be all lowercase and may include underscores (`_`) or dashes (`-`).
- We will be using underscores to separate words in our names.  
Examples: `entities_reducer.js`, `users_actions.js` 

## Variable naming
- Class names will be written in `UpperCamelCase`.
- Method, variable, and parameter names will be written in `lowerCamelCase`.
- Constants will use `CONSTANT_CASE`.
- Abbreviations of words will only have the first letter capitalized. For example, a file that renders HTML will be called `RenderHtml`. Another example would be an XML request header will be called `XmlRequestHeader`.

## Line wrapping
- **Prefer to break at a higher syntactic level**  
```javascript
currentEstimate =
  calc(currentEstimate + x * currentEstimate) /
    2.0f;
```
- Longer conditional statements break after the conditional.
```javascript
return someVeryLongCondition &&
  anotherVeryLongCondition &&
  theLastVeryLongCondition
```

## General 
- **Default to using single quotes**
- No single-line, multiple assignments
```javascript
// Don't do this!
let a = 1, b = 2, c = 3;

// Instead do this:
let a = 1;
let b = 2;
let c = 3;
```

## Arrays and Objects
- Arrays and Objects should not use their constructors.
```javascript
const newArray = [];
const newObject = {};
```

- `.slice` is prohibited. Instead use the spread syntax.
```javascript
const newArray = [...oldArray];
```
- Use trailing commans for Array and Object literals
```javascript
const someObject = {
  firstElement: 1,
  secondElement: 2,
}

const someArray = [
  firstElement,
  secondElement,
]
```

## For loops
- Default to `for...of` for arrays
```javascript
for(let element of array) console.log(element);
```
- Default to `for...in` for objects instead of using `Object.keys`
```javascript
for(let key of object) object[key];
```
